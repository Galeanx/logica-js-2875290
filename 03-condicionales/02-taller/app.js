// Ejercicio 1 //

let altura = prompt("Por favor, ingrese su altura en cm:");

altura = parseInt(altura);

if (isNaN(altura)) {
    alert("Por favor, ingrese una altura válida.");
} else if (altura <= 150) {
    alert("Persona de altura baja");
} else if (altura >= 151 && altura <= 170) {
    alert("Persona de altura media");
} else if (altura >= 171) {
    alert("Persona alta");
}

function solicitarNota(materia) {
    let nota = parseFloat(prompt(`Por favor, ingrese la nota de ${materia} (entre 1 y 10):`));
    if (isNaN(nota) || nota < 1 || nota > 10) {
        alert("Por favor, ingrese una nota válida entre 1 y 10.");
        return solicitarNota(materia); 
    } else {
        if (nota >= 6) {
            alert(`Nota de ${materia}: ${nota} - Aprobado`);
        } else {
            alert(`Nota de ${materia}: ${nota} - No aprobado`);
        }
    }
    return nota;
}

// Ejercicio 2//

let notaMatematicas = solicitarNota("Matemáticas");
let notaEspanol = solicitarNota("Español");
let notaSociales = solicitarNota("Sociales");

let promedio = (notaMatematicas + notaEspanol + notaSociales) / 3;

if (promedio === 10) {
    alert("Excelente");
} else if (promedio > 7 && promedio < 10) {
    alert("Bueno");
} else if (promedio <= 7) {
    alert("Insuficiente");
}

function solicitarDato(mensaje) {
    let dato = parseFloat(prompt(mensaje));
    if (isNaN(dato)) {
        alert("Por favor, ingrese un valor válido.");
        return solicitarDato(mensaje); 
    }
    return dato;
}

// Ejercicio 3 //

let estatura = solicitarDato("Por favor, ingrese su estatura en cm:");
let velocidad = solicitarDato("Por favor, ingrese su velocidad en segundos para 100m (ej. 12.5):");
let edad = solicitarDato("Por favor, ingrese su edad en años:");

const estaturaMinima = 175; 
const velocidadMaxima = 10; 

if (estatura >= estaturaMinima & velocidad <= velocidadMaxima) {
    alert("¡Felicidades! Cumples con los requisitos de estatura y velocidad para ingresar al equipo.");

    const edadMaximaMenores = 18;

    if (edad <= edadMaximaMenores) {
        alert("Serás parte de las divisiones menores.");
    } else {
        alert("Serás parte del equipo profesional de mayores.");
    }
} else {
    alert("Lo siento, no cumples con los requisitos de estatura y/o velocidad para ingresar al equipo.");
}

function solicitarCantidad() {
    let cantidad = parseInt(prompt("Por favor, ingrese la cantidad de escritorios comprados:"));
    if (isNaN(cantidad) || cantidad < 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return solicitarCantidad(); 
    }
    return cantidad;
}

// Ejercicio 4 //

let cantidadComprada = solicitarCantidad();

const precioUnitario = 50000;

const descuento10 = 0.1; // 10%
const descuento20 = 0.2; // 20%
const descuento40 = 0.4; // 40%

let precioTotalAntesDescuento = cantidadComprada * precioUnitario;

let descuentoAplicado = 0;
if (cantidadComprada < 5) {
    descuentoAplicado = descuento10;
} else if (cantidadComprada >= 5 && cantidadComprada < 10) {
    descuentoAplicado = descuento20;
} else {
    descuentoAplicado = descuento40;
}

// Ejercicio 5 //

let descuentoMonetario = precioTotalAntesDescuento * descuentoAplicado;

let precioTotal = precioTotalAntesDescuento - descuentoMonetario;

alert(`Cantidad comprada: ${cantidadComprada} unidades
Descuento aplicado: ${descuentoAplicado * 100}% ($${descuentoMonetario.toFixed(2)})
Total a pagar: $${precioTotal.toFixed(2)}`);

const frutas = [
    { nombre: 'Manzana', precio: 800 },
    { nombre: 'Banana', precio: 500 },
    { nombre: 'Cereza', precio: 3000 },
    { nombre: 'Durazno', precio: 4500 },
    { nombre: 'Fresa', precio: 2500 },
    { nombre: 'Uva', precio: 1000 }
  ];
  
  let mensaje = "Seleccione una fruta ingresando su número:\n";
  for (let i = 0; i < frutas.length; i++) {
    mensaje += `${i + 1}. ${frutas[i].nombre} - $${frutas[i].precio.toFixed(2)}\n`;
  }
  alert(mensaje);
  
  let seleccion = prompt("Ingrese el número de la fruta que desea comprar:");
  seleccion = parseInt(seleccion) - 1;
  
  if (seleccion >= 0 && seleccion < frutas.length) {
    let frutaSeleccionada = frutas[seleccion];
        let cantidad = prompt(`¿Cuántas unidades de ${frutaSeleccionada.nombre} desea comprar?`);
    cantidad = parseInt(cantidad);
  
    if (cantidad > 0) {
      let total = cantidad * frutaSeleccionada.precio;
  
      alert(`Nombre de la fruta: ${frutaSeleccionada.nombre}\n` +
            `Valor por unidad: $${frutaSeleccionada.precio.toFixed(2)}\n` +
            `Valor total de los productos comprados: $${total.toFixed(2)}`);
    } else {
      alert("Cantidad no válida. Por favor, ingrese un número mayor a 0.");
    }
  } else {
    alert("Selección no válida. Por favor, ingrese un número del 1 al 6.");
  }