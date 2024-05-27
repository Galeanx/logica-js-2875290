/*
const pantalla = document.getElementById('titulo');
const miBtn = document.getElementById('btn');


//Crear el evento
miBtn.addEventListener('click', function(){
    pantalla.style.color = 'green'; //Cambia el color
    pantalla.innerText = "Ejecutando script🥱"; //Cambia el texto dentro de la etiqueta
    pantalla.style.fontFamily = 'Verdana';
    pantalla.style.textDecoration = "underline blue"
    pantalla.style.animation
}) /*








/*let p = {

    style: {
        color = 'rojo',
        fontSize: '3em'
    },
    innerText: 'holamundo',
    onclick: 'función'
}

p.style.color = 'blue' */

let contador = 0;
const maximo = 20;
const minimo = 0;
const contadorElement = document.getElementById('contador');

function incrementar() {
  if (contador < maximo) {
    contador++;
    contadorElement.innerText = contador;
  }
}

function decrementar() {
  if (contador > minimo) {
    contador--;
    contadorElement.innerText = contador;
  }
}