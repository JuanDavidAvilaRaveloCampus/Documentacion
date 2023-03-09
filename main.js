let metodo = {
    "MÉTODO": "VALOR",
    ".localeCompare(str, locale, options)": "Compara dos cadenas en la localización actual"
};
console.table(metodo);

// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola";
let ejemplo_2 = "soy un ejemplo"
let otro = ejemplo.localeCompare(ejemplo_2);
console.log(otro);

// EJEMPLO 2
let ejemplo2 = "Hola soy";
let ejemplo2_2 = "el siguiente ejemplo"
let otro2 = ejemplo2.localeCompare(ejemplo2_2);
console.log(otro2);