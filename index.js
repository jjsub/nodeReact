const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'Gali and Cito'});
});
//Set port variable with Heroku
const PORT = process.env.PORT || 5000;

app.listen(PORT);


console.log("Thanks");