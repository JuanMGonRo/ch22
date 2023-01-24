console.log("JS07");

const introduccion = () => {
    console.log("01-Bienvnidos y bienvenidas a CH22");
}

const desarrollo = () => {
    console.log("02-Pasale a lo barrido");
}

const desarrolloAsincrono = (delay) => {
    //Funcion asincrona
    setTimeout(() => console.log(`Asincrono-pasele en ${delay}`)
        , delay);
}
let idSetInterval;
const setIntervalAsincrono = (delay = 1000) => {
    let contador = 0;
    idSetInterval = setInterval(() => console.log(`Rockstar mode ${++contador}`), delay)

}

const stopIntervalAsincrono = () => {
    setTimeout(() => {
        console.log("Se detiene el intervalo");
        clearInterval(idSetInterval)
    }, 10_000);
}

const despedida = () => {
    console.log("03-Ay nos vidrios, os vicenteamos luego");
}

//Programacion sincrona
introduccion();
desarrollo();
despedida();

//Programacion asincrona
introduccion();
desarrolloAsincrono(2000);
desarrolloAsincrono(6000);
setIntervalAsincrono(2000);
stopIntervalAsincrono();
despedida();
let idCounter;
const refStartInterval = document.getElementById("start-interval");
const refStopInterval = document.getElementById("stop-interval");
refStartInterval.addEventListener('click', (event) => {
    let contador = 0;
    console.log(event);
    refStartInterval.disabled =true;
    refStopInterval.disabled =false;
    idCounter = setInterval(() => console.log(`Contador${++contador}`), 1000)
});

function stopCounter(e) {//event
    console.log(e);
    console.log("Se detiene el contador");
    clearInterval(idCounter);
    refStartInterval.disabled =false;
    refStopInterval.disabled =true;

}