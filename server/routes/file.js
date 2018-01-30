const express = require('express');
const router = express.Router();
const s3fs = require('../modules/s3file');

var ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
};

router.post('/map', ensureAuthenticated, (req, res) => {
    var fs = new s3fs();
    fs.writeFile(req.body.filename, req.body.content, '/').then(function() {
        res.json({result: true});
    }, function(reason) {
        res.status(500).send(reason);
    });
});

router.get('/map/:mapId', ensureAuthenticated, (req, res) => {
    var fs = new s3fs();
    fs.readFile('/maps/' + req.params.mapId + '.json').then(function(data) {
        res.json(data);
    }, function(reason) {
        res.status(500).send(reason);
    });
});

module.exports = router;