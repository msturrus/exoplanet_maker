var User          = require('../models/user'),
    System         = require('../models/system'),
    express       = require('express'),
    router        = express.Router();

  // ------------------ GET account home ----------------------------
router.get('/', function(req, res, next) {
  if(req.session.loggedIn === true) {
    res.render('account', { title: "/Mu/sic Chart Generator | My Account", username: req.session.currentUser});
  } else res.redirect('/login');
})
.get('/accountsystems', function(req, res, next) {
    System.find({ authorId: req.session.currentUserId }, function(err, system) {
      console.log(system)
      res.send(system);
    })
});
// .post('/edit', function(req, res, next) {
//  req.session.chartID = req.body.chartID;
//   Chart.find({ _id: req.session.chartID }, function(err, chart){
//     console.log(chart);
//   })
// });


module.exports = router;
