const axios = require('axios');

const instance = axios.create({
	baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
	headers: {
		'X-RapidAPI-Key': '6ffb0c4f3amsh2a791a0048e0239p1b9009jsnb1317dce413e',
	},
});

class Site {
	constructor() {}
	async getPosition(direction) {
		try {
			const encodeUrl = encodeURI(direction);
			const response = await instance.get(`?location=${encodeUrl}`);

			if (response.data.Results.length === 0) {
				throw new Error(`No hay resultados para ${direction}`);
			}
			const { name, lat, lon } = response.data.Results[0];

			return {
				direction: name,
				lat,
				lon,
			};
		} catch (error) {
			throw new Error(`Error durante en el llamado al API: ${instance.baseURL}`);
		}
	}
}
module.exports = { Site };
