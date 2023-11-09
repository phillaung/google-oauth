var express = require('express');
var router = express.Router();
const passport = require('passport')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ensure', ensureLoggedIn, function(req, res) {
  res.render('index', { title: 'Yep Logged In!'})
})

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email']
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router;
