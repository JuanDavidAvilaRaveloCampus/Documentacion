/**
 * *FUNCIONES POR EXPRESIÓN
 * 
 *  Son funciones que están almacenadas dentro 
 *  de variables. Básicamente es lo mismo que 
 *  una funcion, solo que ahora no se le asigna 
 *  su respectivo nombre, sino que ahora este 
 *  será el de su variable.
 */

//El segundo "saludar" (nombre de la función) se suele omitir
const saludo = function saludar() {
    return"Hola";
};

saludo(); //Hola