const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { response } = require('express');

// handdle errors
const handleErrors = (err) => {
	let errors = { name: '', email: '', password: '' };
	console.log(err.message);
	// duplicte error code

	if (err.message === 'incorrect password') {
		errors.password = 'That password is Incorrect';
	}
	if (err.message === 'inorrect email') {
		errors.email = 'That email is not registered ';
	}
	if (err.code === 11000) {
		errors.email = 'that email is already registered';
	}

	if (err.message.includes('user validation failed')) {
		Object.values(err.errors).forEach(({ properties }) => {
			errors[properties.path] = properties.message;
		});
	}

	return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
	return jwt.sign({ id }, 'blogsitepcgvtknt1sndghmrusuz123', {
		expiresIn: maxAge,
	});
};

module.exports.create_user = async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const user = await User.create({ name, email, password });

		const token = createToken(user._id);

		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });

		res.status(201).json({ user: user._id });
	} catch (error) {
		const errors = handleErrors(error);
		res.status(400).json({ errors });
	}
};

module.exports.login = async (req, res) => {
	const { email, password } = req.body;
	console.log(email, password);
	try {
		const user = await User.login(email, password);
		const token = createToken(user._id);

		res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
		console.log(user);
		res.status(200).json({ user: user._id });
	} catch (err) {
		console.log(err);
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};
