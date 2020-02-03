const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng(argv.direccion).then(console.log);
//console.log(argv.direccion);
/* clima.getClima(40.419998, -3.700000)
    .then(console.log)
    .catch(console.log); */

const getInfo = async(dir) => {
    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima de ${coords.direccion}`
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);