const express = require('express');
const router = express.Router();
const passport = require('passport');
const Ding = require('../../model/ding');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        // req.user has user object
        return next();
    } else {
        //res.redirect('/');
        res.status(500).send({error: 'AUTH_NEEDED'});
    }
};

router.get('/list/:limit/:page', ensureAuthenticated, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page));
    Ding.find().limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, dings) {
            if (err) {
                res.send(err);
            }
            Ding.count().exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count / limit,
                    "total": count,
                    "dings": dings
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
    Ding.find({ $or: searchConditions }).limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, dings) {
            if (err) {
                res.send(err);
            }
            Ding.count({ $or: searchConditions }).exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count.length / limit,
                    "total": count.length,
                    "keyword": keyword,
                    "dings": dings
                });
            });
        }
    );
});

router.get('/availables', ensureAuthenticated, (req, res) => {
    Ding.find({ $or: [{published: true}, {_user: req.user}] }).sort({name: 'asc'}).exec(
        function (err, dings) {
            if (err) {
                res.send(err);
            }
            Ding.count({ $or: [{published: true}, {_user: req.user}] }).exec(function (err, count) {
                res.json({
                    "total": count.length,
                    "dings": dings
                });
            });
        }
    );
});

router.post('/create', ensureAuthenticated, (req, res) => {
    Ding.findOne({name: req.body.name}, (err, ding) => {
        if (err) {
            res.send(err);
        }
        if (!err && ding != null) {
            res.status(500).send({error: 'The name is already used'});
        } else {
            var ding = new Ding({
                name: req.body.name,
                type: req.body.type,
                geometry: req.body.geometry,
                texture: req.body.texture,
                material: req.body.material,
                created: Date.now(),
                modified: Date.now(),
                published: req.body.published,
                _user: req.user
            });
            ding.save(function(err) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(ding);
                }
            });
        }
    });
});

router.get('/:dingId', ensureAuthenticated, (req, res) => {
    Ding.findById(req.params.dingId)
    .populate('texture geometry')
    .exec(function (err, ding) {
        if (err) {
            res.send(err);
        }
        if (ding != null && ding._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s thing. ');
        }
        res.json(ding);
    });
});

router.put('/:dingId', ensureAuthenticated, (req, res) => {
    var dataToBe = {
        name: req.body.name,
        type: req.body.type,
        geometry: req.body.geometry,
        texture: req.body.texture,
        material: req.body.material,
        modified: Date.now(),
        published: req.body.published
    };
    Ding.findOne({_user: req.session.passport.user, name: dataToBe.name}, (err, ding) => {
        if (err) {
            res.send(err);
        }
        if (!err && ding != null && ding._id != req.params.dingId) {
            res.status(500).send('The name is already used.');
        } else {
            Ding.findByIdAndUpdate(req.params.dingId, dataToBe, {new: true}, (err, ding) => {
                if (err) {
                    res.send(err);
                }
                res.json(ding);
            });
        }
    });
});

router.delete('/:dingId', ensureAuthenticated, (req, res) => {
    Ding.findById(req.params.dingId, (err, ding) => {
        if (ding != null && ding._user != req.session.passport.user) {
            res.status(500).send('Cannot delete other user\'s thing.');
        }
        Ding.findByIdAndRemove(req.params.dingId, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({result:true});
        });
    });
});

module.exports = router;