//Entrada
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
// Proceso
if (num1 > num2) {
    // Salida si el primer número es mayor que el segundo
    console.log("El primer número (" + num1 + ") es mayor que el segundo número (" + num2 + ").");
    console.log("El segundo número (" + num2 + ") es menor que el primer número (" + num1 + ").");
} else if (num2 > num1) {
    // Salida si el segundo número es mayor que el primero
    console.log("El segundo número (" + num2 + ") es mayor que el primer número (" + num1 + ").");
    console.log("El primer número (" + num1 + ") es menor que el segundo número (" + num2 + ")."); 
} else {
    // Salida si ambos números son iguales
    console.log("Ambos números son iguales.");
}