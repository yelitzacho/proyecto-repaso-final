//funcion global para
window.addEventListener('load', function(){
  var ingresoButton = document.getElementById('boton-ingreso');

  //objeto constructor
  function codersIngreso (nombre, apellido, mail,contrasena){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.contrasena = contrasena;
  }

})

 // array que almacenará todos los datos del usuario
var coders = [];

//variables globales de registro que me traerán los inputs
var nombre = document.getElementById('nombre-registro');
var apellido = document.getElementById('apellido-registro');
var mail = document.getElementById('mail-registro');
var contrasena = document.getElementById('contrasena-registro');


  var Nombre = function(evento){
  var codigos = evento.keyCode;
  if ((codigos >= 65 && codigos <= 90) && (codigos >= && ) &&  ){
    return true;
  } else{
    return false;
  }
}


var Mail = function(evento){
  var codigo = evento.keyCode;
  if (codigo ) {

  }
}

var Contraseña = function (evento){
  var codigo = evento.keyCode;
  var longitud = this.contraseña.lenth;
  if (codigo <= 34 && codigo >= 122 ){

  }
}
