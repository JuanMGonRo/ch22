console.log("js08 Objetos")

//Crear un objeto 
const frutasColor = {
    fresa: "roja", //atributo
    pinia: "amarillo",
    pepino: "verde",
    naranja: "verde-amarillo"
};

//Formas de leer un objeto
console.log(frutasColor.fresa);
console.log(frutasColor['pepino']);
const colorFrutaNaranja = "naranja";
console.log(frutasColor[colorFrutaNaranja]);

//Modificacion a un valor
frutasColor[colorFrutaNaranja] = "amarillo anaranjado";
console.log(frutasColor[colorFrutaNaranja]);

//Voy a leer las claves con in
for (let frutaColor in frutasColor)
    console.log("clave", frutaColor, "valor", frutasColor[frutaColor]);


//Uso de symbol
const oculto = Symbol();

const datosAutomovil = {
 modelo: "Vochito",
 fabricante: "VW",
 [oculto]: 250_000
} 

for(let clave in datosAutomovil)
console.log("Datos", datosAutomovil[clave]);

console.log("Dato oculto " + datosAutomovil[oculto]);

localStorage.setItem("Automovil", JSON.stringify(datosAutomovil));
const myArray = [5, 7, 8, 14];

//Creando un arreglo usando el constructor
const myArrayWithConstructor = new Array(5, 7, 8, 14);

//leyendo una propiedad del objeto myArray
//Propiedad de longitud
//Las propiedades con caracteristicas del objeto, estos no llevan parentesis
myArray.length;//4

//Usando el metodo(accion) para extraer el 7 y el 8
console.log(myArray.slice(1,3));//Extraer 7,8
console.log(myArray);//Extraer 7,8