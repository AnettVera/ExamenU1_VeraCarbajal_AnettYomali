function cambiarColor() {
  var contenedor = document.querySelector('.contenedor');
  var info= document.querySelector('.container');
  var container= document.querySelector('.info');
  var miDiv = document.getElementById("miDiv");
  contenedor.style.backgroundColor = '#131328';
  container.style.backgroundColor = '#7272BE';
  info.style.backgroundColor = '#22225B';
  miDiv.style.backgroundColor='#131328';
}
function claro(){
  var contenedor = document.querySelector('.contenedor');
  var info= document.querySelector('.container');
  var container= document.querySelector('.info');
  contenedor.style.backgroundColor = '#EFEFF0';
  container.style.backgroundColor = '#ECD5F6';
  info.style.backgroundColor = '#ffffff';
   miDiv.style.backgroundColor='#EFEFF0';

}

var nuevoTexto = "Este texto se modificó";

function cambiarTexto() {
  var parrafo = document.getElementById("parrafo");
  parrafo.textContent = nuevoTexto;
}


function cambiarImagen() {
 var imagen = document.getElementById("Imagen");
 imagen.src = "https://i.pinimg.com/originals/72/88/b5/7288b5c821d3c1064643c23de28653ee.jpg";
}
    
function regresar() {
  var imagen = document.getElementById("Imagen");
 imagen.src = "https://ar.toneden.io/23822410/tracks/5939674?cache=1556143241117";
}

function ocultarMensaje() {
  var mensaje = document.getElementById("mensaje");
  var boton = document.getElementById("boton");
  mensaje.classList.add("oculto");
  boton.classList.add("oculto");
}
function escribirTexto() {
  var miDiv = document.getElementById("miDiv");
  var h1 = document.createElement("h1");
  var texto = document.createTextNode("Este texto no lo escribió Anett Yomali, lo escribió JavaScript");
  h1.appendChild(texto);
  miDiv.appendChild(h1);
}