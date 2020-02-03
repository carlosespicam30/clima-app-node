const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d15e0da31f122c07f78c3577df457d44&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}