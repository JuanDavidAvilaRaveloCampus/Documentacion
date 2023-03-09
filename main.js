let metodo = {
    "MÉTODO" : "VALOR",
    "indexOf, lastIndexOf" : "Devuelve la posición de la subcadena especificada en la cadena o la última posición de la subcadena especificada, respectivamente."
};
console.table(metodo);

// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola soy un ejemplo";
let otro = ejemplo.indexOf("soy")
console.log(otro) 

// EJEMPLO 1
let ejemplo2 = "Hola soy el siguiente ejemplo"
let otro2 = ejemplo2.lastIndexOf("el")
console.log(otro2)