const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ding = require('../../model/ding');
const Space = require('../../model/space');
const Map = require('../../model/map');
const Info = require('../../model/info');
const Robot = require('../../model/robot');
const ObjectId = require('mongoose').Types.ObjectId;
const PathFinder = require('../modules/pathfinder');
var Auth = {};

Auth.ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        //res.redirect('/');
        res.status(500).send({error: 'AUTH_NEEDED'});
    }
};

/* GET api listing */
router.get('/', (req, res) => {
    res.send('api works');
});

router.get('/dings/json', (req, res) => {
    if (req.session.passport) {
        Ding.find({ $or: [{published: true}, {_user: req.user}] })
        .select('-created -published -_user -modified -__v')
        //.populate('texture geometry', 'data opacity shading color map')
        .populate({
            path: 'geometry',
            select: 'data -_id'
        })
        .populate({
            path: 'texture',
            select: 'opacity shading color map -_id'
        })
        .sort({type: 'asc'})
        .exec(
            function (err, dings) {
                if (err) {
                    res.send(err);
                }

                res.json(dings);
            }
        );
    } else {
        Ding.find({published: true})
        .populate({
            path: 'geometry',
            select: 'data -_id'
        })
        .populate({
            path: 'texture',
            select: 'opacity shading color map -_id'
        })
        .sort({type: 'asc'})
        .exec(
            function (err, dings) {
                if (err) {
                    res.send(err);
                }
                
                var result = dings;

                for (var i = 0; i < result.length; i++) {
                    delete result[i]._user;
                    delete result[i].published;
                    delete result[i].modified;
                    delete result[i].created;
                }

                res.json(result);
            }
        );
    }
});

router.get('/space/:spaceId', (req, res) => {
    Space.findById(req.params.spaceId)
        .populate({
            path: 'maps',
            select: 'name'
        }).
        exec(
            function (err, space) {
                if (err) {
                    res.send(err);
                }
                if (space != null) {
                    res.json(space);
                }
            }
        );
});

router.get('/map/:mapId', (req, res) => {
    Map.findById(req.params.mapId)
        .populate({
            path: '_space',
            select: 'name maps'
        }).
        exec(
            function (err, map) {
                if (err) {
                    res.send(err);
                }
                if (map != null) {
                    if (map.security === 'private') {
                        res.json({error:'PRIVATE', id:req.params.mapId});
                        //res.status(401).send('This map is private. You can access only via owner\'s management mode.');
                    } else if (map.security === 'password') {
                        var passwordChecked = false;
                        if (req.session.maps) {
                            var allowedMaps = req.session.maps.split(',');
                            for (var i = 0; i < allowedMaps.length; i++) {
                                if (allowedMaps[i] === req.params.mapId) {
                                    passwordChecked = true;
                                    res.json(map);
                                }
                            }
                        }
                        if (!passwordChecked) {
                            res.json({error:'PASSWORD', id:req.params.mapId});
                        }
                    } else {
                        res.json(map);
                    }
                }
            }
        );
});

router.post('/mapauth/:mapId', (req, res) => {
    Map.findById(req.params.mapId)
        .exec(
            function (err, map) {
                if (err) {
                    res.send(err);
                }
                if (map != null) {
                    if (map.password === req.body.password) {
                        var maps = [];
                        if (req.session.maps) {
                            maps = req.session.maps.split(',');
                        }
                        maps.push(req.params.mapId);
                        req.session.maps = maps.join(',');
                        res.json({result:'PASS'});
                    } else {
                        res.json({error:'PASSWORD'});
                    }
                }
            }
        );
});

router.get('/info/json/:spaceId', (req, res) => {
    Info.find({_space: new ObjectId(req.params.spaceId)})
        .populate({
            path: '_map',
            select: 'name'
        })
        .sort({normalized: 'asc'})
        .exec(
            function (err, infos) {
                if (err) {
                    res.send(err);
                }
                res.json(infos);
            }
        );
});



router.get('/robotregister/:mapId/:robotName/:passwd', (req, res) => {
    console.log(req.params.mapId);
    Map.findById(req.params.mapId)
        .exec(
            function(err, map) {
                if (err) {
                    res.send(err);
                }
                if (map != null) {
                    if (map.security === 'public') {
                        Robot.findOne({_map:new ObjectId(req.params.mapId), name:req.params.robotName}, (err, robot) => {
                            if (err) {
                                res.send(err);
                            }
                            if (!err && robot != null) {
                                res.status(500).send({error: 'The name is already used in this map'});
                            } else {
                                var robot = new Robot({
                                    name: req.params.robotName,
                                    isHost: false,
                                    isBusy: false,
                                    position: {x:0,y:0},
                                    direction: 'x+',
                                    routes: [],
                                    _map: map,
                                    _user: map._user
                                });
                                robot.save(function(err) {
                                    if (err) {
                                        res.send(err);
                                    } else {
                                        robot._map = map._id;
                                        res.json(robot);
                                    }
                                });
                            }
                        });
                    } else {
                        if (map.password === req.params.passwd) {
                            Robot.findOne({_map:new ObjectId(req.params.mapId), name:req.params.robotName}, (err, robot) => {
                                if (err) {
                                    res.send(err);
                                }
                                if (!err && robot != null) {
                                    res.status(500).send({error: 'The name is already used in this map'});
                                } else {
                                    var robot = new Robot({
                                        name: req.params.robotName,
                                        isHost: false,
                                        isBusy: false,
                                        position: {x:0,y:0},
                                        direction: 'x+',
                                        routes: [],
                                        _map: map,
                                        _user: map._user
                                    });
                                    robot.save(function(err) {
                                        if (err) {
                                            res.send(err);
                                        } else {
                                            robot._map = map._id;
                                            res.json(robot);
                                        }
                                    });
                                }
                            });
                        } else {
                            res.json({error:'PRIVATE MAP PASSWORD REQUIRED', id:req.params.mapId});
                        }
                    }
                } else {
                    res.json({error:'WRONG MAP ID', id:req.params.mapId});
                }
            }
        );
});

router.get('/robotdelete/:robotId/:passwd', (req, res) => {
    Robot.findById(req.params.robotId)
        .populate({
            path: '_map',
            select: 'security password'
        })
        .exec(
            function(err, robot) {
                if (err) {
                    res.send(err);
                }
                if (robot.isHost === true) {
                    res.send({error:'ONLY GUEST ROBOT CAN BE DELETED', id:robot._id});
                } else {
                    if (robot._map.security === 'public') {
                        Robot.findByIdAndRemove(req.params.robotId, (err) => {
                            if (err) {
                                res.send(err);
                            }
                            res.json({result:true});
                        });
                    } else {
                        if (robot._map.password === req.params.passwd) {
                            Robot.findByIdAndRemove(req.params.robotId, (err) => {
                                if (err) {
                                    res.send(err);
                                }
                                res.json({result:true});
                            });
                        } else {
                            res.json({error:'PRIVATE MAP PASSWORD REQUIRED', id:req.params.robotId});
                        }
                    }
                }
            }
        );
});

router.get('/robotposition/:robotId/:x/:y/:d', (req, res) => {
    var dataToBe = {
        position: {x:parseInt(req.params.x),y:parseInt(req.params.y)},
        direction: req.params.d
    }
    Robot.findByIdAndUpdate(req.params.robotId, dataToBe, {new:true}, (err, robot) => {
        if (err) {
            res.send(err);
        }
        res.json(robot);
    });
});

router.get('/robotidle/:mapId', (req, res) => {
    Robot.findOne({_map: new ObjectId(req.params.mapId), isBusy: false, isHost: true})
        .exec(
            function(err, robot) {
                if (err) {
                    res.send(err);
                }
                if (!err && robot == null) {
                    res.send({error:'NOROBOT', id:req.params.mapId});
                }
                if (robot != null) {
                    if (robot.isBusy) {
                        res.send({error:'BUSY', id:robot._id});
                    } else {
                        Robot.findByIdAndUpdate(robot._id, {isBusy:true}, {new:true}, (err, robot) => {
                            res.json(robot);
                        });
                    }
                }
            }
        );
});

router.get('/robotselect/:robotId', (req, res) => {
    Robot.findById(req.params.robotId)
        .exec(
            function(err, robot) {
                if (err) {
                    res.send(err);
                }
                if (robot != null) {
                    if (robot.isBusy) {
                        res.send({error:'BUSY', id:robot._id});
                    } else {
                        Robot.findByIdAndUpdate(robot._id, {isBusy:true}, {new:true}, (err, robot) => {
                            res.json(robot);
                        });
                    }
                }
            }
        );
});

router.get('/robotfree/:robotId', (req, res) => {
    var dataToBe = {
        isBusy: false,
        routes: []
    }
    Robot.findByIdAndUpdate(req.params.robotId, dataToBe, {new:true}, (err, robot) => {
        if (err) {
            res.send(err);
        }
        res.json(robot);
    });
});

router.get('/robotinmap/:mapId', (req, res) => {
    Robot.find({_map:new ObjectId(req.params.mapId)})
        .select('-routes -_map -_user')
        .exec(
            function (err, robots) {
                if (err) {
                    res.send(err);
                }
                res.json(robots);
            }
        );
});

router.put('/robotroute/:robotId', (req, res) => {
    Robot.findById(req.params.robotId, (err, robot) => {
        if (err) {
            res.send(err);
        }
        if (robot.isBusy === false) {
            res.send({error:'IDLE', id:robot._id});
        } else {
            let route = JSON.parse(req.body.route);
            robot.routes = route;
            robot.save(function (err) {
                if(err) {
                    res.send(err);
                } else {
                    res.json({result:true});
                }
            });
        }
    });
});

router.get('/robotmessage/:robotId', (req, res) => {
    Robot.findById(req.params.robotId, (err, robot) => {
        if (err) {
            res.send(err);
        }
        var routes = [],
            routesLength = robot.routes.length;
        for (var i = 0; i < routesLength; i++) {
            routes.push({
                x: robot.routes[i].x,
                y: robot.routes[i].y,
                w: robot.routes[i].weight,
                f: robot.routes[i].f
            });
        }
        robot.routes = routes;
        res.json(robot);
    });
});

router.get('/mapsearchablelist/:limit/:page', (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page));
    Map.find({ searchable: true }).limit(limit).skip(limit * page)
        .populate({
            path: '_space',
            select: 'name description'
        })
        .sort({name: 'asc'}).exec(
            function (err, maps) {
                if (err) {
                    res.send(err);
                }
                Map.count().exec(function (err, count) {
                    res.json({
                        "page": page,
                        "limit": limit,
                        "pages": count / limit,
                        "total": count,
                        "maps": maps
                    });
                });
            }
        );
});

router.get('/mapsearchablebykeyword/:limit/:page/:keyword', (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page)),
        keyword = req.params.keyword,
        searchConditions = [{name: new RegExp(keyword, 'i')}];
    if (keyword.match(/^[0-9a-fA-F]{24}$/)) {
        searchConditions.push({_id:keyword});
    }
    Map.find({ searchable: true, $or: searchConditions }).limit(limit).skip(limit * page)
        .populate({
            path: '_space',
            select: 'name description'
        })
        .sort({name: 'asc'}).exec(
            function (err, maps) {
                if (err) {
                    res.send(err);
                }
                Map.count({ searchable: true, $or: searchConditions }).exec(function (err, count) {
                    res.json({
                        "page": page,
                        "limit": limit,
                        "pages": count / limit,
                        "total": count,
                        "keyword": keyword,
                        "maps": maps
                    });
                });
            }
        );
});

router.get('/spacesearchablelist/:limit/:page', (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page));
    Space.find({ published: true }).limit(limit).skip(limit * page)
        .populate({
            path: 'maps',
            select: 'name security allowRobot'
        })
        .sort({name: 'asc'}).exec(
            function (err, spaces) {
                if (err) {
                    res.send(err);
                }
                Space.count().exec(function (err, count) {
                    res.json({
                        "page": page,
                        "limit": limit,
                        "pages": count / limit,
                        "total": count,
                        "spaces": spaces
                    });
                });
            }
        );
});

router.get('/spacesearchablebykeyword/:limit/:page/:keyword', (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page)),
        keyword = req.params.keyword,
        searchConditions = [{name: new RegExp(keyword, 'i')}];
    if (keyword.match(/^[0-9a-fA-F]{24}$/)) {
        searchConditions.push({_id:keyword});
    }
    Space.find({ searchable: true, $or: searchConditions }).limit(limit).skip(limit * page)
        .populate({
            path: 'maps',
            select: 'name security allowRobot'
        })
        .sort({name: 'asc'}).exec(
            function (err, spaces) {
                if (err) {
                    res.send(err);
                }
                Space.count({ searchable: true, $or: searchConditions }).exec(function (err, count) {
                    res.json({
                        "page": page,
                        "limit": limit,
                        "pages": count.length / limit,
                        "total": count.length,
                        "keyword": keyword,
                        "spaces": spaces
                    });
                });
            }
        );
});

/*router.get('/graph/:mapId', (req, res) => {
    PathFinder.getGraph(req.params.mapId, function(aGraph) {
        res.json(aGraph);
    });
});*/

/*router.get('/pathfinder/:mapId/:startX/:startY/:endX/:endY', (req, res) => {
    PathFinder.getGraph(req.params.mapId, function(aGraph) {
        var x1 = req.params.startX,
            y1 = req.params.startY,
            x2 = req.params.endX,
            y2 = req.params.endY,
            startPoint = aGraph.graph.grid[x1][y1],
            endPoint = aGraph.graph.grid[x2][y2];

        if (endPoint.weight === 0) {
            var safePoint = aGraph.getNearestPoint(x2, y2);
            endPoint = aGraph.graph.grid[safePoint.x][safePoint.y];
        }

        var path = aGraph.astar.search(aGraph.graph, startPoint, endPoint, {closest: false});
        res.json(path);
    });
});*/

/*router.get('/anyrobotsend/:mapId/:x/:y', (req, res) => {
    Robot.findOne({_map: new ObjectId(req.params.mapId), isBusy: false, isHost: true})
        .exec(
            function(err, robot) {
                if (err) {
                    res.send(err);
                }
                if (!err && robot == null) {
                    res.send({error:'NOROBOT', id:req.params.mapId});
                }
                if (robot != null) {
                    if (robot.isBusy) {
                        res.send({error:'BUSY', id:robot._id});
                    }
                    Robot.findByIdAndUpdate(robot._id, {isBusy:true}, {new:true}, (err, robot) => {
                        aGraph = PathFinder.getGraph(robot._map, function(aGraph) {
                            var x1 = robot.position.x,
                                y1 = robot.position.y,
                                x2 = req.params.x,
                                y2 = req.params.y,
                                startPoint = aGraph.graph.grid[x1][y1],
                                endPoint = aGraph.graph.grid[x2][y2];

                            if (endPoint.weight === 0) {
                                var safePoint = aGraph.getNearestPoint(x2, y2);
                                endPoint = aGraph.graph.grid[safePoint.x][safePoint.y];
                            }

                            var path = aGraph.astar.search(aGraph.graph, startPoint, endPoint, {closest: false});
                            Robot.findByIdAndUpdate(robot._id, {routes:path}, {new:true}, (err, robot) => {
                                res.json(path);
                            });
                        });
                    });
                }
            }
        );
});*/

/*router.get('/robotsend/:robotId/:x/:y', (req, res) => {
    Robot.findById(req.params.robotId)
        .exec(
            function(err, robot) {
                if (err) {
                    res.send(err);
                }
                if (robot != null) {
                    if (robot.isBusy) {
                        res.send({error:'BUSY', id:robot._id});
                    }
                    Robot.findByIdAndUpdate(robot._id, {isBusy:true}, {new:true}, (err, robot) => {
                        aGraph = PathFinder.getGraph(robot._map, function(aGraph) {
                            var x1 = robot.position.x,
                                y1 = robot.position.y,
                                x2 = req.params.x,
                                y2 = req.params.y,
                                startPoint = aGraph.graph.grid[x1][y1],
                                endPoint = aGraph.graph.grid[x2][y2];

                            if (endPoint.weight === 0) {
                                var safePoint = aGraph.getNearestPoint(x2, y2);
                                endPoint = aGraph.graph.grid[safePoint.x][safePoint.y];
                            }

                            var path = aGraph.astar.search(aGraph.graph, startPoint, endPoint, {closest: false});
                            Robot.findByIdAndUpdate(robot._id, {routes:path}, {new:true}, (err, robot) => {
                                res.json(path);
                            });
                        });
                    });
                }
            }
        );
});*/

module.exports = router;