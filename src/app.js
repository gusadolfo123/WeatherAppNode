const argv = require('./config/yargs');
const {
    Weather
} = require('./classes/weather');

(function main() {
    const weater = new Weather('New+York');
    weater.getWeather('New+York').then(result => {
        // const obj = JSON.stringify(result);
        console.log(result);
    });
})();