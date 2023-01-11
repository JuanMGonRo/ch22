console.log('Estoy practicando Javascript')
/* Son 7 datos primitivos de Javascript
-String ('Hola mundo')
-Number (1000.22)
    Los numeros utilizan 64 bits para almacenarlo
    peros, solo se usan 53 bits para representar el numero.
    Guardar solo 15 digitos. 
-Bigint (1000n )
    Convertir dato de entero a Bigint BigInt(numeroInt)
    Solo se pueden sumar del mismo tipo de dato.
-Boolean (true o false)
-Undefined ()
Cuando no se define, solo se declara
-Null ()
Intencionalmente se borra el tipode dato.
como saber si es tipo de dato null
typeof(null) saldra que es un objeto
entonces se coloca null == null o null === null
-Symbol ()

Tipos de datos Object:
-Object ()
const myObject = {};
-Array ()
const myArray = [];
Funciones
-
*/

const myObject = {clave: "valor", edad:18, 5:5};
console.log(myObject.edad);
const propiedad = 'edad';
console.log(myObject[propiedad]);
console.log(myObject['5']);


/* 
Conversions de datos de string a number
    parseInt()
    parseFloat() 
Colocar la base del numero ademas
    Number.parseInt(numero, base)

Como saber si un tipo de dato numerico es un NaN
    console.log(Number.isNaN(Number.parseInt('$')));
    NaN === NaN dara un false
El operador Number convierte todo a numero 
    Number("5");
    Number(true);
    Number(false);
Tambien con un + antes del numero o hacerle una operacion que no sea suma
    +"4";
Convertir de numericos a string
(numero).toString(base si es que se usa);
Para redondear numeros
Math.round();
    */