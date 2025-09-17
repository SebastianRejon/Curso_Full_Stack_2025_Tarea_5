const miFormulario = document.getElementById('contactForm');
const miNombre=document.getElementById('nombre');
const miEmail=document.getElementById('email');
const miMensaje=document.getElementById('mensaje');

miFormulario.addEventListener('submit', function(event) {
    event.preventDefault();
    let rtaName=esNombreValido(miNombre);
    if (!rtaName[0]){
        console.log(rtaName[1]);
        let invalidoNombre=document.getElementById('invalidoNombre');
        invalidoNombre.innerHTML=rtaName[1];
        invalidoNombre.style.display='block';
    }
    let rtaMensaje=esMensajeValido(miMensaje);
    if (!rtaMensaje[0]){
            let invalidoMensaje=document.getElementById('invalidoMensaje');
            invalidoMensaje.innerHTML=rtaMensaje[1];
            invalidoMensaje.style.display='block';
    }   
    let rtaCorreo=esCorreoValido(miEmail);
    if (!rtaCorreo[0]){
            let invalidoCorreo=document.getElementById('invalidoCorreo');
            invalidoCorreo.innerHTML=rtaMensaje[1];
            invalidoCorreo.style.display='block';
    } 
    // if (rtaName) && (rtaMensaje){
    //     alert("mensaje enviado");
    // }
    });

    function esNombreValido(m){
        if (m.value.length<3){
            return [false,"No puede haber nombre menor a tres caracteres!"];
        }
        if (m.value==""){
            return [false,"No puede dejar vacio el nombre!"];
        }
        if (/\d/.test(m.value)){
            return [false,"Los nombres no pueden contener o ser numeros!"];
        }
        if (/^\s+/.test(m.value)){
            return [false,"Los nombres no pueden empezar con espacios en blanco!"];
        }
    }

    function esMensajeValido(men){
        if (men.value.length<3){
            return [false,"No puede mensajes menores a tres caracteres!"];
        }
        if (men.value==""){
            return [false,"No puede dejar vacio el mensaje!"];
        }
        if (/^\s+/.test(men.value)){
            return [false,"Los mensajes no pueden empezar con espacios en blanco!"];
        }
    } 
        function esCorreoValido(men){
        if (men.value.length<3){
            return [false,"No puede haber correos menores a tres caracteres!"];
        }
        if (men.value==""){
            return [false,"No puede dejar vacio el Correo!"];
        }
        if (/[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/.test(men.value)){
            return [false,"Los mensajes no pueden empezar con espacios en blanco!"];
        }
    }      