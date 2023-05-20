



// let formulario = document.querySelector('form');
// let myHeader = new Headers({
//     "Content-Type" : "application/json"
// });

// let config = {
//     Headers : myHeader,
// };

// formulario.addEventListener('submit', async(e)=>{
//     // console.log(data);
//     e.preventDefault();
    
//     let data = Object.fromEntries(new FormData(e.target));


//     let api = await fetch("api.php", config);

//     config.method = "POST"; 
//     config.body = JSON.stringify(data);
    
//     let res = await (api).text();
//     let pre = document.querySelector('pre').innerHTML = res;

//     // console.log();
// });