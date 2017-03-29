window.onload = function(){
  var nombre = document.getElementById("nombre-coder");
  var apellido = document.getElementById("apellido-coder");
  var mail = document.getElementById("mail-coder");
  var password = document.getElementById("password-coder");

  var datosCoders = JSON.parse(localStorage.getItem("nueva-Coder"));

  nombre.innerHTML = datosCoders.nombre;
  apellido.innerHTML = datosCoders.apellido;
  mail.innerHTML = datosCoders.mail;
  password.innerHTML = datosCoders.password;

  function Coder(nombreCoder, apellidoCoder, mailCoder, passwordCoder){
    this.nombre = nombreCoder;
    this.apellido = apellidoCoder;
    this.mail = mailCoder;
    this.password = passwordCoder;
  }
    document.getElementsByTagName("button")[0].addEventListener("click",function(){
      window.location="editar.html"
  });
}
