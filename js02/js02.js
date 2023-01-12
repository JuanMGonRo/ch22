console.log("Iniciando sesion js02")
/*Funciones declaradas/ Funciones definidad
(function delaration/function statement)
Una caracteristica de la funciones declaradas es que
tiene hoisting(elevacion)
*/ 
function multiplica(a,b){
return a * b;

}
console.log("El resultadfo de 5 * 10 = "+ multiplica(5,10));

/* Funciones expresadas
Las funciones expresadas( function expresions) son funciones que son
declaradas dentro de la asignacion de una variabale.

Estas funciones pueden ser anonimas(no tienen nombre)
Las funciones expresadas no tienen hoisting.

*/
/**
 * Suma dos valores
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b;
 */

const suma= function(a , b){
    const result = a + b;
    return result;
}

console.log("La sumatoria de 4 + 6 = "+ suma(4,6));

/*
Funciones autoinvocadas.

Las funciones autoinvocadas (self-invoking function)
Son funciones que se ejecutan en su definicion.
Pueden ser anonimas

*/
(function saludo(){
    console.log("Hola, me estoy autoinvocando");
})();

/*
Funciones flecha
Una funcion flecha(arrow functions) son similares a las funciones exresadas, 
pero no requiere la palabra function-. Ademas, si solo tiene una instruccion 
y es el retorno, no requiere la instruccion return y las llaves. 
Las funciones flechas no tienen Hoisting(elevacion)

*/

const restaExpresada = function (a , b)
{
    return a - b;
}

const resta = (a, b) => a - b;

console.log("La resta de 20 - 2 = " + resta(20,2))

const exponente = (a, b) =>{
    const result = a ** b;
    return result;

}

console.log("El numero 4^3=" + exponente(4,3));

const exponeneteAlCuadrado = a => a ** 2;
console.log("El numero 4^2 = "+ exponeneteAlCuadrado(4));

const imprimeSaludo = () => console.log("Holi crayoli");

imprimeSaludo();

/*
Funciones con paraemtros inicializados
Se puede hacer cn cualquier tipo de funcion.
*/

function divide(a = 3 , b = 1){
    return a/b;
}

console.log("La division de 3/1 = " + divide(5,2));
/*
Rest Parameters
El parametro rest nos permite representar una serie de valores indefinididos en los argumentos.
El parametro Rest siempre debe de ir al final de todos los parametros
*/
function sumatoriaIndefinida(a,b,...restoDatos)
{
    let sumatoria = a + b;
    for (let i = 0; i < restoDatos.length; i++) {
    sumatoria += restoDatos[i];
    }
    return sumatoria;
}
console.log("Sumar varios numeros: " + sumatoriaIndefinida(2,3,4,5,11,23,23));

/*
Funcion recursiva
Funcion recursiva es una funcion que se llama a si misma.
*/
//Factorial de 0 = 1
//Factorial de 3 = 3 * 2 * 1
//Factorial de 5 = 5 * 4 * 3 * 2 * 1

function factorialConCicloFor(a)
{
    let total=1;
    for(let i = 1; i <= a;i++){
        total *=i;
    }
    return total;
}
console.log("Factorial de 3 = " + factorialConCicloFor(3));
console.log("Factorial de 5 = " + factorialConCicloFor(5));

function factorialConRecursion(a){
    if(a < 1) return 1;
    return a * factorialConRecursion(a-1)

}

console.log("Factorial de 3 = " + factorialConRecursion(3));
console.log("Factorial de 5 = " + factorialConRecursion(5));

//Funcion recursiva para enviar saludos
function saludos(a,b = 1){
    console.log("Saludos: " + b);  
    if(b >= a) return 1;
    return saludos(a,b+1);
}
saludos(10);

