//Entrada
var A = parseFloat(prompt("Ingrese el valor de A:"));
var B = parseFloat(prompt("Ingrese el valor de B:"));
//Proceso
function operacion(A, B) {
    if (A < 0 || B < 0) {
        return A + B;
    } else {
        return A * B;
    }
}
var resultado = operacion(A, B);

//Salida
console.log("El resultado de la operación es: " + resultado);
