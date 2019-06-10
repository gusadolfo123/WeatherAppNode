const axios = require('axios');

const instance = axios.create({
	baseURL: 'https://openweathermap.org/data/2.5/weather',
});

class Weather {
	constructor() {}
	async getWeather({ lat, lon }) {
		try {
			const result = await instance.get(`https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b6907d289e10d714a6e88b30761fae22`);
			if (result === undefined) {
				throw new Error(`No hay resultados API getWeather`);
			}
			return result.data.weather[0];
		} catch (error) {
			throw new Error(`No hay resultados API getWeather`);
		}
	}
}

module.exports = { Weather };
