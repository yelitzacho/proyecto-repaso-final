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
            var ingreso = new nuevoCoder(nombre.value, apellido.value, mail.value, contrasena.value);
                localStorage.setItem("nueva-Coder",JSON.stringify(ingreso));
                window.location = "inicia-sesion.html"
                registro.innerHTML += coder[coder.length -1].registroCoders();
                document.getElementById("form").reset()
        } else {
            var indicaciones = document.getElementById("indicaciones");
                indicaciones.innerText = "Todos los campos deben ser llenados";
        }
    });
});

//Validacion de Letras
var letras = function(evento){
    var codigos = evento.keyCode;
        if ((codigos >= 65 && codigos <= 90) || (codigos >= 97 && codigos <= 122) || codigos == 32){
            return true;
        } else{
            return false;
        }
  }

nombre.onkeypress = nombre;

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

var inputs = document.getElementsByClass('registro-coder');
var validaciones = function(){
    if(this.value.trim().length == 0){
        this.value = "";
        this.nextElementSibling.nextElementSibling.innerText = "Este campo es obligatorio";
    }else{
        this.nextElementSibling.nextElementSibling.innerText = "";
    }

    if (this.getAttribute("type")=="text"){
        var datos = this.value.split(" ");
        var datosMayusculas = "";
        for (var i = 0; i < datos.length; i++){
            datosMayusculas += datos[i].charAt(0).toUpperCase() + datos[i].substring(1).toLowerCase() + " ";
        }
        this.value = datosMayusculas
    }
}

for (var i = 0; i <= inputs.length;i++){
  inputs.onblur = validaciones;
}
