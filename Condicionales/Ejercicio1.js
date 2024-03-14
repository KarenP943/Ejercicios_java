//Entrada
function TipoSigno(num) {
//Proceso
    if (num > 0) {
        return "Positivo";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}
//Salida
console.log(TipoSigno(5));
console.log(TipoSigno(-5));
console.log(TipoSigno(0));