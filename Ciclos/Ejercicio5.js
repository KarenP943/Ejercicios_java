let sumaCuadrados = 0;
for (let i = 1; i <= 100; i++) {
  let cuadrado = i * i;
  sumaCuadrados += cuadrado;
}
console.log(`La suma de los cuadrados de los cien primeros números naturales es: ${sumaCuadrados}`);