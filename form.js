//VALIDACION DE FORM 

const nombre = document.getElementById("name"); //FORM
const nombreform = document.getElementById("nombreform"); //Texto de advertencia
const apellido = document.getElementById("lastname"); 
const apellidoform = document.getElementById("apellidoform");
const email = document.getElementById("email");
const mailform = document.getElementById("mailform");
const comentario = document.getElementById("textArea");
const comentarioform = document.getElementById("comentarioform");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //validacion del email con expresiones regulares 
    if(nombre.value.length < 3){
        nombreform.style.display ='block'
    }
    if(!regexEmail.test(email.value)){
        mailform.style.display ='block'
    }
    if(lastname.value.length < 3){
        apellidoform.style.display ='block'
    }
    if(textArea.value.length < 50){
        comentarioform.style.display ='block'
    }
})
