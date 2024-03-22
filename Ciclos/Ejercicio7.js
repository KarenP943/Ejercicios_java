const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function pedirNumero() {
  rl.question('Ingresa un número (ingresa 0 para finalizar): ', (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log('Por favor, ingresa un número válido.');
      pedirNumero(); // Volver a pedir el número
    } else {
      if (numero !== 0) {
        suma += numero;
        console.log(`La suma parcial es: ${suma}`);
        pedirNumero(); // Volver a pedir el número
      } else {
        console.log(`La suma total de los números ingresados es: ${suma}`);
        rl.close();
      }
    }
  });
}
let suma = 0;
pedirNumero(); 