var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'category',
    }]
});

module.exports = mongoose.model('post', PostSchema);