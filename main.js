/**
 * *FUNCIONES AUTOEJECUTABLES
 * 
 *  Pueden eistir casos en los que necesites crear una función y ejecutarla sobre la marcha.
 *  En JsvaScript es muy sencillo crear funciones autoejecutables. Básicamente, sólo tenemos que 
 *  envolver entre paréntesis la función anónima en cuestión (no necesitamos que tenga nombre, 
 *  puesto que no la vamos a guardar) y luego, ejecutarla:
 */

// Función autoejecutable
(function () {
    console.log("Hola!!");
  })();
  
  // Función autoejecutable con parámetros
  (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("Manz");


/**
 *  Tambièn podemos utlizar parámetros en dichas funciones autoejecutables. Importante tener en cuenta
 *  que los paràmetros se asignan al final de la función autoejecutable.
 */

/**
 * *Para tener en cuenta:
 *  Si la funcion devuelve algún valor con return (a diferencia de los otros tipos de funciones); en este caso
 *  lo que se almacena en la variable es el valor que develve la función autoejecutada:
 */

const f = (function (name) {
    return `¡Hola, ${name}!`;
  })("Manz");
  
  f; // '¡Hola, Manz!`
  typeof f; // 'string'