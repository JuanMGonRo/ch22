console.log("Iniciando proyecto");

const nombresCh22 = ["Manuel", "Leonardo", "Melanie"];
//Constructor de clase array
const nombresCh14 = new Array("Andres", "Cori", "Maga", "Sebas");
console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];
//Arreglo con 24 elementos
const promedioEdadesCh14 = new Array(24);
console.log(promedioEdadesCh22);
console.log(promedioEdadesCh14);
console.log(`Numero de elementos: ${promedioEdadesCh22.length}`);
console.log(`Numero de elementos: ${promedioEdadesCh14.length}`);
//Se recomienda declarar los arrays(objetos) con const 
//para prevenir que se cambie el tipo de dato
const armasCh22 = ["manoplas", "picahielo"];
//armasCh22 = "filero"; No se puede cambiar el tipo de dato.
console.log(`Lista de armas: ${armasCh22}`);

//Como leer un elemento en un arreglo
console.log(`Jesica tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene un ${armasCh22[0]}`);
//Los objetos son datos mutables
armasCh22[0] = "filero";
console.log(`Leonardo tiene un ${armasCh22[0]}`);

//Ejemplos con string
let nombreClica = "Los Wichales";
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);
nombreClica[0] = "T";//No cambia porque un string es un dato primiivo, que es inmutable
console.log(`La variable ${nombreClica} comienza con la letra ${nombreClica[0]}`);

//armasCh22 =["manoplas","picahielo","machete"]; Esto marcara error porque no se puede reasignar 
armasCh22[2] = "machete";
armasCh22[armasCh22.length] = "macana";
// Agregar elemento al final 
armasCh22.push("cadena", "bat");
//Agregar elemento al inicio
armasCh22.unshift("navaja", "desarmador");
console.log("Actualización de armas: " + armasCh22);

//Iteramos los arreglos
//Ciclo for
/* for (instruccion inicio; comparacion; expresion final) {
    instruccion;
    }
    for (instruccion inicio; comparacion; expresion final) Instruccion;
    for (let index = 0; index < array.length; index++) {
        instrucciones;
    }
    */
for (let i = 0; i < armasCh22.length; i++)
    console.log(`El indice ${i} es ${armasCh22[i]}`);
//armasCh22.forEach(callbackfunction)
function iterarArreglo(elemento, indice, arreglo) {
    console.log(`El indice ${indice} es ${elemento}`);
}

armasCh22.forEach(iterarArreglo)

//Con funcion flecha

armasCh22.forEach((elemento, indice) => console.log(`Flecha => El indice ${indice} es ${elemento}`));

//ForIn va a iterar el indice 
for (let arma in armasCh22)
    console.log(`ForIn ${arma} tiene ${armasCh22[arma]}`);

//ForOff va a iterar los elementos
for (let arma of armasCh22)
    console.log(`ForOff arma ${arma}`);

//Iterar de forma descendente las armas
for (let i = armasCh22.length - 1; i >= 0; i--)
    console.log(`El indice ${i} es ${armasCh22[i]}`);

//Para el ciclo for no es necesario indicar el inicio,
//la comparacion,la exresion final
let iteracion = 0
for (; ;) {
    console.log("Valor de 1: " + iteracion);
    if (iteracion === 10) break;
    iteracion++;
}

//La instruccion break rompe con la iteracion
//La instruccioon continue con la sig. Iteracion
for (let i = 0; i <= 10; i++) {
    if (i === 5) break;
    console.log("For con break" + i);
}

for (let i = 0; i <= 10; i++) {
    if (i === 5) continue;
    //Se salta la iteraccion y no hace la instruccion
    console.log("For con break" + i);
}
//Matricez [ [ ] , [ ] , [ ] ]
const participantes = [
    ["Jose", "Maria", "Pedro"],//CH1 Fila 0
    ["Tan", "Javi", "Andrea", "Santi"], //CH2 Fila 1
    ["Melanie", "Pavel"]//CH3 Fila 2
];
//Feliz cumpleaños
//F  C
console.log("Persona CH3(f2) 2a persona (c1) " + participantes[2][1]);
console.log("Persona CH3(f1) 1a persona (c0) " + participantes[1][0]);
console.log("Persona CH3(f0) 3a persona (c2) " + participantes[0][2]);

for (let filas = 0; filas < participantes.length; filas++) {
    console.log(participantes[filas]); //Iterando las filas
    for (let columnas = 0; columnas < participantes[filas].length; columnas++) {
        console.log(participantes[filas][columnas]);
    }

}

//Usando break en ciclos anidados
//Dejar de mostrar los nombres, cuando se encuentre a Tan
let continuarIteraciones = true;
for (let fila = 0; fila < participantes.length; fila++) {
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        console.log(`[${fila}][${columna}]`)
        if (continuarIteraciones)
            console.log("Uso de break " + participantes[fila][columna]);
        if (participantes[fila][columna] === "Tan") continuarIteraciones = false;
    }
}

//Usando break
//Usamos las etiquetas para definir que ciclo romper
cicloFila:
for (let fila = 0; fila < participantes.length; fila++) {
    cicloColumna:
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        console.log(`[${fila}][${columna}]`)
        console.log("Uso de break " + participantes[fila][columna]);
        if (participantes[fila][columna] === "Tan") break cicloFila;
    }
}

//Usando continue
cicloFila:
for (let fila = 0; fila < participantes.length; fila++) {
    cicloColumna:
    for (let columna = 0; columna < participantes[fila].length; columna++) {
        if (participantes[fila][columna] === "Javi") continue cicloFila;
        console.log(`[${fila}][${columna}]`)
        console.log("Uso de continue " + participantes[fila][columna]);
    }
}
//Ciclo while
/*
sintaxis:
while(condicion_verdadera)instruccion;
while(condicion_verdadera){
    instruccioes;
}
*/
let numIteracion = 0;
while(confirm("Quieres seguir iterando")){
    console.log("Iteracion n." + numIteracion++);
}

//Preguntar del 1 al 10 y saber s es el nmero que penso el usuario
let num =1;
//El ! antes del confirm niega la respuesta
/* while(!confirm(`${num} es tu numero?`)){
num++
} */
num = 0;
while(!confirm(`${++num} es tu numero?`));
console.log("Tu numero es el "+ num);

//Ciclo do while
/*
Sintaxis
do{
    instrucciones;
}while(condicion_verdadera);
*/

let valor = 10;
while(valor<5){
    console.log("while"+ valor);
    valor++;
}

valor= 10;
do{
console.log("do while "+ valor);
valor++;
}while(valor<5);
/**
 * FIFO: first input first output
 * LIFO: last input first output
 * 
 */

const alimentosPerecederos =[];
//Agregando una caja
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("manzanas miercoles");
//Sacando manzanas del lunes
console.log("Sacando a la venta "+ alimentosPerecederos.shift());//Lunes
console.log("Sacando a la venta "+ alimentosPerecederos.shift());//miercoles
//Tenemos una ferretaria
const productos=["desarmadores","cemento"];
//Agrego luces navideñas e diciembre
productos.push("luces navideñas");
console.log("Sacando a la venta " + productos.pop());