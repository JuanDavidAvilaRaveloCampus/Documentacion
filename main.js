// CALLBACKS

console.log(
    `<------------ CALLBACKS ------------>\n  Los callbacks son funciones pasadas como argumentos a otras funciones para que sean ejecutadas en algún momento dentro de la ejecución de la función principal.\n\n  Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asícrono y nos mantiene a salvo de problemas y errores.`
);

let data = prompt("Ingrese el primer dato");
let data2 = prompt("ingrese el segundo dato");
let operacion = prompt(
    `Ingrese el numero de la operación que desea realizar:\n\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir`
);

data = parseInt(data);

// console.log(calcular(data, data2, operacion));
let contador= (a,b,c)=>{
    if( operacion == '1') {
        sumar(data,data2);
        
    } else if( operacion == '2'){
        restar(data,data2);
    } else if( operacion == '3'){
        multiplicar(data,data2);
    } else if( operacion == '4'){
        dividir(data,data2);
    };
};

let conversor = (p1)=>{
    return Number(p1)
};

let sumar = (a,b) =>{
    return a + b;
};

let restar = (a,b) =>{
    conversor(a);
    conversor(b);
    return a - b;
};

let multiplicar = (a,b) =>{
    conversor(a);
    conversor(b);
    return a * b;
};

let dividir = (a,b) =>{
    conversor(a);
    conversor(b);
    return a / b;
};


console.log(contador(data, data2, operacion));