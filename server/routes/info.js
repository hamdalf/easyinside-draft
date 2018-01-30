const express = require('express');
const router = express.Router();
const passport = require('passport');
const Info = require('../../model/info');
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

router.get('/infos/:spaceId', ensureAuthenticated, (req, res) => {
    Info.find({_space: new ObjectId(req.params.spaceId)})
        .sort({name: 'asc'})
        .exec(
            function (err, infos) {
                if (err) {
                    res.send(err);
                }
                res.json(infos);
            }
        );
});

router.post('/create', ensureAuthenticated, (req, res) => {
    var info = new Info({
        name: req.body.name,
        type: req.body.type,
        created: Date.now(),
        modified: Date.now(),
        normalized: req.body.name.toLowerCase(),
        description: req.body.description,
        contact: req.body.contact,
        _space: req.body._space,
        _user: req.user,
        picFileName: '',
        picFileSize: 0
    });
    info.save(function(err, infoSaved) {
        if(err) {
            res.send(err);
        } else {
            //infoSaved._id 
            res.json(infoSaved);
        }
    });
});

router.post('/pic-file/:infoId', ensureAuthenticated, (req, res) => {
    Info.findById(req.params.infoId, (err, info) => {
        if (err) {
            res.send(err);
        }
        if (info != null && info._user != req.session.passport.user) {
            res.status(500).send('Cannot change other user\'s info. ');
        }
        var files = req.files;
        var fileCount = Object.keys(req.files).length;
        var fileUploadCount = 0;
        for (var file in files) {
            (function(file) {
                var stream = fs.createReadStream(file.path);
                var s3FS = new s3fs();
                var fileExt = file.name.split('.');
                var uploadFileName = req.params.infoId + '.' + fileExt[1];
                s3FS.writeFile(uploadFileName, stream, 'pics', {'ContentType':file.type,ACL:'public-read'}).then(function() {
                    Info.findByIdAndUpdate(req.params.infoId, {picFileName:uploadFileName, picFileSize:file.size, modified: Date.now()}, {new: true}, (err, freshInfo) => {
                        if (err) {
                            res.send(err);
                        }
                        res.json(freshInfo);
                    });
                }, function(reason) {
                    res.status(500).send(reason.toString());
                });
            })(files[file])
        }
    });
});

router.put('/:infoId', ensureAuthenticated, (req, res) => {
    var infoToBe = {
        name: req.body.name,
        type: req.body.type,
        modified: Date.now(),
        normalized: req.body.name.toLowerCase(),
        description: req.body.description,
        contact: req.body.contact
    };
    Info.findById(req.params.infoId, (err, info) => {
        if (err) {
            res.send(err);
        }
        if (!err && info != null && info._user != req.session.passport.user) {
            res.status(500).send('Cannot modify other user\'s info. ');
        } else {
            Info.findByIdAndUpdate(req.params.infoId, infoToBe, {new: true}, (err, freshInfo) => {
                if (err) {
                    res.send(err);
                }
                res.json(freshInfo);
            });
        }
    });
});

router.put('/setmap/:infoId', ensureAuthenticated, (req, res) => {
    var infoToBe = {
        _map: new ObjectId(req.body.mapid)
    };
    Info.findById(req.params.infoId, (err, info) => {
        if (err) {
            res.send(err);
        }
        if (!err && info != null && info._user != req.session.passport.user) {
            res.status(500).send('Cannot modify other user\'s info. ');
        } else {
            Info.findByIdAndUpdate(req.params.infoId, infoToBe, {new: true}, (err, freshInfo) => {
                if (err) {
                    res.send(err);
                }
                res.json(freshInfo);
            });
        }
    });
});

router.put('/delmap/:infoId', ensureAuthenticated, (req, res) => {
    var infoToBe = {
        _map: null
    };
    Info.findById(req.params.infoId, (err, info) => {
        if (err) {
            res.send(err);
        }
        if (!err && info != null && info._user != req.session.passport.user) {
            res.status(500).send('Cannot modify other user\'s info. ');
        } else {
            Info.findByIdAndUpdate(req.params.infoId, infoToBe, {new: true}, (err, freshInfo) => {
                if (err) {
                    res.send(err);
                }
                res.json(freshInfo);
            });
        }
    });
});

router.get('/:infoId', ensureAuthenticated, (req, res) => {
    Info.findById(req.params.infoId, (err, info) => {
        if (err) {
            res.send(err);
        }
        if (info != null && info._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s info. ');
        }
        res.json(info);
    });
});

router.delete('/:infoId', ensureAuthenticated, (req, res) => {
    Info.findById(req.params.infoId, (err, info) => {
        if (err) {
            res.send(err);
        }
        if (!err && info != null && info._user != req.session.passport.user) {
            res.status(500).send('Cannot delete other user\'s info. ');
        } else {
            Info.findByIdAndRemove(req.params.infoId, (err) => {
                if (err) {
                    res.send(err);
                }
                res.json({result:true});
            });
        }
    });
});

module.exports = router;