const express = require('express');
const router = express.Router();
const axios = require('axios');

//home page
router.get('/', (req, res)=> {
    res.render('home', {
        title: 'Weather App',
        city: '',
        temp: ''
    })
})

//handling post request
router.post('/', async (req, res) => {
    const apiKey = 'e23336fdd10cc4c1c6d5567aa3111b84';
    let city = req.body.cityname;
    console.log(`city name: ${city}`);

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    let response = await axios.get(url);

    res.render('home', {
        title: 'Weather App',
        cityinfo: 'City Info',
        city: response.data.name,
        temp: celsiustemp(response.data.main.temp)
    })
    
})

let celsiustemp = (kelvintemp) => {
    return kelvintemp - 273.15;
}
module.exports = router;