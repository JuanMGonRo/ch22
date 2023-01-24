console.log("Promesas")
//Se puede usar el nmbre de la variable que quieras pero
//usaremos resolve y reject
const myPromise = new Promise((resolve, reject) => {
    const isOnline = false;
    if (isOnline)
        resolve("Promesa resuleta, está en linea");
    else
        reject("Promesa rechazada, esta fuera de linea");
});

console.log("Antes de la promesa");
//console.log(myPromise()); Las promesas no se pueden consumir de esta forma
//consumiendo la promesa con.then y .catch
//myPromise.then((response) => { }).catch((error) => { });
myPromise
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
console.log("Después de la promesa");

//Promesa de enviar un arreglo y multiplica sus elementos por 2;
//[2,5,7] => [4,10,7] = [10,7]
//Devolver solo los numeros que sean mayor a a 5
/* const datos = [2, 5, 7];
const datosDuplicados = datos.map((element) => element * 2);//[4,10,14]
const datosFiltrados = datosDuplicados.filter(number => number>5);//[10,17]
console.log(datosDuplicados);
console.log(datosFiltrados);
const procesoReducido =datos.map((element)=>element*2)
                            .filter(number => number>5);
console.log(procesoReducido);
 */

const filtrarArreglo = (datos) => {
    return new Promise((resolve, reject) => {
        const procesoReducido = datos
            .map((element) => element * 2)
            .filter(number => number > 5);
        if (procesoReducido.length)
            resolve(procesoReducido);
        else
            reject("Tu arreglo no contiene numeros mayores a 5");

    });
    //return solucion; En vez de igualar la variale retornamos la promesa
}
//Consumiendo las promesas con .then y .catch
function filtrarConPromesa() {
    console.log("Funcion con then y catch");
    filtrarArreglo([2, 4, 7])
        .then(response => console.log(response))
        .catch(error => console.warn(error));

    filtrarArreglo([2, 1, 0])
        .then(response => console.log(response))
        .catch(error => console.warn(error));
    console.log("Termina funcion con then y catch");
}

filtrarConPromesa();

//Consumiendo las promesas con Async y Await
async function filtrarPromesaConAwit() {
    console.log("Funcion con async y await");
    console.log(await filtrarArreglo([2, 4, 7, 10]));
    console.log("Termina funcion async y await");

}

//filtrarPromesaConAwit();

async function filtrarPromesaConAwitTryCatch() {
    const refAsyncAwait = document.querySelector("#btnAsyncAwait");
    refAsyncAwait.disabled = true;
    try {
        //En este bloque se tratara de resolver la promesa
        console.log("Funcion con async y await");
        console.log(await filtrarArreglo([1, 0, 5, 2]));

    }
    catch (error) {
        //en este bloque se tratara el reject que genere la promesa
        console.log("nooo, se va a acabar el mundo");
        console.warn(error);
    }
    finally {
        console.log("Termina funcion async y await");
        refAsyncAwait.disabled = false;
    }
}




