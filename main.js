/**
 * *ÁMBITO LÉXICO DE THIS
 * 
 *  Una de las diferencias de las funciones flechas con respecto a las funciones tradicionales,
 *  es el valor de la palabra clave this., que no siempre es la misma.
 * 
 *  Por ejemplo, si utilizamos una función de forma global en nuestro programa, no notaremos ninguna
 *  diferencia:
 */

// Si son funciones globales
const a = function () {
    console.log(this);
  };
  const b = () => {
    console.log(this);
  };
  
  a(); // Window
  b(); // Window


/**
 *  Sin embargo, si utilizamos una función en el interior de un objeto, como se suele ser el 
 *  caso más habitual, si encontraremos diferencias. Si prestamos atención, en la primera función,
 *  donde se utiliza la función tradicional, el this. devuelve el objeto padre de la función.
 */

/**
 *  Por otro lado, en la segunda función, donde se utiliza una función flecha, el this no devuelve el 
 *  objeto padre de la función, si no que devuelve Window.
 */


padre = {
    a: function () {
      console.log(this);
    },
    b: () => {
      console.log(this);
    },
  };
  
  padre.a(); // padre
  padre.b(); // Window
