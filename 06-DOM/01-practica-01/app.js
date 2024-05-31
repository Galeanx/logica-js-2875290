//Ejercicio del boton

// 1. Variables
const miInput = document.getElementById('boton');

//2. Funciones
function cambiarValue (){
   console.log (miInput.value)
   miInput.value = 'Lanzamiento exitoso! 🤠'

}

//3. Eventos
miInput.addEventListener('click', cambiarValue)


//Ejercicio del cuadro de colores
const cajaColor = document.getElementById ('caja'); 
const btnColores = document.querySelectorAll('.btnColores');


console.log(cajaColor)
console.log(btnColores)

//2. Funciones
function pintarCaja (e){
    console.log(e.target.getAttribute('data-color'))
    let newColor = e.target.getAttribute('data-color');
    cajaColor.style.backgroundColor = newColor;
}

//3. Eventos
btnColores[0].addEventListener('click', pintarCaja);
btnColores[1].addEventListener('click', pintarCaja);
btnColores[2].addEventListener('click', pintarCaja);
btnColores[3].addEventListener('click', pintarCaja);



//Ejercicio de mover
//1. Variables

const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');
let e = 0;
//2. Funciones
function mover (){

    if(e == 0) {
        pelota.style.marginLeft = '400px';
        pelota.style.backgroundColor = 'yellow';
        pelota.style.transitionDuration = '.5s';
        e=1;

    }else{
        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = '#121245';
        pelota.style.transitionDuration = '.5s'
    
        e=0;

 
    }
}

//3. Eventos
btnMover.addEventListener('click', mover);


//Cambiar Imagen
const pantallaImg = document.querySelector('#miImagen')
const btnCambiar = document.querySelector('#btnCambiar');
let estado = 0;
function cambiarImagen(){
    pantallaImg.setAttribute('src', 'imagen2.jpg')
}

btnCambiar.addEventListener('click', cambiarImagen)