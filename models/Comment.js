var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Commentschema = new Schema({
	user: {
		type: String,
	},
	comment: {
		type: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Comment = mongoose.model("Comment", Commentschema);
module.exports = Comment;