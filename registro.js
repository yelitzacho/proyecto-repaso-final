//
window.addEventListener('load', function(){
    var ingresoButton = document.getElementById('boton-ingreso');

    function codersIngreso (nombre, apellido, mail,contrasena){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contrasena = contrasena;
    }

     // array que almacenará todos los datos del usuario
    var coder = [];

    //variables globales de registro que me traerán los inputs
    var nombre = document.getElementById('nombre-registro');
    var apellido = document.getElementById('apellido-registro');
    var mail = document.getElementById('mail-registro');
    var contrasena = document.getElementById('contrasena-registro');
    var registro = document.getElementById('registro');

    //Función click
    ingresoButton.addEventListener('click', function(evento){
        evento.preventDefault();
        if (nombre.value.length != 0 && apellido.value.length != 0 && mail.value.length != 0 && contrasena.value.length != 0) {
            var ingreso = new Coders(nombre.value, apellido.value, mail.value, contrasena.value);
                localStorage.setItem("nueva-Coder",JSON.stringify(ingreso));
                window.location = "inicia-sesion.html"
                registro.innerHTML += coder[coder.length -1].registroCoders();
                document.getElementById("form").reset()
        } else {
            var indicaciones = document.getElementById("indicaciones");
                indicaciones.innerText = "Todos los campos deben ser llenados";
        }
    });

    //Validacion de Letras
    var letras = function(evento){
        var codigos = evento.keyCode;
            if ((codigos >= 65 && codigos <= 90) || (codigos >= 97 && codigos <= 122)){
                return true;
            } else{
                return false;
            }
      }

    nombre.onkeypress = letras;
    apellido.onkeypress = letras;

    //Validacion de Contraseña
    var email = function(evento){
        var codigos = evento.keyCode;
        var longitud = this.value.length
            if ((codigos >= 65 && codigos <= 90) || (codigos >= 97 && codigos <= 122) || (codigos >= 97 && codigos <= 122)){
                return true;
            } else{
                return false;
            }
    }

    mail.onkeypress = email;

    //Validacion de Contraseña
    var password = function(evento){
        var codigos = evento.keyCode;
        var longitud = this.value.length;
            if ((codigos >= 48 && codigos <= 57) || (longitud >=6 && longitud <= 20)){
                return true;
            } else{
                return false;
            }
    }

    contrasena.onkeypress = password;
});

var inputs = document.getElementsByClassName('registro-coder');
var validaciones = function(){
    if(this.value.trim().length == 0){
        this.value = "";
        this.nextElementSibling.nextElementSibling.innerText = "Este campo es obligatorio";
    }else{
        this.nextElementSibling.nextElementSibling.innerText = "";
    }
}

for (var i = 0; i <= inputs.length;i++){
  inputs.onblur = validaciones;
}
