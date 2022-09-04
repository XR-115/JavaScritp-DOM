function sub(){
    const palabras = new palabras(document.getElementById("palabra").value)
   alert("Usted escribió "+palabras)
   ;
};



function longitud() {
    palabras = document.getElementById("palabra").value;
    alert("La longitud de su palabra es de "+palabras.length)
}
function minus() {
    palabras = document.getElementById("palabra").value;
    alert("Su palabra en minúsculas es : "+palabras.toLowerCase() )
}

function mayus() {
    palabras = document.getElementById("palabra").value;
    alert("Su palabra en MAYÚSCULAS ES: "+palabras.toUpperCase() )
}

function first() {
    palabras = document.getElementById("palabra").value;
    alert("La primera letra de su palabra es : "+palabras[0] )
}

//.toLocaleLowerCase
//.toLocaleUpperCase