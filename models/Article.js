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
        },
        likes: {
            type: String,
            default: "0"
        },
        comments: {
            type: Object
        }
    }
);

module.exports = mongoose.model('Article', ArticleSchema);