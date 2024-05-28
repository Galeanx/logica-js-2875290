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
