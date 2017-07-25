var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: String,
    required: true
  },
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'category'
  }]
});

var Posts = mongoose.model('post', postSchema);

module.exports = Posts;
