
function calcular() {

    let conversion1=document.getElementById("conver1").value
    let conversion2=document.getElementById("conver2").value
    let gradosUsu=parseFloat(document.getElementById("grados").value)


 switch (conversion1) {



    case 'Celsius':
        if (conversion2=='Celsius') {
            alert("No podemos realizar la conversión de Celsius a Celsius");
        }
        else if(conversion2=='Fahrenheit'){
            console.log("Vamos a realizar la conversión de Celsius a Fahrenheit");
            let resultado=(gradosUsu*1.8)+32

            alert("Sus grados en Faherenheit son: "+resultado)
        }

        else{
            console.log("Vamos a realizar la conversión de Celsius a Kelvin");
            let resultado=gradosUsu+273.15;
            alert("Sus grados Kelvin son: "+resultado)
        }
        break;



    
    case 'Fahrenheit':
          if (conversion2=='Fahrenheit') {
            alert("No podemos realizar la conversión de Fahrenheit a Fahrenheit");
        }
        else if(conversion2=='Kelvin'){
            console.log("Vamos a realizar la conversión de Fahrenheit a Kelvin");
            let resultado=  0.55*(gradosUsu-32)+273;
            alert("Sus grados Kelvin son: "+resultado)
        }

        else{
            console.log("Vamos a realizar la conversión de Fahrenheit a Celsius");
            let resultado=(gradosUsu -32) / 1.8; 
            alert("Sus grados Celsius son: "+resultado)
        }
        break;
    
    case 'Kelvin':
        if (conversion2=='Kelvin') {
            alert("No podemos realizar la conversión de Kelvin a Kelvin");
        }
        else if(conversion2=='Fahrenheit'){
            console.log("Vamos a realizar la conversión de Kelvin a Fahrenheit");
            let resultado=1.8* (gradosUsu-273.15) + 32;
            alert("Vamos a realizar la conversión de Kelvin a Fahrenheit: "+resultado);
        }

        else{
            console.log("Vamos a realizar la conversión de Kelvin a Celsius");
            let resultado=gradosUsu-273.15;
            alert("Vamos a realizar la conversión de Kelvin a Celsius: "+resultado);
        }
        break;
    
    default:
        break;
 }
  
}

const conversion=document.getElementById('calcular')

conversion.addEventListener('click',calcular)