console.log("Iniciando sesion js03")
/*Todo string vacio convertido a boolean es falso
Si tiene un valor el string es true
Se usa metodo Boolean()
*/

/*
Boolean con NaN y 0 nos dará false y con cualquier otro numero nos dara
*/

/*
Un empty en string convertido a numerico es 0 y cualquier otro string que no sea numerico 
se convierte en NaN
*/

/* JSON.stringify()
Esta funcion te permite transformar un objeto en string
*/

/*
Si un array esta vacio da 0
Si un array tiene un numero te convierte el numero a number
Si tiene mas de un dato te convierte a NaN
*/

/*Una funcion vacia convertido a numero es NaN, convertida a string pasa igual entre comillas 
y convertida a boolean es true
Un objeto a numerico es NaN, es string se pasa como "[object, object]" y true en boolean
*/
//Variable global
const datosUsuario = { nombre: "Jessica", cudad: "CDMX" };
//Declaracion de bloque.
{
    //Esto es una declaracion de bloque en donde las variables decladradas(let,const) solo
    // tendrán alcance dentro del bloque o bloques aniddos dentro del bloque.
    //Variable local
    const datosUsuario = { nombre: "Wicho", cudad: "Aguascalientes" };

    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.cudad}`);
    const numeroPersonas = 49;
    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.cudad}`);
    }
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.cudad}`);
//La variable numeroPersonas no está definido
//console.log(`En este momento hay ${numeroPersonas} personas escuchando rolitas de Shakira`);

//Condicional if
/*Sintaxis 
    if(condicionVerdadera) instruccion;

    if(condicionVerdadera) instruccion;
    else instruccion_en_caso_de_no_cumplir_el_if
    if(condicionVerdadera)
    {
        Instrucciones;
    }
*/
const respuesta = true;
console.log(respuesta);
let mensaje;
if (respuesta)
    mensaje = "Te fe-li-ci-to que bien actuas";
else
    mensaje = "Entonces te pongo Su chambelán";
console.log(mensaje);

/* Operador ternario
Sintaxis: condicion ? condicion_verdadera: condicion_falsa; 
*/
let teamFrio = true;
//let mensajeTernario = teamFrio? "hielito":"ponche";
//console.log(`Te voy a servir ${mensajeTernario}`)
console.log(`Te voy a servir: ${teamFrio ? "hielito" : "ponche"}`)

let cantante = "Shakira";
console.log(`Tu reloj es ${cantante === 'Shakira' ? "Rolex" :
    cantante === "Pique" ? "Casio" : "el sol"}`);
/*
if(cantante === 'Shakira') marcaReloj= "Rolex";
else{
    if(cantante === 'Pique') marcaReloj= "Casio";
    else marcaReloj="el sol"
}
*/
//Condicional if, else if, else
/* Sintaxis 
    if(condicionVerdadera) instruccion;
    else if(segundaCondicion) instruccion;
    else if(terceraCondicion) instruccion;
    else if(condicion n) instruccion;
    else instruccion;

*/
let nombrePersona = "Karla";
let marcaReloj;
if (nombrePersona === "Shakira")
    marcaReloj = "Rolex";
else if (nombrePersona === "Pique" || nombrePersona === "Karla")
    marcaReloj = "Casio";
else if (nombrePersona === "Sergio")
    marcaReloj = "el sol";
else
    marcaReloj = "uno de cars";
console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);

//Operador lógicos and (&&) y or(||)
/*AND
A       B ->   C
true    true   true
true    false  false
false   true   false
false   false  false
 
OR
true    true   true
true    false  true
false   true   true
false   false  false

*/

/*
Condicional switch
Sintaxis:
    switch(expresion){
        case valor1:
            instrucciones;
            break;
        case valor2:
            instrucciones;
            break;
        case valorn
            instrucciones;
            break;
        default:
            instrucciones;

    }

*/

//En switch son estrictamnete igual el operador
//No puedes utilizar el || ni &&
//Hara la instruccion hasta que aparezca el break;
nombrePersona = "Mon";
marcaReloj = "";
switch (nombrePersona) {
    case "Shakira":
        marcaReloj = "Rolex";
        break;
    case "Pique":
    case "Karla":
        marcaReloj = "Casio";
        break;
    case "Segio":
        marcaReloj = "El sol";
        break;
    case "Mon":
        marcaReloj = "Ferrari";
        break;
    default:
        marcaReloj = "Uno de cars";
}
console.log(`Switch - ${nombrePersona} tu reloj es ${marcaReloj}`);

/*
    Preguntar(prompt) el número del mes, del 1 al 12 y de acuerdo al mesindicado desplegar en consola la estacion del año:
    mes 12,1,2 = Invierno;
    mes  3,4,5 = Primavera;
    mes  6,7,8 = Verano;
    mes  9,10,11= Otoño; 
    Usar switch
*/

let numeroMes = prompt("¿Que numero de mes tienes?");
let estacion = "";
//Switch para obtener la estacion
let nombreMes = "";
switch (numeroMes) {
    case "1":
        nombreMes = "Enero";
        estacion = "Invierno";
        break;
    case "2":
        nombreMes = "Febrero";
        estacion = "Invierno";
        break;
    case "3":
        nombreMes = "Marzo";
        estacion = "Primavera";
        break;
    case "4":
        nombreMes = "Abril";
        estacion = "Primavera";
        break;
    case "5":
        nombreMes = "Mayo";
        estacion = "Primavera";
        break;
    case "6":
        nombreMes = "Junio";
        estacion = "Verano";
        break;
    case "7":
        nombreMes = "Julio";
        estacion = "Verano";
        break;
    case "8":
        nombreMes = "Agosto";
        estacion = "Verano";
        break;
    case "9":
        nombreMes = "Septiembre";
        estacion = "Otoño";
        break;
    case "10":
        nombreMes = "Octubre";
        estacion = "Otoño";
        break;
    case "11":
        nombreMes = "Noviembre";
        estacion = "Otoño";
        break;
    case "12":
        nombreMes = "Diciembre";
        estacion = "Invierno";
        break;
    default:
        estacion = "No valido";
        nombreMes = "No valido";
        alert("Mes no valido");
}
console.log(`La estacion es ${estacion} y tu mes es ${nombreMes}`);


function escogiendoMesEstacion(numeroMes) {
    nombreMes = "";
    estacion = "";
    if (numeroMes === 1 || numeroMes === 2 || numeroMes === 12) {
        estacion = "Invierno";
        if (numeroMes === 1) nombreMes = "Enero";
        if (numeroMes === 2) nombreMes = "Febrero";
        if (numeroMes === 12) nombreMes = "Diciembre";
    }
    else if (numeroMes === 3 || numeroMes === 4 || numeroMes === 5) {
        estacion = "Primavera";
        if (numeroMes === 3) nombreMes = "Marzo";
        if (numeroMes === 4) nombreMes = "Abril";
        if (numeroMes === 5) nombreMes = "Mayo";
    }
    else if (numeroMes === 6 || numeroMes === 7 || numeroMes === 8) {
        estacion = "Verano";
        if (numeroMes === 6) nombreMes = "Junio";
        if (numeroMes === 7) nombreMes = "Julio";
        if (numeroMes === 8) nombreMes = "Agosto";
    }
    else if (numeroMes === 9 || numeroMes === 10 || numeroMes === 11) {
        estacion = "Otoño";
        if (numeroMes === 9) nombreMes = "Septiembre";
        if (numeroMes === 10) nombreMes = "Octubre";
        if (numeroMes === 11) nombreMes = "Noviembre";
    }
    console.log(`(IF-ELSE)El mes es: ${nombreMes} y la estacion es : ${estacion}`);
}

function comprobarNumero(numeroMes){
    if(numeroMes>1 && numeroMes<12) escogiendoMesEstacion(pidiendoNumeroMes);
    else console.log("Este numero no es permitido, vuelve a intentarlo");
}

let pidiendoNumeroMes = parseInt(prompt("Dime el numero de mes"));
comprobarNumero(pidiendoNumeroMes);

