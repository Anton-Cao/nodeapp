var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    content: String,
    date: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model(
    'Post',
    PostSchema,
);