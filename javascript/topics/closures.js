


const printError = createCustomPrinter('Error', 'background: red; color: white;'); //console.error
const printWarn = createCustomPrinter('Warning', 'background: orange; color: white;'); //console.warn
const printSuccess = createCustomPrinter('Success', 'background: green; color: white;');
const printInfo = createCustomPrinter('Info', 'background: yellow; color: black;'); //console.info

function createCustomPrinter(type, styles) {
    const defaultStyles = 'color: white; ';
    return function (message) {
        console.log(`%c ${type}: ${message}`, `${defaultStyles} ${styles}`);
    }
}


printError('Prueba de error');
printWarn('Prueba de warning');
printSuccess('Prueba de Exito');
printInfo('Prueba de Info');
