let calcularTriangulo = () => {
    const lado1= document.getElementById('lado1').value
    const lado2= document.getElementById('lado2').value
    const lado3= document.getElementById('lado3').value


    if (lado1==lado2 && lado1==lado3 &&lado2==lado1 &&lado2==lado3 &&lado3==lado1 && lado3==lado2 ) {
        alert("Su triangulo es Isósceles")
    }
    else if (lado1!=lado2 && lado1!=lado3) {
        alert("Su triangulo es Escaleno")
    }

    else{
        alert("Su triangulo es Equilatero")
    }
    };



    const triangulos=document.getElementById('calcularTriangulo')

    triangulos.addEventListener('click',calcularTriangulo)