// Entradas

console.log("6. Calcule el area y volumen un cilindro ");
console.log("Ingrese el radio del cilindro");
let radio= 8;
console.log("Ingrese la altura del cilindro");
let altura = 14;

//proceso
console.log ("Area del cilindro:");
let resultado1 = (2*Math.PI*radio*radio+2*Math.PI*radio*altura);
console.log ("Volumen del cilindro:");
let resultado2 = (Math.PI*radio*radio*altura);

//salida
console.log(resultado1);
console.log(resultado2);