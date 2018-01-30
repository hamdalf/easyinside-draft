const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../model/user');
const Space = require('../../model/space');
const Map = require('../../model/map');
const ObjectId = require('mongoose').Types.ObjectId;
const multiParty = require('connect-multiparty');
const s3fs = require('../modules/s3file');
const fs = require('fs');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

var ensureAdministrator = function(req, res, next) {
    if (req.isAuthenticated()) {
        /*User.findById(req.session.passport.user, (err, user) => {
            if (err) {
                res.redirect('/');
            }*/
            if (req.user.userGroup == 'administrators') {
                return next();
            } else {
                res.redirect('/');
            }
        //});
    } else {
        res.redirect('/');
    }
};

var multiPartyMiddleware = multiParty();
router.use(multiPartyMiddleware);

router.get('/spaces', ensureAuthenticated, (req, res) => {
    User.findById(req.session.passport.user)
    .populate('spaces')
    .exec(function (err, user) {
        if (err) {
            res.send(err);
        } else {
            res.json(user.spaces);
        }
    });
});

router.post('/create', ensureAuthenticated, (req, res) => {
    Space.findOne({_user: new ObjectId(req.session.passport.user), name: req.body.name}, (err, space) => {
        if (err) {
            res.send(err);
        }
        if (!err && space != null) {
            res.status(500).send({error: 'The name is already used'});
        } else {
            User.findById(req.session.passport.user, (err, user) => {
                var space = new Space({
                    name: req.body.name,
                    description: req.body.description,
                    searchable: false,    // enable to search by other users
                    published: false,
                    created: Date.now(),
                    maps: [],
                    _user: user
                });
                space.save(function(err) {
                    if(err) {
                        res.send(err);
                    } else {
                        user.spaces.push(space);
                        user.save();
                        res.json(space);
                    }
                });
            });
        }
    });
});

router.put('/:spaceId', ensureAuthenticated, (req, res) => {
    var dataToBe = {
        name: req.body.name,
        description: req.body.description,
        searchable: req.body.searchable,
        published: req.body.published
    };
    Space.findOne({_user: req.session.passport.user, name: dataToBe.name}, (err, space) => {
        if (err) {
            res.send(err);
        }
        if (!err && space != null && space._id != req.params.spaceId) {
            res.status(500).send('The name is already used.');
        } else {
            Space.findByIdAndUpdate(req.params.spaceId, dataToBe, {new: true}, (err, space) => {
                if (err) {
                    res.send(err);
                }
                res.json(space);
            });
        }
    });
});

router.delete('/:spaceId', ensureAuthenticated, (req, res) => {
    Space.findById(req.params.spaceId, (err, space) => {
        if (err) {
            res.send(err);
        }
        if (!err && space != null && space._user != req.session.passport.user) {
            res.status(500).send('Cannot delete other user\'s space. ');
        } else {
            Space.findByIdAndRemove(req.params.spaceId, (err) => {
                if (err) {
                    res.send(err);
                }
                User.findById(req.session.passport.user, (err, user) => {
                    if (err) {
                        res.send(err);
                    }
                    for (var i = 0; i < user.spaces.length; i++) {
                        if (user.spaces[i] == req.params.spaceId) {
                            user.spaces.splice(i, 1);
                            break;
                        }
                    }
                    user.save(function(err) {
                        if(err) {
                            res.send(err);
                        } else {
                            res.json({result:true});
                        }
                    });
                });
            });
        }
    });
});

router.get('/space/:spaceid', ensureAuthenticated, (req, res) => {
    Space.findById(req.params.spaceid, (err, space) => {
        if (err) {
            res.send(err);
        }
        res.json(space);
    });
});

/**
 * map
 */
router.post('/map', ensureAuthenticated, (req, res) => {
    Map.findOne({_space: new ObjectId(req.body.spaceId), name: req.body.name}, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (!err && map != null) {
            res.status(500).send({error: 'The name is already used'});
        } else {
            Space.findById(req.body.spaceId, (err, space) => {
                var map = new Map({
                    name: req.body.name,
                    created: Date.now(),
                    modified: Date.now(),
                    width: 1000,         // centimeter
                    height: 1000,        // centimeter
                    voxelSize: 10,      // centimeter
                    fileName: '',
                    fileSize: 0,
                    fileModified: Date.now(),
                    optFileName: '',
                    optFileSize: 0,
                    optModified: Date.now(),
                    objFileName: '',
                    objFileSize: 0,
                    objMofified: Date.now(),
                    searchable: false,    // enable to search by other users
                    allowRobot: false,
                    usePath: false,
                    security: 'private',    // private, password, public
                    password: '',
                    _space: space,
                    _user: req.user
                });
                map.save(function(err) {
                    if(err) {
                        res.send(err);
                    } else {
                        space.maps.push(map);
                        space.save();
                        // reducing AWS S3 traffic, file is not created in this time.
                        //var s3FS = new s3fs();
                        //s3FS.writeFile(map._id.toString() + '.json', '{}', 'maps', {'ContentType':'application/json',ACL:'public-read'}).then(function() {
                            res.json(map);
                        //}, function(reason) {
                        //    res.status(500).send(reason.toString());
                        //});
                    }
                });
            });
        }
    });
});

router.post('/map-file/:mapId', ensureAuthenticated, (req, res) => {
    Map.findById(req.params.mapId, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (map != null && map._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s spaces. ');
        }
        var stream = req.body.file;
        var uploadFileName = map._id.toString() + '.json';
        //console.log(stream);
        var s3FS = new s3fs();
        s3FS.writeFile(uploadFileName, stream, 'maps', {'ContentType':'application/json',ACL:'public-read'}).then(function() {
            //res.json({result:true});
            Map.findByIdAndUpdate(map._id, {fileName:uploadFileName, fileSize:Buffer.byteLength(stream, 'utf8'), fileModified:Date.now(), modified:Date.now()}, {new: true}, (err, map) => {
                if (err) {
                    res.send(err);
                }
                res.json({result:true,file:uploadFileName});
            });
        }, function(reason) {
            res.status(500).send(reason.toString());
        });
    });
});

router.post('/map-bg/:mapId', ensureAuthenticated, (req, res) => {
    Map.findById(req.params.mapId, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (map != null && map._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s spaces. ');
        }
        var files = req.files;
        var fileCount = Object.keys(req.files).length;
        var fileUploadCount = 0;
        for (var file in files) {
            (function(file) {
                var stream = fs.createReadStream(file.path);
                var s3FS = new s3fs();
                var fileExt = file.name.split('.');
                var uploadFileName = req.params.mapId + '.' + fileExt[1];
                s3FS.writeFile(uploadFileName, stream, 'gridbgs', {'ContentType':file.type,ACL:'public-read'}).then(function() {
                    Map.findByIdAndUpdate(req.params.mapId, {bgImgName:uploadFileName, bgImgSize:file.size, modified: Date.now()}, {new: true}, (err, map) => {
                        if (err) {
                            res.send(err);
                        }
                        res.json({result:true,file:uploadFileName});
                    });
                }, function(reason) {
                    res.status(500).send(reason.toString());
                });
            })(files[file])
        }
    });
});

router.post('/opt-file/:mapId', ensureAuthenticated, (req, res) => {
    Map.findById(req.params.mapId, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (map != null && map._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s spaces. ');
        }
        var stream = req.body.file;
        var uploadFileName = map._id.toString() + '.json';
        //console.log(stream);
        var s3FS = new s3fs();
        s3FS.writeFile(uploadFileName, stream, 'opts', {'ContentType':'application/json',ACL:'public-read'}).then(function() {
            //res.json({result:true});
            Map.findByIdAndUpdate(map._id, {optFileName:uploadFileName, optFileSize:Buffer.byteLength(stream, 'utf8'), optModified:Date.now(), modified:Date.now()}, {new: true}, (err, map) => {
                if (err) {
                    res.send(err);
                }
                res.json({result:true,file:uploadFileName});
            });
        }, function(reason) {
            res.status(500).send(reason.toString());
        });
    });
});

router.post('/desk-file/:mapId', ensureAuthenticated, (req, res) => {
    Map.findById(req.params.mapId, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (map != null && map._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s spaces. ');
        }
        var stream = req.body.file;
        var uploadFileName = map._id.toString() + '.json';
        //console.log(stream);
        var s3FS = new s3fs();
        s3FS.writeFile(uploadFileName, stream, 'desks', {'ContentType':'application/json',ACL:'public-read'}).then(function() {
            //res.json({result:true});
            Map.findByIdAndUpdate(map._id, {objFileName:uploadFileName, objFileSize:Buffer.byteLength(stream, 'utf8'), objMofified:Date.now(), modified:Date.now()}, {new: true}, (err, map) => {
                if (err) {
                    res.send(err);
                }
                res.json({result:true,file:uploadFileName});
            });
        }, function(reason) {
            res.status(500).send(reason.toString());
        });
    });
});

router.get('/maps/:spaceId', ensureAuthenticated, (req, res) => {
    Space.findById(req.params.spaceId)
        .populate('maps')
        .exec(function (err, space) {
            if (err) {
                res.send(err);
            }
            if (space != null && space._user != req.session.passport.user) {
                res.status(500).send('Cannot get other user\'s spaces. ');
            }
            res.json(space.maps);
        });
});

router.get('/map/:mapId', ensureAuthenticated, (req, res) => {
    Map.findById(req.params.mapId, (err, map) => {
        if (err) {
            res.send(err);
        }
        /*Space.findById(map._space, (err, space) => {
            if (err) {
                res.send(err);
            }
            if (space != null && space._user != req.session.passport.user) {
                res.status(500).send('Cannot get other user\'s spaces. ');
            }
            res.json(map);
        });*/
        if (map != null && map._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s spaces. ');
        }
        res.json(map);
    });
});

router.put('/map/:mapId', ensureAuthenticated, (req, res) => {
    var dataToBe = {
        name: req.body.name,
        modified: Date.now(),
        width: req.body.width,
        height: req.body.height,
        voxelSize: req.body.voxelSize,
        searchable: req.body.searchable,    // enable to search by other users
        allowRobot: req.body.allowRobot,
        usePath: req.body.usePath,
        security: req.body.security,        // private, password, public
        password: req.body.password
    };
    Map.findOne({name: dataToBe.name}, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (!err && map != null && map._id != req.params.mapId) {
            res.status(500).send('The name is already used.');
        } else {
            Map.findByIdAndUpdate(req.params.mapId, dataToBe, {new: true}, (err, map) => {
                if (err) {
                    res.send(err);
                }
                res.json(map);
            });
        }
    });
});

router.delete('/map/:mapId', ensureAuthenticated, (req, res) => {
    Map.findById(req.params.mapId)
        .populate('_space')
        .exec(function (err, map) {
            if (err) {
                res.send(err);
            }
            if (map != null && map._space._user != req.session.passport.user) {
                res.status(500).send('Cannot delete other user\'s map.');
            }
            var spaceId = map._space._id;
            Map.findByIdAndRemove(req.params.mapId, (err) => {
                if (err) {
                    res.send(err);
                }
                Space.findById(spaceId, (err, space) => {
                    if (err) {
                        res.send(err);
                    }
                    for (var i = 0; i < space.maps.length; i++) {
                        if (space.maps[i] == req.params.mapId) {
                            space.maps.splice(i, 1);
                            break;
                        }
                    }
                    space.save(function(err) {
                        if(err) {
                            res.send(err);
                        } else {
                            var fs = new s3fs();
                            fs.unlink('maps/' + req.params.mapId + '.json').then(function() {
                                res.json({result:true});
                            }, function(reason) {
                                res.status(500).send(reason.toString());
                            });
                        }
                    });
                });
            });
        });
});

router.get('/recent-maps', ensureAuthenticated, (req, res) => {
    Map.find({_user: new ObjectId(req.session.passport.user)})
        .select('-created -voxelSize -width -height -bgImgName -bgImgSize -fileName -fileSize -searchable -security -password -_space')
        .limit(5)
        .sort({modified: 'desc'})
        .exec(
            function (err, maps) {
                if (err) {
                    res.send(err);
                }
                res.json(maps);
            }
        );
});

router.get('/allmaps', ensureAuthenticated, (req, res) => {
    Map.find({_user: new ObjectId(req.session.passport.user)})
        .select('-created -voxelSize -width -height -bgImgName -bgImgSize -fileName -fileSize -searchable -security -password -_space')
        .sort({name: 'asc'})
        .exec(
            function (err, maps) {
                if (err) {
                    res.send(err);
                }
                res.json(maps);
            }
        );
});

router.get('/allmapscount', ensureAuthenticated, (req, res) => {
    Map.count({_user: new ObjectId(req.session.passport.user)})
        .exec(
            function (err, count) {
                if (err) {
                    res.send(err);
                }
                res.json({"maps":count});
            }
        );
});

module.exports = router;