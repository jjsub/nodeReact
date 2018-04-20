
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys')
// const passportConfig = require('./services/passport');
require('./models/Users')
require('./services/passport'); // Require will invocate the code in this file


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    //30 days in miliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys : [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


//is the same as // const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.get('/jjir',(req, res) => {res.send('Hola Mundo!')});
console.log("Connect @ Port 5000")