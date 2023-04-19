console.log(`Es un objeto que representa un valor que no puede estar disponible todaví, pero que se espera para que esté disponible en algún momento en el futuro\nLas promesas son una forma de manejar el asincronismo de una manera más legible y estructurada.\n\nLas promesas tienen 3 estados posibles.\n1. "Pending"(rechazada): Es el estado inicial de una promesa.\n2. "Cumplia": Cuando se resuelve satisfactoriamente(retorna el valor deseado)\n3. "Rechazada": Cuando no se puede resolver u ocurre algún error\n\nExisten metodos que se deben hacer cuando la promesa es "Cumplida" o "Rechazada". Estos metodos son:\nthen(): Recibe una función que se ejecutará cuando la promesa se cumpla satisfactoriamente mientras que catch() recibe una funcion que se ejecutará cuando la promesa sea rechazada.\n\nLas promesas también pueden ser encadenadas, lo que significa que puede realizar multiples operaciónes asincrónicas secuencialmente, de modo que la segunda operación se ejecutará solo después que la primera haya terminado satisfactoriamente.`);

function get_Random_Number(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const random_Number =Math.floor(Math.random() * 10) + 1;
        if (random_Number > 5) {
            resolve (random_Number);
        } else {
            reject ('El número generado es menor o igual a 5');
        }
    }, 2000);
    });
}

console.log('Iniciando...');
get_Random_Number()
    .them((num) =>{
        console.log(`Numero generado : ${num}`);
    })
    .catch((err) =>{
            console.log(`Error: ${err}`);
    }) 
    .finally(() =>{
        console.log(`Terminado`);
    });