const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../model/user');

/**
 * Methods for authorization
 */
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
    res.redirect('/');
});

router.get('/google',
    passport.authenticate('google', {scope:[
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]})
);
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/maker/dashboard');
});

router.get('/facebook', passport.authenticate('facebook'), (req, res) => {});
router.get('/facebook/callback', 
    passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/maker/dashboard');
});

router.get('/twitter', passport.authenticate('twitter'), (req, res) => {});
router.get('/twitter/callback', 
    passport.authenticate('twitter', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/maker/dashboard');
});

router.get('/github', passport.authenticate('github'), (req, res) => {});
router.get('/github/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/maker/dashboard');
});

router.get('/instagram', passport.authenticate('instagram'), (req, res) => {});
router.get('/instagram/callback', 
    passport.authenticate('instagram', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/maker/dashboard');
});

router.get('/pinterest',
    passport.authenticate('pinterest', {scope:[
        'read_public',
        'read_relationships'
    ]})
);
router.get('/pinterest/callback', 
    passport.authenticate('pinterest', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/maker/dashboard');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/account', Auth.ensureAuthenticated, (req, res) => {
    //res.json(req.user);
    User.findById(req.session.passport.user, function(err, user) {
        if(err) {
            console.log(err);  // handle errors
        } else {
            //res.render('account', { user: user});
            res.json(user);
        }
    });
});

module.exports = router;
