const express = require('express');
const router = express.Router();
const passport = require('passport');
const Texture = require('../../model/texture');

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
    Texture.find().limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, textures) {
            if (err) {
                res.send(err);
            }
            Texture.count().exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count / limit,
                    "total": count,
                    "textures": textures
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
    Texture.find({ $or: searchConditions }).limit(limit).skip(limit * page).sort({name: 'asc'}).exec(
        function (err, textures) {
            if (err) {
                res.send(err);
            }
            Texture.count({ $or: searchConditions }).exec(function (err, count) {
                res.json({
                    "page": page,
                    "limit": limit,
                    "pages": count.length / limit,
                    "total": count.length,
                    "keyword": keyword,
                    "textures": textures
                });
            });
        }
    );
});

router.get('/availables', ensureAuthenticated, (req, res) => {
    Texture.find({ $or: [{published: true}, {_user: req.user}] }).sort({name: 'asc'}).exec(
        function (err, textures) {
            if (err) {
                res.send(err);
            }
            Texture.count({ $or: [{published: true}, {_user: req.user}] }).exec(function (err, count) {
                res.json({
                    "total": count.length,
                    "textures": textures
                });
            });
        }
    );
});

router.post('/create', ensureAuthenticated, (req, res) => {
    Texture.findOne({name: req.body.name}, (err, texture) => {
        if (err) {
            res.send(err);
        }
        if (!err && texture != null) {
            res.status(500).send({error: 'The name is already used'});
        } else {
            var texture = new Texture({
                name: req.body.name,
                shading: req.body.shading,
                color: req.body.color,
                map: req.body.map,
                opacity: req.body.opacity,
                created: Date.now(),
                modified: Date.now(),
                published: false,
                _user: req.user
            });
            texture.save(function(err) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(texture);
                }
            });
        }
    });
});

router.get('/:textureId', ensureAuthenticated, (req, res) => {
    Texture.findById(req.params.textureId, (err, texture) => {
        if (err) {
            res.send(err);
        }
        if (texture != null && texture._user != req.session.passport.user) {
            res.status(500).send('Cannot get other user\'s texture. ');
        }
        res.json(texture);
    });
});

router.put('/:textureId', ensureAuthenticated, (req, res) => {
    var dataToBe = {
        name: req.body.name,
        shading: req.body.shading,
        color: req.body.color,
        map: req.body.map,
        opacity: req.body.opacity,
        modified: Date.now(),
        published: req.body.published
    };
    Texture.findOne({_user: req.session.passport.user, name: dataToBe.name}, (err, texture) => {
        if (err) {
            res.send(err);
        }
        if (!err && texture != null && texture._id != req.params.textureId) {
            res.status(500).send('The name is already used.');
        } else {
            Texture.findByIdAndUpdate(req.params.textureId, dataToBe, {new: true}, (err, texture) => {
                if (err) {
                    res.send(err);
                }
                res.json(texture);
            });
        }
    });
});

router.delete('/:textureId', ensureAuthenticated, (req, res) => {
    Texture.findById(req.params.textureId, (err, texture) => {
        if (texture != null && texture._user != req.session.passport.user) {
            res.status(500).send('Cannot delete other user\'s texture.');
        }
        Texture.findByIdAndRemove(req.params.textureId, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({result:true});
        });
    });
});

module.exports = router;