//keys.js figure out which credentials to use

if(process.env.NODE_ENV === 'production'){
	//use prod credentials
	module.exports = require('./prod')
} else {
	//use dev credentials
	module.exports = require('./dev')
}