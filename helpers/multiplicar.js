const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = true, hasta = 10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } x ${ base*i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ base*i }\n`;
        }
        if (listar){
            console.log('================='.green);
            console.log('   TABLA DEL '.green, colors.blue(base));
            console.log('================='.green);
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt creado`;
    } catch (err) {
        throw err;
    }  
}

module.exports = {
    crearArchivo
}