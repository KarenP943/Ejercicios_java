// Entrada
var año = parseInt(prompt("Ingrese el año:"));
// Proceso
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return true;
    } else {
        return false;
    }

// Salida
if (esBisiesto(año)) {
    console.log(año + " es un año bisiesto.");
} else {
    console.log(año + " no es un año bisiesto.");
}
