const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la Base de la Multiplicacion'
    })
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: true,
        describe: 'Muestra o no la tabla por consola'
    } )
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta que numero llega la tabla'
    })
    .check( (argv) => {
        if( isNaN(argv.b) && isNaN(argv.h) ){
            throw 'La base tiene que ser un Numero'
        }
        return true;
    })
    .argv;

module.exports = argv;