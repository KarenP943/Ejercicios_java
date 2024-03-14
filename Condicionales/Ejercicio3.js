//Entrada
let num1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
let num2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
let menor, mayor;

//Proceso
if (num1 <= num2 && num1 <= num3) {
    menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
} else {
    menor = num3;
}

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

//Salida
console.log("El menor número es: " + menor);
console.log("El mayor número es: " + mayor);