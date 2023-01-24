import { Usuario ,datoJson,productosTemporada} from './js08-clases.js';
import { Producto, ProductoElectronico } from './js08-clase-producto.js';
//Instanciar un objeto
const albertoFrausto = new Usuario(
    "Alberto frausto",
    "frausto@gmail.com",
    "Siempre viva",
    "55 8952 5879"
);
console.log(albertoFrausto);
console.log("nombre: " + albertoFrausto.nombre);
console.log("e-mail: " + albertoFrausto.email);
console.log("direccion: " + albertoFrausto['direccion']);
console.log("telefono: " + albertoFrausto['telefono']);

const karlaArenas = new Usuario(
    "Karla Arenas",
    "karla@gmail.com",
    "Av. Niños Heroes",
    "81 8752 4589"
);
console.log(karlaArenas.imprimirDatos());
console.log(albertoFrausto.imprimirDatos());


for (let claveUsuario in karlaArenas)
    console.log(claveUsuario);

const helado = new Producto(
    "Helado de vainilla",
    80,
    "88486970-7489-43d4-b007-c2870af8a099");

for (let claveProducto in helado)
    console.log(claveProducto);
console.log(helado.nombre);//helado de vainilla
helado.nombre = "helado de limon";
console.log(helado.nombre);//helado de limon
console.log(helado.uuid);
console.log(helado.precio);
helado.precio = 85;
console.log(helado.precio);

karlaArenas.agregarProductos(helado);
karlaArenas.agregarProductos(new Producto("Pollo", 110, "57553be5-d365-4287-9a6c-d3e468a71f35"));
karlaArenas.agregarProductos(new Producto("Galleta", 200, "09f21e1f-2821-4329-af7a-c5ba64f849f4"));
const grabadora = new ProductoElectronico(
    "LG super X3000",
    5000,
    "4a63d2ab-358a-46ff-a06b-ffefe3860152",
    365
);
karlaArenas.agregarProductos(grabadora);
console.log(karlaArenas.imprimirDatos());

/* fetch()
    .then(response => response.json())
    .catch();
 */

    
     console.log(JSON.parse(datoJson));

     const productosPagInicio = JSON.parse(productosTemporada);
    console.log(productosPagInicio);
    productosPagInicio.forEach( producto => 
        console.log( `En venta ${producto.nombre} a $${producto.precio}`)
     );
    
    
    /* 
for(let producto in productosPagInicio)
console.log(`En venta ${producto.nombre} a `) */

localStorage.setItem("productos-nicio", JSON.stringify(productosPagInicio));
localStorage.setItem("Fecha-caducidad", new Date().getTime());
