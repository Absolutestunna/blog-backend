var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var storySchema = new Schema({
  author: String,
  title: String,
  body: String,
  topic: String
  // date: { type: Date, default: Date.now },
});

var Stories = mongoose.model('Stories', storySchema);

module.exports = Stories;
