/**
 * *CLAUSURAS
 * 
 *  Las clausuras o cierres, es un concepto relaciondo con las funcoines y los ámbitos que suele costar 
 *  comprender cuando se empieza en JavaScript. Es importante tener las bases de funciones claras para 
 *  poder entender las bases de una clausura.
 * 
 *  A grandes rasgos, una clausura o cierre se define como una función que <<encierra>> variables en su 
 *  propio ámbito (y que continúan existiendo añun habiendo terminado la función). Por ejemplo:
 */

// Clausura: Función incr()
const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
  })();
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3

/**
 *  Tenemos una función anónima que es también una función autoejecutable. Aunque parece una
 *  función por expresión, no lo es, ya que la variable incr está guardando lo que devuelve 
 *  la función anónima autoejecutable que a su vez, es otra función diferente.
 */

/**
 *  La <<magia>> de las clausuras es que en el interior de la funcón autoejecutable estamos creadno
 *  una variable num que se guardará en el ámbito de dicha función, por lo tanto existirá con el 
 *  valor declarado: 0.
 */

/**
 *  Por lo tanto, en la variable incr tenemos una función opr expresión que además conocer el valor 
 *  de una variable num, que sólo existe dentro de incr. Si nos fijamos en la función que devolvemos,
 *  lo que hace es incrementar el valor de num y devolverlo. Como la variable incr es una clausura
 *  y mantiene la variable en su propio ámbito, veremos que a medida que ejecutamos incr(), los valores
 *  de num (que estamos devolviedo) conservan su valor y se van incrementando.
 */