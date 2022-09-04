let enviarMaestro = () => {

    const nombre=document.getElementById('nombre').value
    const apellido=document.getElementById('apellido').value
    const materia=document.getElementById('materia').value


    console.log(nombre);
    console.log(apellido);
    console.log(materia);

    if (nombre==apellido && apellido==materia) {
        alert("Es correcta su aclaración")
    } else {
        alert("Usted está equivocado")
    }
    
} 

const triangulos=document.getElementById('enviarMaestro')

triangulos.addEventListener('click',enviarMaestro)