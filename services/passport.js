const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');
const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
	// user.id is a shortcut with mongo/passport
	done(null, user.id);
})

passport.deserializeUser((id, done)=>{
	User.findById(id)
		.then(user => {
			done(null, user);
		})
})


passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback',
	//relative callbackURL can break oauth flow with heroku proxy servers
	//use absolute url or set proxy: true
	proxy: true
	}, async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id})
				if(existingUser){
					//record exists
					//see passport docs for more info on done();
					done(null, existingUser);
				} else {
					//record does not exist, create user
					const user = await new User({ googleId: profile.id }).save()
					done(null, user);
				}
		}
	)
);
