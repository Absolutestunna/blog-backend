var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var storySchema = new Schema({
  author: String,
  story: String,
  date: Date,
  avatar: { data: Buffer, contentType: String },
  uploadDate: {type: Date, default: Date.now}
});

var Stories = mongoose.model('Stories', storySchema);

module.exports = Stories;
