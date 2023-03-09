let metodo = {
    "MÉTODO": "VALOR",
    ".match(regex)": "Devuelve todas las ocurrencias de una expresión regular dentro de una cadena."
};
console.table(metodo);

// EJEMPLO 1
//Devuelve la primera conincidencia de la palabra encontrada + su posición
let ejemplo = "Hola Soy Un Ejemplo";
let ejemplo_2 = /[A-Z]/g;
let otro = ejemplo.match(ejemplo_2);
console.log(otro);

// EJEMPLO 2
let ejemplo2 = "HoLa soy otro EJEMPLO";
let ejemplo2_2 = /[A-Z]/g;
let otro2 = ejemplo2.match(ejemplo2_2);
console.log(otro2);