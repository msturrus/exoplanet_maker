var mongoose = require('mongoose');

var SystemSchema = new mongoose.Schema({
  nameOfSystem  : String,
  authorId      : String,
  state         : Object
});

module.exports = mongoose.model('systems', SystemSchema);
