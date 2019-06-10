const { argv } = require('./config/yargs');
const { Site } = require('./classes/Site');
const { Weather } = require('./classes/Weather');

(async function main() {
	const site = new Site();
	const weather = new Weather();

	const siteData = await site
		.getPosition(argv.direction)
		.then(result => {
			console.log(`Resultado Position: ${JSON.stringify(result)}`);
			return JSON.stringify(result);
		})
		.catch(error => console.log(error));

	const weatherData = await weather
		.getWeather(JSON.parse(siteData))
		.then(response => {
			console.log(`Resultado Weather: ${JSON.stringify(response)}`);
			return JSON.stringify(response);
		})
		.catch(error => console.log(error));
})();
