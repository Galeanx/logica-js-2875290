var parrafo = document.getElementsByTagName("p")[0];
var pantalla = document.getElementsByTagName("img")[0];
var miniatura = document.getElementsByClassName("miniatura");

function cambiar (){
    var atributo = this.getAttribute("src");
    var titulo = this.getAttribute("name");
    pantalla.setAttribute("src", atributo);
    parrafo.innerText = titulo;
}

miniatura[0].addEventListener("click",cambiar);
miniatura[1].addEventListener("click",cambiar);
miniatura[2].addEventListener("click",cambiar);
miniatura[3].addEventListener("click",cambiar);
