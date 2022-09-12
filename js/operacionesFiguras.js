//--------------------------------------------FUNCIONES PARA EL CÍRCULO--------------------------------------------//
const pi=3.141516

const operacionesCirculo=document.getElementById('operacionCirculo')

let operacionCirculo = () => {


const areaCirculo=document.getElementById('radioCir').value


let resultado=pi*(areaCirculo*areaCirculo)
alert("Su resultado es:"+resultado)
}

operacionesCirculo.addEventListener('click',operacionCirculo)






const operacionesCirculo2=document.getElementById('operacionCirculo2')
let operacionCirculo2 = () => {


    const perimetroCirculo=document.getElementById('periCirculo').value
    
    
    let resultado=2*pi*(perimetroCirculo*perimetroCirculo)
    alert("El perímetro de su circulo es: "+resultado)
    }

operacionesCirculo2.addEventListener('click',operacionCirculo2)
//------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------FUNCIONES PARA EL CUADRADO--------------------------------------------//

const operacionesCuadrado=document.getElementById('operacionCuadrado')

let operacionCuadrado=()=>{

    const areaCuadrado=document.getElementById('areaCuadrado').value

    let resultado=areaCuadrado*areaCuadrado

    alert("El área de su cuadrado es de: "+resultado)
}

operacionesCuadrado.addEventListener('click',operacionCuadrado)




const operacionesCuadrado2=document.getElementById('operacionCuadrado2')

let operacionCuadrado2=()=>{

    const periCuadrado=parseFloat(document.getElementById('periCuadrado').value)

    let resultado=(periCuadrado+periCuadrado+periCuadrado+periCuadrado)

    alert("El perímetro de su cuadrado es de: "+resultado)
}

operacionesCuadrado2.addEventListener('click',operacionCuadrado2)
//------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------FUNCIONES PARA EL RECTÁNGULO--------------------------------------------//

const operacionesRectangulo=document.getElementById('operacionRectangulo')



let areaRectangulo=()=>{
    const baseRectangulo=parseFloat(document.getElementById('baseRectangulo').value)
    const alturaRectangulo=parseFloat(document.getElementById('alturaRectangulo').value)

    let resultado=(baseRectangulo*alturaRectangulo)

    alert("El área de su rectángulo es de: "+resultado)
}

operacionesRectangulo.addEventListener('click',areaRectangulo)


const operacionesRectangulo2=document.getElementById('operacionRectangulo2')



let areaRectangulo2=()=>{
    const baseRectangulo=parseFloat(document.getElementById('baseRectangulo1').value)
    const alturaRectangulo=parseFloat(document.getElementById('alturaRectangulo1').value)
    console.log(baseRectangulo);
    let resultado= 2*(alturaRectangulo+baseRectangulo)

    alert("El área de su rectángulo es de: "+resultado)
}

operacionesRectangulo2.addEventListener('click',areaRectangulo2)
//------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------FUNCIONES PARA EL TRIANGULO--------------------------------------------//
const operacionTri=document.getElementById("operacionTriangulo")


let areaTriangulo=()=>{
    
    const baseTri=parseFloat(document.getElementById("baseTriangulo").value)
    const alturaTri=parseFloat(document.getElementById("alturaTriangulo").value)

    console.log(baseTri,alturaTri);

    let resultado=(baseTri*alturaTri)/2

    alert("El área de su triangulo es de: "+resultado)
}

operacionTri.addEventListener('click',areaTriangulo)


const operacionTri2=document.getElementById("operacionTriangulo2")

let perimetroTriangulo=()=>{
    const lado1=parseFloat(document.getElementById("ladoTriangulo").value)
    const lado2=parseFloat(document.getElementById("ladoTriangulo2").value)
    const lado3=parseFloat(document.getElementById("ladoTriangulo3").value)

    console.log(lado1,lado2,lado3);

    let resultado=lado1+lado2+lado3

    alert("El perimetro de su triangulo es de: "+resultado)
}

operacionTri2.addEventListener('click',perimetroTriangulo)