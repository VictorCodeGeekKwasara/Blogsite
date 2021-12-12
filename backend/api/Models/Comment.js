const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
	blogId: ObjectId,
	userId: ObjectId,
	body: {
		type: String,
		required: true,
	},
});

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;
