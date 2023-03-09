let metodo = {
    "MÉTODO": "VALOR",
    "slice": "Extrae una sección de una cadena y devuelve una nueva cadena."
};
console.table(metodo);

// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola soy un ejemplo";
let otro = ejemplo.slice(2, -2);
console.log(otro);

// EJEMPLO 2
let ejemplo2 = "Hola soy el siguiente ejemplo";
let otro2 = ejemplo2.slice(0,8);
console.log(otro2);