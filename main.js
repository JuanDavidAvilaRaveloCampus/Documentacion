/**
 * *CALLBACKS(también llamadas funciones callback o retrollamadas);
 *  A grandes rasgos un callback(llamada hacia atrás) es pasar una 
 *  función B por parámetro a una función A, de modo que la función A 
 *  puede ejecutar esa función B de forrma genérica desde su código, y 
 *  nosotros podemos definirlas desde fuera de dicha función:
 */


// fB = Función B
const fB = function() {
    console.log("Funciòn B ejecutada.");
};

// fA = Función A
const fA = function(callback){
    callback();
};

fA(fB);

/**
 *  Esto nos permitirá crear varias funciones para utilizar a modo de callback y reutilizarlas
 *  posteriormente con diferentes propósitos. De hecho, los callbacks muchas veces son la 
 *  primera estrategia que se suele utilizar en JavaScript para trabajar la asincronía, uno 
 *  de los temas que veremos más adelante:
 */

// fB = Función B (callback)
/**
    fB = Función B (callback)
const fB = function () {
    console.log("Función B ejecutada.");
    };
    
// fError = Función Error (callback)
    const fError = function () {
    console.error("Error");
    };
    
// fA = Función A
    const fA = function (callback, callbackError) {
    const n = ~~(Math.random() * 5);
    if (n > 2) callback();
    else callbackError();
    };
    
    fA(fB, fError);   Si ejecutamos varias veces, algunas darán error y otras no
*/

/**
 * *Observando este ejemplo, podemos planear ejecutar la función fA() cambiandos los callbacks
 * *segùn nos interese, sin necesidad de crear funciones con el mismo código repetido una y otra vez.
 * *Además, en el caso de que las funciones callbacks sean muy cortas, muchas veces utilizamos 
 * *directamente la función anónima, sin necesidad de guardarla en una variable previamente:
 */

// fA = Función A
//const fA = function (callback, callbackError) {
//    const n = ~~(Math.random() * 5);
//    if (n > 2) callback();
//    else callbackError();
//  };
//  
//  fA(
//    function () {
//      console.log("Función B ejecutada.");
//    },
//    function () {
//      console.error("Error");
//    }
//  );

/**
 * *Aunque, como se pude ver, se suele evitar facilitar la legibilidad del código, y sólo se utiliza
 * *en casos muy específicos dodne estás seguro que no vas a reutilizar la función callback o no te 
 * *interesa guardarla en una variable.
 */