const express = require('express');
const router = express.Router();
const passport = require('passport');
const Geometry = require('../../model/geometry');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        // req.user has user object
        return next();
    } else {
        res.redirect('/');
    }
};

router.get('/list/:limit/:page', ensureAuthenticated, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page));
    Geometry.find().limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, geometries) {
            if (err) {
                res.send(err);
            }
            Geometry.count().exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count / limit,
                    "total": count,
                    "geometries": geometries
                });
            });
        }
    );
});

router.get('/search/:limit/:page/:keyword', ensureAuthenticated, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page)),
        keyword = req.params.keyword,
        searchConditions = [{name: keyword}];
    if (keyword.match(/^[0-9a-fA-F]{24}$/)) {
        searchConditions.push({_id:keyword});
    }
    Geometry.find({ $or: searchConditions }).limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, geometries) {
            if (err) {
                res.send(err);
            }
            Geometry.count({ $or: searchConditions }).exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count.length / limit,
                    "total": count.length,
                    "keyword": keyword,
                    "geometries": geometries
                });
            });
        }
    );
});

router.get('/availables', ensureAuthenticated, (req, res) => {
    Geometry.find({ $or: [{published: true}, {_user: req.user}] }).sort({name: 'asc'}).exec(
        function (err, geometries) {
            if (err) {
                res.send(err);
            }
            Geometry.count({ $or: [{published: true}, {_user: req.user}] }).exec(function (err, count) {
                res.json({
                    "total": count.length,
                    "geometries": geometries
                });
            });
        }
    );
});

router.post('/create', ensureAuthenticated, (req, res) => {
    Geometry.findOne({name: req.body.name}, (err, geometry) => {
        if (err) {
            res.send(err);
        }
        if (!err && geometry != null) {
            res.status(500).send({error: 'The name is already used'});
        } else {
            var geometry = new Geometry({
                name: req.body.name,
                data: req.body.data,
                created: Date.now(),
                modified: Date.now(),
                published: false,
                _user: req.user
            });
            geometry.save(function(err) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(geometry);
                }
            });
        }
    });
});

router.get('/:geometryId', ensureAuthenticated, (req, res) => {
    Geometry.findById(req.params.geometryId, (err, geometry) => {
        if (err) {
            res.send(err);
        }
        if (geometry != null && geometry._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s geometry. ');
        }
        res.json(geometry);
    });
});

router.put('/:geometryId', ensureAuthenticated, (req, res) => {
    var dataToBe = {
        name: req.body.name,
        data: req.body.data,
        modified: Date.now(),
        published: req.body.published
    };
    Geometry.findOne({_user: req.session.passport.user, name: dataToBe.name}, (err, geometry) => {
        if (err) {
            res.send(err);
        }
        if (!err && geometry != null && geometry._id != req.params.geometryId) {
            res.status(500).send('The name is already used.');
        } else {
            Geometry.findByIdAndUpdate(req.params.geometryId, dataToBe, {new: true}, (err, geometry) => {
                if (err) {
                    res.send(err);
                }
                res.json(geometry);
            });
        }
    });
});

router.delete('/:geometryId', ensureAuthenticated, (req, res) => {
    Geometry.findById(req.params.geometryId, (err, geometry) => {
        if (geometry != null && geometry._user != req.session.passport.user) {
            res.status(500).send('Cannot delete other user\'s geometry.');
        }
        Geometry.findByIdAndRemove(req.params.geometryId, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({result:true});
        });
    });
});

module.exports = router;