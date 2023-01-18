console.log("Iniciando Js05");

//Operadores de asigancion
let estadoDiminitoMexico = "Tlaxcala";
/* 
//Esto no se debe de hacer
{
    let espaniol = ingles = rumano = turco = vasco = chino = true; 
    japones =true; // variable global no declarada
} 

console.log("Francisco habla ingles = " + ingles);
console.log("Francisco habla rumano = " + rumano);
console.log("Francisco habla turco = " + turco);
console.log("Francisco habla vasco = " + vasco);
console.log("Francisco habla chino = " + chino);

console.log("Francisco habla español = " + espaniol);
*/
//Operadores aritmeticos
//multiplicacion
let metrosCuadrados = 10 * 30; //300

//tenemos 2 terenos
//metrosCuadrados = metrosCuadrados *2;
//Operadores simplificados
metrosCuadrados *= 2;

// division
// Dividimos el terrenito entre 3 hijos
//Esto es como metrosCuadrados metrosCuadrados/3;
metrosCuadrados /= 3;
console.log(`m2 de 3 terrenos ${metrosCuadrados}`)
//Residuo %
//Quiero saber si los metrosCuadrados son mltiplos de 2
let esMultiplo2 = metrosCuadrados % 2 === 0 ? "Si" : "No"; //0
//let esMultiplo2=!(metrosCuadrados % 2) ? "Si":"No"; //0
//let esMultiplo2=metrosCuadrados % 2? "No":"Si"; //0
console.log("La cantidad es multiplo de 2? " + esMultiplo2);

//Resta
let precioTerreno = 90000;
let precioM2 = precioTerreno / 300;
console.log("Precio del metro cuadrado: " + precioM2);
let cantidadPagada = 30000;
let cantidadRestante = precioTerreno - cantidadPagada;
console.log(`Cantidad restante ${cantidadRestante} pesos`);
//Se abonó $10,000
console.log(`Cantidad restante$${cantidadRestante -= 10000}`);

//Suma
//Cobro por la generacion de escrituras(8% costo del terreno)

/* const costoEscrituras = precioTerreno * 0.08;
precioTerreno += costoEscrituras;
console.log(`Terreno + escrituras ${precioTerreno}`);
 */console.log(`Terreno + escrituras ${precioTerreno += precioTerreno * 0.08}`);
// Concatenacion de strings
let nombre = "Alan";
nombre += " Garcia";
console.log("Nombre de persona CH22: " + nombre);

//Operadores de incremento y decremento
//preincremento ++variable, postincremento variable++
//predecremento --variable, postdecremento variable--
let numClavosParaMiCasa = 100;
numClavosParaMiCasa++;//101
console.log("Numero de clavos: " + numClavosParaMiCasa);
++numClavosParaMiCasa;//102
console.log("Numero de clavos: " + numClavosParaMiCasa);//102
console.log("Numero de clavos: " + numClavosParaMiCasa++);// imprime 102 -> aumenta a 103
console.log("Numero de clavos: " + ++numClavosParaMiCasa);//imprime y aumenta a 104
//----------------------

let respuestasExamen = 95;
//Agregamos punto extra
console.log("Resultado final: " + respuestasExamen++);// 95 -> 96

respuestasExamen = 82;
do {
    console.log("Resultado: " + respuestasExamen)
} while (respuestasExamen++ <= 100)
console.log("Resultado: " + respuestasExamen)
// ++respuestaExamen o respuestaExamen++
respuestasExamen = 82;
do {
    console.log("Resultado: " + respuestasExamen)
} while (++respuestasExamen <= 100)
console.log("Resultado: " + respuestasExamen)

let nivelSuenio = 99;
if (++nivelSuenio === 100) console.log("Me voya dormir en la sesión");

//preincrmento
let x = 10;
x = x + 1;
console.log(x);

//postincremento
let y = 10;
console.log(y)
y = y + 1;

x = 3;
y = x++;
console.log(`x: ${x} y: ${y}`);// x:4 y y:3

x = 3;
y = ++x;
console.log(`x: ${x} y: ${y}`);// x:4 y y:4

//Operadores relacionales
/**
 *      <= menor o igual que
 *      >= mayor o igual que
 *      >  mayor que
 *      <  menor que
 */

let numPerfumes = 10;
if (numPerfumes > 10) console.log("Que legancia la de Francia");
if (numPerfumes >= 10) console.log("Que legancia la de Francia 2");

//Operadores de igualdad
/**
 *      ==  Operador de igualdad
 *      === Estrictamente igual
 *      !=  Diferente que
 *      !== Estrictamente difernete que
 */
let numMatriculaPavel = "10025";
if (numMatriculaPavel == 10025) console.log("Pavel esta aprobado");
if (numMatriculaPavel === 10025) console.log("Pavel esta en nivel fase 5");
if (numMatriculaPavel >= 10025) console.log("Pavel esta en el CUCEI");

//Operadores lógicos
// && (AND) || OR 
let numRebosos = 3;
let teGustaReboso = false;
let vivesEnElExtranjero = false;
if (numRebosos > 5 || teGustaReboso) console.log("Te regalo un reboso de Oaxaca");
if (numRebosos > 0 || teGustaReboso && vivesEnElExtranjero)
    console.log("Te vendo mi reboso en dolares");

// Operadores de corto circuito
// OP1 && OP2 si OP1 = true, se realiza el resultado de OP2
let online = true;
let mensaje = "Estamos en línea";
let respuesta = online && mensaje;
console.log("Respuesta: " + respuesta);

let edadPersona = 18;
mensaje = "Puede votar";
console.log("La persona puede votar? " + (edadPersona >= 18 && mensaje));

//OP1 || OP3 si OP1 = true, se realiza el resultado de OP1

let isOnline = true;
let isActive = true;

if (isOnline) {
    if (isActive) console.log("Estamos autorizados");
}

if (isOnline && isActive) console.log("Estamos autorizados");
isOnline && isActive && console.log("Estamos autorizados");

let edadMiSobrina = 15;
console.log(edadMiSobrina>18 && "Puede votar");

let numQuesadillasAComer = "3";
let guisado = "Huitlacoche";
console.log("Montse comerá quisadilla de: " + numQuesadillasAComer && guisado);

let nombreConductor = "";
tieneLicenciaConducir = true;
edadConductor = 50;
//Prioridad de operadores.
//Se imprime un empty string porque returna el valorque creo
// el primer false
const seRentaAuto = nombreConductor && tieneLicenciaConducir && edadConductor;
console.log("Resultado" + seRentaAuto);

const datoQuesadilla ={
    tortilla: "maiz",
    tieneQueso: true,
    pica: "poquito"
}

const picaLaQuesadilla = datoQuesadilla.pica && "Pica mucho";
console.log(picaLaQuesadilla);

/* "Poquito" && "Pica Mucho"
18 && true && "Hola"; // "Hola"
"Poquito" || "Pica mucho" //"Poquito"
"Poquito" || "Pica Mucho" && "Ni pica"
false || "Pica Mucho" && "Ni pica" //"Ni pica"

18 || false || "Hola" && "1023"; // 18
((0 || (!false)) || ("Hola" && "1023")); //1023
 */