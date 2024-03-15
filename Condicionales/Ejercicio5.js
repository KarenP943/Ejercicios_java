//Entrada
var A = parseFloat(prompt("Ingrese el valor de A:"));
var B = parseFloat(prompt("Ingrese el valor de B:"));
//Proceso
function calcularCociente(A, B) {
    if (B === 0) {
        return "La división por cero no está definida.";
    } else {
        return A / B;
    }
}
var resultado = calcularCociente(A, B);

//Salida
console.log("El cociente de " + A + " y " + B + " es: " + resultado);
