const argv = require('yargs').options({
        direction: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clina'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}