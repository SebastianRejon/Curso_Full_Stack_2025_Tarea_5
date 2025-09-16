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
    if (rtaName){
        alert("mensaje enviado");
    }
    });

    function esNombreValido(m){
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