const Blog = require('../models/Blog');

module.exports.createblog = async (req, res) => {
	const { title, topic, body, img } = req.body;

	try {
		const blog = await Blog.create({
			title,
			topic,
			body,
			img,
		});
		res.status(201).json(blog);
	} catch (error) {
		res.status(400).json({ error });
	}
};

module.exports.getblogs = async (req, res) => {
	try {
		const blogs = await Blog.find({});
		console.log('nothing' + blogs);
		res.status(200).json({ blogs });
	} catch (error) {
		console.log('this one hre:' + error);
		res.status(400).json({});
	}
};
module.exports.getblog = async (req, res) => {
	const blogId = req.params.id;

	try {
		const blogs = await Blog.findById(blogId).exec();
		console.log('nothing' + blogs);
		res.status(200).json({ blogs });
	} catch (error) {
		console.log('this one hre:' + error);
		res.status(400).json({});
	}
};
