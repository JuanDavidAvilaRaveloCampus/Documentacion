let metodo = {
    "MÉTODO": "VALOR",
    "startsWith, endsWith, includes": "Devuelve si o no la cadena comienza, termina o contiene una subcadena especificada."
};
console.table(metodo);

// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola soy un ejemplo";
let otro = ejemplo.startsWith("soy");
console.log(otro);

let ejemplo2 = "Hola soy el siguiente ejemplo";
let otro2 = ejemplo2.endsWith("ejemplo");
console.log(otro2);