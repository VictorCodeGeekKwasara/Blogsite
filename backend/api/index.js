const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const app = new express();
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 8001;
const uri = process.env.DB_URI;
// cors

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(
		app.listen(port, () => {
			console.log('App running');
		})
	)
	.catch((err) => console.log(err));
// Create user post
// login user post
// contact form  post

//create blog post
// get blogs get
//delete blog
//comment blog
//like blog
app.use(express.static('api/public'));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(authRoutes);
app.use(blogRoutes);

// app.get('/', () => '');
