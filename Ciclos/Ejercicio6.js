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
  
  let numeroInicial = 5;
  let numeroFinal = 12;
  
  mostrarNumerosAscendentes(numeroInicial, numeroFinal);
  