var mongoose = require('mongoose');

// var State = new mongoose.Schema({
//   savePlanets: [savePlanets]
// });

// var savePlanets

var SystemSchema = new mongoose.Schema({
  nameOfSystem  : String,
  authorId      : String,
  state         : Object,
  planets       : Array
});

module.exports = mongoose.model('systems', SystemSchema);
