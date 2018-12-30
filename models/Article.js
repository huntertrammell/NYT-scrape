const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Article', ArticleSchema);