//Entrada
function sumaOresta(A, B) {
// Proceso
        if (A < B) {
            return A + B;
        } else {
            return A - B;
        }
    }
//Salida
    console.log(sumaOresta(5, 3));
    console.log(sumaOresta(3, 5));
    console.log(sumaOresta(5, 5));