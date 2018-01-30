const express = require('express');
const router = express.Router();
const passport = require('passport');
const Robot = require('../../model/robot');
const Map = require('../../model/map');
const ObjectId = require('mongoose').Types.ObjectId;

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

var ensureAdministrator = function(req, res, next) {
    if (req.isAuthenticated()) {
        if (req.user.userGroup == 'administrators') {
            return next();
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
};

router.get('/all/:limit/:page', ensureAuthenticated, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page));
    Robot.find({_user: new ObjectId(req.session.passport.user)})
        .limit(limit)
        .skip(limit * page)
        .sort({name:'asc'})
        .populate('_map')
        .exec(function (err, robots) {
            if (err) {
                res.send(err);
            }
            Robot.count({_user: new ObjectId(req.session.passport.user)}).exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count / limit,
                    "total": count,
                    "robots": robots
                });
            });
        });
});

router.get('/search/:limit/:page/:keyword', ensureAuthenticated, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page)),
        keyword = req.params.keyword,
        searchConditions = [{name: keyword}];
    if (keyword.match(/^[0-9a-fA-F]{24}$/)) {
        searchConditions.push({_id:keyword});
    }
    Robot.find({_user: new ObjectId(req.session.passport.user), $or: searchConditions})
        .limit(limit)
        .skip(limit * page)
        .sort({name:'asc'})
        .populate('_map')
        .exec(function (err, robots) {
            if (err) {
                res.send(err);
            }
            Robot.count({_user: new ObjectId(req.session.passport.user), $or: searchConditions}).exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count / limit,
                    "total": count,
                    "robots": robots
                });
            });
        });
});

router.post('/create', ensureAuthenticated, (req, res) => {
    Map.findById(req.body.map, (err, map) => {
        if (err) {
            res.send(err);
        }
        if (map != null && map._user != req.session.passport.user) {
            res.status(500).send('Cannot make a robot in other user\'s map. ');
        } else {
            Robot.findOne({_map: new ObjectId(req.body.map), name: req.body.name}, (err, robot) => {
                if (err) {
                    res.send(err);
                }
                var robot = new Robot({
                    name: req.body.name,
                    isHost: req.body.isHost,
                    isBusy: req.body.isBusy,
                    position: {x: req.body.positionX, y: req.body.positionY},
                    direction: req.body.direction,
                    routes: [],
                    _map: req.body.map,
                    _user: req.user
                });
                robot.save(function (err) {
                    if(err) {
                        res.send(err);
                    } else {
                        res.json(robot);
                    }
                });
            });
        }
    });
});

router.get('/:robotId', ensureAuthenticated, (req, res) => {
    Robot.findById(req.params.robotId)
        .populate('_map')
        .exec(function (err, robot) {
            if (err) {
                res.send(err);
            }
            res.json(robot);
        });
});

router.put('/:robotId', ensureAuthenticated, (req, res) => {
    Robot.findById(req.params.robotId, (err, robot) => {
        if (err) {
            res.send(err);
        }
        if (robot != null && robot._user != req.session.passport.user) {
            res.status(500).send('Cannot set other user\'s robot. ');
        }
        var dataToBe = {
            name: req.body.name,
            isHost: req.body.isHost,
            isBusy: req.body.isBusy,
            position: {x: req.body.positionX, y: req.body.positionY},
            direction: req.body.direction,
            _map: req.body.map
        }
        Robot.findByIdAndUpdate(robot._id, dataToBe, {new: true}, (err, robot) => {
            if (err) {
                res.send(err);
            }
            res.json(robot);
        });
    });
});

router.delete('/:robotId', ensureAuthenticated, (req, res) => {
    Robot.findById(req.params.robotId, (err, robot) => {
        if (err) {
            res.send(err);
        }
        if (robot != null && robot._user != req.session.passport.user) {
            res.status(500).send('Cannot remove other user\'s robot. ');
        }
        Robot.findByIdAndRemove(robot._id, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({result:true});
        });
    });
});

module.exports = router;