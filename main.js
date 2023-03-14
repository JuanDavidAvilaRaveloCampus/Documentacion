/**
 * *FUNCIONES ANÓNINAS o FUNCIONES LAMBDA
 *  Son un tipo de funcoines que se declaran sin nombre de función y se alojan en el interior
 *  de una variable y haciendo referencia a ella cada vez que queramos utilizarla:
 */

//Funciòn anònima "saludo"
const saludo = function(){
    return "hola";
};

saludo; // f() { return 'Hola'; }
saludo(); //'Hola'

/**
 *  Observar que en la última ínea del ejemplo anterior, estamos ejecutando la variable, es decir
 *  ejecutando la función que contiene la variable. Sin embargo, el la línea anterior hacemos referencia 
 *  a la variable (sin ejecutarla, no hay paréntesis) y nos devuelve la función en sí.
 * 
 *  Este tipo de funciones sóolo están disponibles a partir de la inicialización de la variable.
 *  Si <<ejecutamos la variable>> antes de declararla, nos dará error.
 * 
 * 
 */

