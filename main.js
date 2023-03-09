let metodo = {
    "MÉTODO": "VALOR",
    ".replace(str|regex, newstr|func)": "Remplaza partes de un string por carácteres."
};
console.table(metodo);

// EJEMPLO 1
let ejemplo = "JavaScript"
let print = ejemplo.replace("ava","-")
console.log(print)

// EJEMPLO_2 
let ejemplo2 = "Hello World"
let print2 = ejemplo2.replace("ello", "-")
console.log(print2)