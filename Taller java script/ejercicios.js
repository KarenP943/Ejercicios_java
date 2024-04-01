const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenuPrincipal() {
  console.log(`
Selecciona una categoría:
1. Operadores
2. Condicionales
3. Ciclos
0. Salir
  `);
}

function mostrarMenuOperadores() {
  console.log(`
Operadores:
1. Calcular el área de un triángulo.
2. Ingresar dos números por teclado y sumarlos.
3. Ingresar un número y visualizar el número elevado al cuadrado.
4. Escribir un algoritmo que convierta de euros a dólares.
5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perímetro.
6. Escribir un algoritmo que determine el área y el volumen de un cilindro.
7. Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área del círculo inscrito.
8. Calcular el promedio de tres números ingresados por teclado.
0. Volver al menú principal
  `);
}

function mostrarMenuCondicionales() {
  console.log(`
Condicionales:
1. Saber si el número ingresado por teclado es positivo o negativo.
2. Diga cuál es el mayor y cuál el menor de dos números ingresados.
3. Calcule e imprima el menor y el mayor de tres números enteros positivos.
4. Sumar dos números si A es menor que B, o restarlos en caso contrario.
5. Encontrar el cociente entre A y B, gestionando la división por cero.
6. Sumar dos números si al menos uno es negativo, o multiplicarlos en caso contrario.
7. Determinar si un año es bisiesto o no.
0. Volver al menú principal
  `);
}

function mostrarMenuCiclos() {
  console.log(`
Ciclos:
1. Imprimir todos los múltiplos de 3 que hay entre 1 y 100.
2. Imprimir los números impares entre 0 y 100.
3. Imprimir los números pares del 1 al 100.
4. Imprimir por pantalla los cuadrados de los números del 1 al 30.
5. Sumar los cuadrados de los cien primeros números naturales.
6. Mostrar todos los números entre dos números dados en secuencia ascendente.
7. Sumar todos los números ingresados por teclado hasta que sea cero.
0. Volver al menú principal
  `);
}

function pedirOpcion(mensaje, callback) {
  rl.question(mensaje, (input) => {
    callback(input);
  });
}

function ejecutarOpcionPrincipal(opcion) {
  switch (opcion) {
    case '1':
      mostrarMenuOperadores();
      pedirOpcion('Selecciona un ejercicio de Operadores: ', ejecutarOpcionOperadores);
      break;
    case '2':
      mostrarMenuCondicionales();
      pedirOpcion('Selecciona un ejercicio de Condicionales: ', ejecutarOpcionCondicionales);
      break;
    case '3':
      mostrarMenuCiclos();
      pedirOpcion('Selecciona un ejercicio de Ciclos: ', ejecutarOpcionCiclos);
      break;
    case '0':
      console.log('Saliendo...');
      rl.close();
      break;
    default:
      console.log('Opción no válida.');
      mostrarMenuPrincipal();
      pedirOpcion('Selecciona una categoría: ', ejecutarOpcionPrincipal);
      break;
  }
}
// OPERADORES EJERCICIOS
function ejecutarOpcionOperadores(opcion) {
  switch (opcion) {
    case '1':
      function calcularAreaTriangulo() {
        rl.question('Ingrese la base: ', (base) => {
          rl.question('Ingrese la altura: ', (altura) => {
            let resultado = (parseFloat(base) * parseFloat(altura)) / 2;
            console.log(`El área del triángulo es: ${resultado}`);
            rl.close(); 
          });
        });
      }

      break;
    case '2':
        console.log("2. Suma de 2 números");
        rl.question("Ingrese el primer número: ", (numero1) => {
          rl.question("Ingrese el segundo número: ", (numero2) => {
            let resultado2 = (parseInt(numero1) + parseInt(numero2));
            console.log("El resultado es: " + resultado2);
            rl.close();
          });
        });
      break;
    case '3':
      console.log("3.visualizar numero elevado al cuadrado");
      rl.question("Ingrese el numero: ", (num) => {
        const numero = parseFloat(num);
        if (isNaN(numero)) {
          console.log("El valor ingresado no es un número válido.");
        } else {
          const resultado3 = (numero ** 2);
          console.log("El resultado es: " + resultado3);
        }
        rl.close();
      });
      break;
    case '4':
      console.log("4.Convertir euros a dolares");
      rl.question('Ingresa la cantidad de euros: ', (euros) => {
        const dolares = euros * 1.07; 
        console.log(euros + ' euros son ' + dolares + ' dólares');
        showMenu();
      });
      break;
    case '5':
      console.log("5.lado de un cuadrado, valor del área y del perímetro");
      rl.question('Ingresa el lado del cuadrado: ', (lado) => {
        const area = lado * lado;
        const perimetro = lado * 4;
        console.log('El área del cuadrado es: ' + area);
        console.log('El perímetro del cuadrado es: ' + perimetro);
        showMenu();
      });
      break;
    case '6':
      console.log("6. Calcule el area y volumen un cilindro ");
      crl.question('Ingresa el radio del cilindro: ', (radio) => {
        rl.question('Ingresa la altura del cilindro: ', (altura) => {
          const area = Math.PI * radio * radio;
          const volumen = area * altura;
          console.log('El área del cilindro es: ' + area);
          console.log('El volumen del cilindro es: ' + volumen);
          showMenu();
        });
      });
      break;
  case '7':
      console.log("7.Calcule la longitud de la circunferencia ");
      rl.question('Ingresa el radio de la circunferencia: ', (radio) => {
        const longitud = 2 * Math.PI * radio;
        const area = Math.PI * Math.pow(radio, 2);
        console.log('La longitud de la circunferencia es: ' + longitud);
        console.log('El área del círculo es: ' + area);
        showMenu();
      });
      break;
  case '8':
      console.log("8.Calcular el promedio de tres (3) números ingresados por teclado.")
      rl.question('Ingresa el primer número: ', (num1) => {
        rl.question('Ingresa el segundo número: ', (num2) => {
          rl.question('Ingresa el tercer número: ', (num3) => {
            const promedio = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
            console.log('El promedio de los números es: ' + promedio);
            showMenu();
          });
        });
      });
      break; 
default:
  console.log('Opción no válida.');
      break;
      }
    }


//CONDICIONALES EJERCICIOS
function ejecutarOpcionCondicionales(opcion) {
  switch (opcion) {
  case '1':
      console.log ("1. Saber si el número ingresado por teclado es positivo o negativo.");
          function TipoSigno(num) {
              if (num > 0) {
                  return "Positivo";
              } else if (num < 0) {
                  return "Negativo";
              } else {
                  return "Neutro";
              }
          }
          
          let userInput = prompt("Ingresa un número:");
          let numero = parseInt(userInput);
          console.log(TipoSigno(numero));
      
      break;
  case '2':
      console.log ("2. Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor");
      let num1 = parseFloat(prompt("Ingrese el primer número:"));
      let num2 = parseFloat(prompt("Ingrese el segundo número:"));

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
      break; 
  case '3':
      let num01 = parseInt(prompt("Ingrese el primer número entero positivo:"));
      let num02 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
      let num3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));
      let menor, mayor;
      if (num01 <= num02 && num01 <= num03) {
          menor = num01;
      } else if (num02 <= num01 && num02 <= num03) {
          menor = num02;
      } else {
          menor = num03;
      }

      if (num01 >= num02 && num01 >= num03) {
          mayor = num01;
      } else if (num02 >= num01 && num02 >= num03) {
          mayor = num02;
      } else {
          mayor = num3;
      }
      console.log("El menor número es: " + menor);
      console.log("El mayor número es: " + mayor);
          break; 
  case '4':
      function sumaOresta(A, B) {
      if (A < B) {
          return A + B;
      } else {
          return A - B;
      }
      }
      console.log(sumaOresta(5, 3));
      console.log(sumaOresta(3, 5));
      console.log(sumaOresta(5, 5));
  
      break;
  case '5':
      var A = parseFloat(prompt("Ingrese el valor de A:"));
      var B = parseFloat(prompt("Ingrese el valor de B:"));
      function calcularCociente(A, B) {
          if (B === 0) {
              return "La división por cero no está definida.";
          } else {
              return A / B;
          }
      }
      var resultado = calcularCociente(A, B);
      console.log("El cociente de " + A + " y " + B + " es: " + resultado);
      break;
  case '6':
      var A = parseFloat(prompt("Ingrese el valor de A:"));
      var B = parseFloat(prompt("Ingrese el valor de B:"));
      function operacion(A, B) {
          if (A < 0 || B < 0) {
              return A + B;
          } else {
              return A * B;
          }
      }
      var resultado = operacion(A, B);
      console.log("El resultado de la operación es: " + resultado);
      break;
  case '7':
      function esBisiesto(año) {
          if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
              return true;
          } else {
              return false;
          }
      }
      
      process.stdout.write("Ingrese el año: ");
      
      process.stdin.on('data', function(data) {
          const input = data.toString().trim(); 
          const año = parseInt(input);
      
          if (!isNaN(año) && año >= 0) {
              if (esBisiesto(año)) {
                  console.log(año + " es un año bisiesto.");
              } else {
                  console.log(año + " no es un año bisiesto.");
              }
              process.exit();
          } else {
              console.log("Por favor, ingresa un año válido.");
          }
      });

      default:
          break;
  }
}

//CICLOS EJERCICIOS

function ejecutarOpcionCiclos(opcion) {
switch (opcion) {
  case '1':
      for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) {
        console.log(i); 
      }
    }  
      break;
  case '2':
      for (let i = 1; i <= 100; i += 2) {
      console.log(i); 
   }
      break;
  case '3':
      for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }
      break;
  case '4':
        for (let i = 1; i <= 30; i++) {
          let cuadrado = i * i;
          console.log(`El cuadrado de ${i} es: ${cuadrado}`);
        }
      break;
  case '5':
    let sumaCuadrados = 0;
      for (let i = 1; i <= 100; i++) {
        let cuadrado = i * i;
        sumaCuadrados += cuadrado;
      }
      console.log('La suma de los cuadrados de los cien primeros números naturales es: ${sumaCuadrados}');  
      break;
      case '6':
        function mostrarNumerosAscendentes(numeroMenor, numeroMayor) {
          if (numeroMenor >= numeroMayor) {
            console.log('El primer número debe ser menor que el segundo.');
            return;
          }
          console.log(`Números entre ${numeroMenor} y ${numeroMayor} en secuencia ascendente:`);
          for (let i = numeroMenor; i <= numeroMayor; i++) {
            console.log(i);
          }
        }
      
        rl.question('Ingresa el número inicial: ', (numeroInicial) => {
          rl.question('Ingresa el número final: ', (numeroFinal) => {
            numeroInicial = parseInt(numeroInicial, 10);
            numeroFinal = parseInt(numeroFinal, 10);
            mostrarNumerosAscendentes(numeroInicial, numeroFinal);
          });
        });
        break;      

  case '7':
      function pedirNumero() {
    rl.question('Ingresa un número (ingresa 0 para finalizar): ', (input) => {
      const numero = parseFloat(input);
      if (isNaN(numero)) {
        console.log('Por favor, ingresa un número válido.');
        pedirNumero(); 
      } else {
        if (numero !== 0) {
          suma += numero;
          console.log('La suma parcial es: ${suma}');
          pedirNumero();
        } else {
          console.log('La suma total de los números ingresados es: ${suma}');
          rl.close();
        }
      }
    });
  }
  let suma = 0;
  pedirNumero(); 
      break;

      default:
          break;
  }
}

// Iniciar el programa
mostrarMenuPrincipal();
pedirOpcion('Selecciona una categoría: ', ejecutarOpcionPrincipal);
