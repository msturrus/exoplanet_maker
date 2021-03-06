var User          = require('../models/user'),
    system         = require('../models/system'),
    express       = require('express'),
    router        = express.Router(),
    bcrypt        = require('bcrypt'),
    dbSalt        = bcrypt.genSaltSync(10);

    // ------------------ GET home -------------------------
router.get('/', function(req, res, next) {
  // check if person is logged in?
  res.render('index', { title: '/Mu/sic system Generator | Create Your Own Music Flowsystems' });
}) // ------------------ GET logout -------------------------
.get('/logout', function(req, res, next) {
  if (req.session.loggedIn === true) {
    req.session.loggedIn = null;
    req.session.currentUserId = null;
    req.session.currentUser = null;
    console.log('You have been logged out.');
    res.redirect('/');
  } else {
    res.redirect('/');
  }
}) // ------------------ GET register ------------------------
.get('/register', function(req, res, next) {
  if (req.session.loggedIn === true) {
    res.redirect('/');
  } else res.render('register', { title: '/Mu/sic system Generator | Register' });

}) // ------------------ POST register -----------------------
.post('/register', function(req, res, next) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      console.log('This user already exists.');
      res.redirect('/register');
    } else {
        User.create({
          username      : req.body.username,
          passwordHash  : bcrypt.hashSync(req.body.passwordHash, dbSalt),
          email         : req.body.email,
      }, function(err, user) {
        req.session.loggedIn = true;
        req.session.currentUserId = user._id;
        req.session.currentUser = user.username;
        req.session.systemID;
        var currentUser = user.username;
        console.log("You have created an account under the name "+ currentUser +" and been logged in.");
        res.redirect('/systems/build');
      });
    }
  });
}) // ------------------ GET login ---------------------------
.get('/login', function(req, res, next) {
  if (req.session.loggedIn === true) {
    console.log("You're already logged in!");
    res.redirect('/');
  } else res.render('login', { title: '/Mu/sic system Generator | Login'});
}) // ------------------ POST login --------------------------
.post('/login', function(req, res, next) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (user) {
      var enteredPassword = req.body.passwordHash;
      var comparison = bcrypt.compareSync(enteredPassword, user.passwordHash);
      if (comparison === true) {
        req.session.loggedIn = true;
        req.session.currentUserId = user._id;
        req.session.currentUser = user.username;
        req.session.systemID;
        var currentUser = user.username;
        console.log("Welcome to the site, "+ currentUser);
        res.redirect('/systems/build');
      } else {
          console.log("The username or password you entered was incorrect.");
          res.redirect('/login');
      }
    } else {
        console.log("User doesn't exist.");
        res.redirect('/register');
      }
  });
})
.get('/api', function(req, res, next) {
  system.find(function(err, systems) {
    if (err) return next(err);
    res.json(systems);
  })
});

module.exports = router;
