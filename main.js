let metodo = {
    "MÉTODO": "VALOR",
    "concat": "Combina el texto de dos cadenas y devuelve una nueva cadena."
};
console.table(metodo);

// EJEMPLO 1
let ejemplo = "Hola soy un ejemplo";
let siguienteEjemplo = "soy Juan";
let otro = ejemplo.concat(' ',(siguienteEjemplo));
console.log(otro);

// EJEMPLO 2
let ejemplo2 = "Hola soy el siguiente ejemplo";
let siguienteEjemplo2 = "soy Pedro";
let otro2 = ejemplo2.concat(" ",(siguienteEjemplo2));
console.log(otro2);