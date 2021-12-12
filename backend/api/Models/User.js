const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please enter a name'],
	},
	email: {
		type: String,
		required: [true, 'Please enter an email'],
		unique: true,
		validate: [isEmail, 'Please Enter a valid email'],
	},

	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [6, 'Minimum length is 6 characters'],
	},
});

// fire a function before saving

userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	next();
});
// static method to user schema

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });

	if (user) {
		const auth = await bcrypt.compare(password, user.password);

		if (auth) {
			return user;
		}
		throw Error('incorrect password');
	}
	throw Error('inorrect email');
};

const User = mongoose.model('user', userSchema);
module.exports = User;
