console.log("js08-clases");

//Para crear una clase se usa la palabra reservada class
//El nombre de la clase debe ser con notacion PascalCase(UpperCamelCase)
class Usuario {
    nombre;
    #carritoCompras;
    //email

    //creando el constructor de la clase
    constructor(nombre, email, direccion, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaCreacion = new Date();
        this.#carritoCompras = [];
    }
    /*     set carritoCompras(producto){
            return this.#carritoCompras.push(producto);
        } */

    get carritoCompras() {
        return this.#carritoCompras;
    }

    agregarProductos(producto) {
        return this.#carritoCompras.push(producto);
    }

    imprimirDatos() {
        let listadoProductos = "";
        this.#carritoCompras
            .forEach(producto => listadoProductos += producto.imprimirDatos()+"\n")
        /*         if( this.#carritoCompras.length > 0){
                    for (let producto of this.#carritoCompras){
                        listadoProductos += `
                        UUID:\t${producto.uuid}
                        Producto:\t${producto.nombre} 
                        Precio:\t${producto.precio}
        
                        `;
                    } 
                } */

        //Se utliza this para referir que estamos hablando del objeto que creamos
        const obtenerDatos =
            `*****DATOS USUARIO*****
        nombre:${this.nombre}
        email: ${this.email}
        direccion: ${this.direccion}
        telefono: ${this.telefono}
        fecha de creacion: ${this.fechaCreacion}
        Listado de productos: ${listadoProductos}`;

        return obtenerDatos;
    }
}

const datoJson = `{
    "name":"morpheus",
    "job":"leader",
    "skills":[
       "KunFu",
       "Capitan"
    ],
    "tripulacion":{
       "operador":"Tanque",
       "elegido":"Neo"
    },
    "vivo":true,
    "edad":45
 }`;

const productosTemporada = `
[
    {
      "nombre" : "Pantalón roto y pintado",
      "precio" : 2500,
      "imagen" : "http://mirepo.com/pantalon.jpg",
      "descripcion": "Pantalón a la moda, roto por todos lados",
      "tallas" : ["L","M","CH"]
    },
    {
      "nombre" : "Sudadera",
      "precio" : 300,
      "imagen" : "http://mirepo.com/sudarea.jpg",
      "descripcion": "Sudadera de NFL",
      "tallas" : ["Unitalla"]
    }
   ]
`;

export { Usuario ,datoJson,productosTemporada};