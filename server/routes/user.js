const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../model/user');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

var ensureAdministrator = function(req, res, next) {
    if (req.isAuthenticated()) {
        //req.session.passport.user
        if (req.user.userGroup == 'administrators') {
            return next();
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
};

router.get('/:userid', ensureAuthenticated, (req, res) => {
    User.find({ _id: req.params.userid }, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

router.put('/:userid', ensureAuthenticated, (req, res) => {
    var dataToBe = {
        oauthID: req.body.oauthID,
        provider: req.body.provider,
        name: req.body.name,
        created: req.body.created,
        userGroup: req.body.userGroup,
        grade: req.body.grade
    };
    User.findByIdAndUpdate(req.params.userid, dataToBe, {new: true}, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
});

router.delete('/:userid', ensureAdministrator, (req, res) => {
    User.remove({_id: req.params.userid}, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({result:true});
    });
});

router.get('/list/:limit/:page', ensureAdministrator, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page));
    User.find().limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, users) {
            if (err) {
                res.send(err);
            }
            User.count().exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count / limit,
                    "total": count,
                    "users": users
                });
            });
        }
    );
});

router.get('/search/:limit/:page/:keyword', ensureAdministrator, (req, res) => {
    var limit = parseInt(req.params.limit),
        page = Math.max(0, parseInt(req.params.page)),
        keyword = req.params.keyword,
        searchConditions = [{oauthID: keyword}, {name: keyword}];
    if (keyword.match(/^[0-9a-fA-F]{24}$/)) {
        searchConditions.push({_id:keyword});
    }
    User.find({ $or: searchConditions }).limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, users) {
            if (err) {
                res.send(err);
            }
            User.count({ $or: searchConditions }).exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": users.length / limit,
                    "total": users.length,
                    "keyword": keyword,
                    "users": users
                });
            });
        }
    );
});

module.exports = router;