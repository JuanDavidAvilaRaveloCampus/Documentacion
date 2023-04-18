// CALLBACKS

console.log(
    `<------------ CALLBACKS ------------>\n  Los callbacks son funciones pasadas como argumentos a otras funciones para que sean ejecutadas en algún momento dentro de la ejecución de la función principal.\n\n  Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asícrono y nos mantiene a salvo de problemas y errores.`
);

let data = prompt("Ingrese el primer dato");
let data2 = prompt("ingrese el segundo dato");
let operacion = prompt(
    `Ingrese el numero de la operación que desea realizar:\n\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir`
);

console.log(calcular(data, data2, operacion));

function calcular(a, b, c) {
    a = data;
    b = data2;
    c = operacion;
    let resultado = 0;

    if (c == '1') {
        resultado = sumar(a, b);
        c = 'sumar';
    } else if (c == '2') {
        resultado = restar(a, b);
        c = 'restar';
    } else if (c == '3') {
        resultado = multiplicar(a, b);
        c = 'multiplicar';
    } else if (c == '4') {
        resultado = dividir(a, b);
        c = 'dividir';
    }
    console.log(`El resultado de ${c} ${a} y ${b} es: ${resultado}`);
}

let conversion_a_numero = (a)=>{
    if (isNaN(a)){
        return a;
    } else {
        a = 0;
        return Number(0)
    }
}

let sumar = (a,b)=>{

    conversion_a_numero(a);
    conversion_a_numero(b);

    return a + b;

}
let restar = (a,b)=>{

    conversion_a_numero(a);
    conversion_a_numero(b);
    return a - b;
}
let multiplicar = (a,b)=>{

    conversion_a_numero(a);
    conversion_a_numero(b);
    return a * b;
}
let dividir = (a,b)=>{

    conversion_a_numero(a);
    conversion_a_numero(b);
    return a / b;
}

