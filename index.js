const express = require('express');
const mongoose = require('mongoose');
//passport needs cookie-session to use cookies
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
require('./models/User');
require('./services/passport');

mongoose
	.connect(
		keys.mongoURI,
		{ useNewUrlParser: true }
	)
	.then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const app = express();

app.use(bodyParser.json())
app.use(
	cookieSession({
		//convert days to miliseconds
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes')
authRoutes(app);
require('./routes/billingRoutes')(app);
//can also be written as: require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);