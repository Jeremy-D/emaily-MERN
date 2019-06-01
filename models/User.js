const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//line 4 same as line 2 es6 destructuring
//const { Schema } = mongoose

const userSchema = new Schema ({
	'googleId': String,
	'credits': { type: Number, default: 0}
})

mongoose.model('users', userSchema);