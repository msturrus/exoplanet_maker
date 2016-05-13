var User          = require('../models/user'),
    system         = require('../models/system'),
    express       = require('express'),
    router        = express.Router();

// ------------------ GET system-builder --------------------
router.get('/build', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('system-builder', { title: '/Mu/sic system Generator | system Builder' });
  } else res.redirect('/login');
})
.post('/build', function(req, res, next) {
  console.log(req.body)

  // systemModel = db.model('item'),
  // newsystem = new systemModel();
  // new systemModel(req.body).save(function (e) {
  //   res.send('item saved');
  // });
  system.create({
    nameOfSystem : req.body.nameOfSystem,
    authorId    : req.session.currentUserId,
    state    : req.body
  }, function(err, system) {
    console.log("You have created a system!");
    // console.log(db.system.find({}));
    console.log(system)
    // res.redirect('/account');
  })
})
// ---------------- VIEW system ------------------
.post('/viewsystem', function(req, res, next) {
    req.session.systemID = req.body.systemID;
    system.findOne({ _id: req.body.systemID }, function(err, system) {
      if (system) {
        res.render('system-viewer', { title: '/Mu/sic system Generator | View system' })
      } else res.redirect('/account');
    });
}) // ---------------- get system for Ajax call ------------------
.get('/getsystem', function(req, res, next) {
   system.findOne({ _id: req.session.systemID }, function(err, system) {
     if (system) {
       res.send(system);
     } else console.log("no such system exists");
   });
}) // ---------------- Delete system ------------------
.post('/delete', function(req, res, next) {
  system.remove({ _id: req.body.systemID }, true);
  res.redirect('/account');
})
.post('/edit', function(req, res, next) {
  system.findByIdAndUpdate(req.session.systemID, { nameOfsystem: req.body.nameOfsystem, contents: req.body.system }, function (err, system) {
  console.log(system);
  })
  res.redirect('/account')

})
.get('/edit', function(req, res, next) {
    req.session.systemID = req.body.systemID;
    system.findOne({ _id: req.body.systemID }, function(err, system) {
      if (system) {
        res.render('system-viewer', { title: 'View a system' })
      } else res.redirect('/account');
    });
})
.get('/api/:id', function(req, res, next) {
  system.findById(req.params.id, function(err, system) {
    if (err) return next(err);
    res.json(system);
  });
});

module.exports = router;
