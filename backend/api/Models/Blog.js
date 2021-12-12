const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
	topic: String,
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	img: String,
	date: Date,
});

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;
