let metodo = {
    "MÉTODO": "VALOR",
    ".search()": "Busca y retorna index"
};
console.table(metodo);

// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola soy un ejemplo";
let otro = ejemplo.search("un");
console.log(otro);

// EJEMPLO 2
let ejemplo2 = "Hola soy el siguiente ejemplo";
let otro2 = ejemplo2.search("Hola");
console.log(otro2);