console.log("Iniciando programa");
const refFormulario = document.forms["registro"];
refFormulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("Evento, submit activado")
    const email = refFormulario.elements['inputEmail4'].value;
    console.log(email);
});