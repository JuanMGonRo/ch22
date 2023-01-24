console.log("Iniciando programa js06");

const obtenerNombre = () => prompt("Escribe tu nombre", "Juan");

const encontrarElementbyId = () => {
    //Esto entrega un objeto
    const element = document.getElementById("titulo");
    console.log("Datos del objeto:", element);
    console.log("Entre las etiquetas: " + element.innerHTML);
    //element.innerHTML+= "manipulación del DOM";
    //Con inner.html puedo agregar nuevas etiquetas
    //const nombreDesarrollador = obtenerNombre();//Todo agregar funcion
    const nombreDesarrollador = "Juan";//Todo agregar funcion
    element.innerHTML += `<em>Manipulación</em> del <strong>DOM</strong> por <span><em>${nombreDesarrollador}</em></span>`;
    element.innerHTML = `<h1>${element.innerHTML} </h1>`
}

encontrarElementbyId();

const encontrarElementbyTagname = () => {
    //const elements = document.getElementsByTagName("p");
    const [, introRef] = document.getElementsByTagName("p");
    //obtenemos el indice 0
    //const introRef = elements[0].innerHTML;
    //Modificamos el contenido de IntroRef
    console.log(introRef?.innerHTML);
    //introRef.innerHTML = "Las <strong>quesadillas</strong> van con <em>queso</em>";
};

encontrarElementbyTagname();

const cambiarColorEm = ( nuevoColor) => {
    const elements = document.getElementsByTagName("em");
    console.log(elements.length);
    for (let element of elements){
      element.innerHTML = `<i style="color:${nuevoColor};"> ${element.innerText}</i>`;
      //element.style.color = nuevoColor;
    }                    
}

//cambiarColorEm("blue");

const diferenciaInnerHTMLInnerText = () => {
    const element = document.getElementById("titulo");
    console.log(element.innerHTML);
    console.log(element.innerText);
}

diferenciaInnerHTMLInnerText();

const encontrarElementosByClassName = () => {
    const elements = document.getElementsByClassName("subtitulo");
    for (let element of elements) console.log(element.innerText);
}

encontrarElementosByClassName();

//El selector universal
const encontrarElementByQuerySelector = () => {
    //Se usan selectores como en css
    // para tarer etiquetas hijas a partir de una padre seria span>em
    const element = document.querySelector(".subtitulo");
    console.log(element?.innerText);
        //document.querySelectorAll();
}
encontrarElementByQuerySelector();

const crearElemento = () => {
    const newElement = document.createElement("p");
    newElement.innerHTML = `La CH22 es bien <strong>chida</strong> por 
    <ul>
        <li>Diversas</li>
        <li>Listos y listas</li>
        <li>Hay clases de bienes raices</li>
        <li>Cholos</li>
        <li>Amigables</li>
        <li>La ch22 te respalda</li>
        <li>Sin problemas</li>
        <li>Aplican: Has compitas, no compitas</li>

    <ul>
    `;
    document.getElementById("datos-generation").appendChild(newElement);
    const nodoClonado = newElement.cloneNode(true);
    document.getElementById("noticias").appendChild(nodoClonado);
}

crearElemento();