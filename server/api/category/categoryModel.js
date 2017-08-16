var mongoose = require('Mongoose');
mongoose.Promise = global.Promise


var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model('categories', categorySchema);