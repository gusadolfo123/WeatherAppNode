const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: {
        'X-RapidAPI-Key': '6ffb0c4f3amsh2a791a0048e0239p1b9009jsnb1317dce413e'
    }
});

class Weather {
    constructor(direction) {
        this.direction = direction;
    }
    async getWeather() {
        const response = await instance.get(`?location=${this.direction}`)
        return response.data.Results[0];
    }
}
module.exports = {
    Weather
}