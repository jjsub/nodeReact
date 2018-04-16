
const express = require('express');
const mongoose = require('mongoose');
// const passportConfig = require('./services/passport');
require('./services/passport');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI);

const app = express();


//is the same as // const authRoutes = require('./routes/authRoutes');
// authRoutes(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.get('/jjir',(req, res) => {res.send('Hola Mundo!')});
console.log("Connect @ Port 5000")