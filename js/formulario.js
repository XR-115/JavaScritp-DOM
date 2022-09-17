    const formulario= document.getElementById('formulario-validaciones')
    const campos= document.querySelectorAll('#formulario-validaciones input')


    const reglas={
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
        textos: /^[a-z\d\-_\s]{3,20}$/i,
        password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[misena]+\.[a-zA-Z0-9-.]+$/,
        numeros: /^\d{5,10}$/,
        fecha: /^([0-3][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
    }

    const inputs = {
        numDoc: false,
        nombre: false,
        apellido: false,
        naci: false,
        email: false,
        pass: false
    }


//**--------------LA FUNCIÓN PARA VALIDAR LOS CAMPOS**---------------//     
    const validarCampos = (e) => {
//**--------------LA CONDICIONAL SEGÚN EL CAMPO QUE SE ESTÉ SELECCIONANDO**---------------// 
        switch (e.target.name) {
            
            case "numDoc":
                validarInput(reglas.numeros, e.target, 'numDoc')
            break;
            
            case "nombre":
                validarInput(reglas.textos, e.target, 'nombre')
                break; 

            case "apellido":
                validarInput(reglas.textos, e.target, 'apellido')
                break;

            case "naci":
                validarInput(reglas.fecha, e.target, 'naci')
                break;

            case "email":
                validarInput(reglas.correo, e.target, 'email')
                break;

            case "pass":
                validarInput(reglas.password, e.target, 'pass')
                validarPassword();
                break;

            case "pass2":
                validarPassword();
                break;

            default:
                break;
        }
    }

    //**--------------FUNCIÓN PARA VALIDAR LOS CAMPOS DE UN INPUT**---------------// 
    const validarInput = (regla, input, a) => {
        if (regla.test(input.value)){
            document.getElementById(`g-${a}`).classList.remove('error');
            document.querySelector(`#g-${a} .msj-error`).classList.remove('msj-error-visible')
            document.querySelector(`#g-${a} i`).classList.remove('fa-exclamation-circle')


            //SE PONE EL ENVIADO O SUCCESS
            document.getElementById(`g-${a}`).classList.add('success')
            //SE PONE ÍCONO DE TODO BIEN
            document.querySelector(`#g-${a} i`).classList.add('fa-check-circle')
            inputs[a] = true;

        } else {
            //SI TA MAL
            //AGREGAR CLASE ERORR PA METER LOS ESTILOS
            document.getElementById(`g-${a}`).classList.add('error')
            //MOSTRAR MENSAJE DE ERROR
            document.querySelector(`#g-${a} .msj-error`).classList.add('msj-error-visible')
            //QUITAR ÍCONO CORRECTO
            document.querySelector(`#g-${a} i`).classList.remove('fa-check-circle')
            //AGREGAR ÍCONO DE ERROR UWU
            document.querySelector(`#g-${a} i`).classList.add('fa-exclamation-circle')

            inputs[a] = false;
        }
        
    }

    //**--------------FUNCIÓN PARA LA CONFIRMACIÓN DE LA CONTRASEÑA**---------------// 
    const validarPassword=()=>{
        const pass1=document.getElementById('pass')
        const pass2=document.getElementById('pass2')

        if (pass1.value === pass2.value) {

            document.getElementById(`g-Pass2`).classList.remove('error');
            //QUITAR MENSAJE ERROR
            document.querySelector(`#g-Pass2 .msj-error`).classList.remove('msj-error-visible')
            //QUITAR ÍCONO DE ERROR
            document.querySelector(`#g-Pass2 i`).classList.remove('fa-exclamation-circle')


            //SE PONE EL ENVIADO O SUCCESS
            document.getElementById(`g-Pass2`).classList.add('success')
            //SE PONE ÍCONO DE TODO BIEN
            document.querySelector(`#g-Pass2 i`).classList.add('fa-check-circle')

            inputs[pass] = true;
        }
        else{
            //SI TA MAL
            //AGREGAR CLASE ERORR PA METER LOS ESTILOS
            document.getElementById(`g-Pass2`).classList.add('error')
            //MOSTRAR MENSAJE DE ERROR
            document.querySelector(`#g-Pass2 .msj-error`).classList.add('msj-error-visible')
            //QUITAR ÍCONO CORRECTO
            document.querySelector(`#g-Pass2 i`).classList.remove('fa-check-circle')
            //AGREGAR ÍCONO DE ERROR UWU
            document.querySelector(`#g-Pass2 i`).classList.add('fa-exclamation-circle')

            inputs[pass] = false;
        }
    }

//**--------------FUNCIÓN PARA RECORRER TODOS LOS CAMPOS DEL ARREGLO DEL FORMULARIO**---------------// 
    campos.forEach((campo)=>{
        campo.addEventListener('keyup',validarCampos);
        campo.addEventListener('blur',validarCampos);
    })
    
    formulario.addEventListener('submit', (e) =>{

        e.preventDefault();


        const terminos = document.getElementById('terminos')

        if (inputs.numDoc && inputs.nombre && inputs.apellido && inputs.naci && inputs.email && inputs.pass && terminos.checked) {
            alert("Usuario registrado con éxito")
            formulario.reset;

            document.querySelectorAll('.success').forEach((icono) => {
                icono.classList.remove('success')
            })
        } else {
            document.getElementById('frm-no-enviado').classList.add('frm-no-enviado-activo')
            
            }
        
    })