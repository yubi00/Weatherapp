const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/index');
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //for the post request to get the city name via form 
app.use(express.static(__dirname + '/public')); //for css

app.use('/', router);


app.listen(PORT, () => console.log(`The server started at port ${PORT}`));