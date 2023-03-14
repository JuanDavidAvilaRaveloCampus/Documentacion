/**
 * * Object.fromEntries()
 *  metodo que transforma una lista de pares con [clave-valor] en un objeto.
 */

const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj1 = Object.fromEntries(entries);
  
  console.log(obj1);
  // Expected output: Object { foo: "bar", baz: 42 }
  

/**
 * *    Este método toma una lista de pares como clave-valor y devulve un nuevo objeto 
 *  *   cuyas propiedades son dadas por éstas entradas. El argumento iterador se espera
 * *    que sea un objeto que implemente un método @@iterador, que devuelve un objeto
 * *    iterador, que produce un objeto tipo array de dos elementos, donde el primer
 * *    elemento es un valor que se usará como la clave de la propiedad, y el segundo 
 * *    elemento es el valor a asociar con esa clave de propiedad.
 * 
 *  ! Object.fromEntries() realiza lo inverso de Object.entries().
 */

// Convirtiendo un Map en un Objeto
// Con Object.fromEntries, puedes convertir de un Map (en-US) a un Object:

const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj2 = Object.fromEntries(map);
console.log(obj2); // { foo: "bar", baz: 42 }


// Convirtiendo un Arreglo en un Objeto
// Con Object.fromEntries, puedes convertir de un Array a un Object:

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

