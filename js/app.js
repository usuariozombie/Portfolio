/*Desarrollar al menos 3 botones en el navegador que
represente un cambio de tema de la página. Al pulsar cada uno
de los botones, los colores principales de la página cambiarán.*/

//Tema rojo

function rojo() {
    document.getElementById("nav").style.background =
      "linear-gradient(to left, #ff2a6d, #ff655b)";
    document.getElementById("nav").style.boxShadow =
      "0px 2px 10px rgba(0, 0, 0, 0.2)";
    document.getElementById("footer").style.background =
        "linear-gradient(to left, #ff2a6d, #ff655b)";
    document.getElementById("footer").style.boxShadow =
        "0px 2px 10px rgba(0, 0, 0, 0.2)";
    var botones = document.getElementsByClassName("button");
    for (var i = 0; i < botones.length; i++) {
      botones[i].style.backgroundColor = "#ff2a6d";
    }
    var underlines = document.getElementsByClassName("underline");
    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.backgroundColor = "#ff655b";
    }
    var nameSpan = document.getElementsByClassName("nameSpan");
    for (var i = 0; i < nameSpan.length; i++) {
        nameSpan[i].style.background = "linear-gradient(to left, #ff2a6d, #ff655b)";
        nameSpan[i].style.webkitBackgroundClip = "text";
        nameSpan[i].style.webkitTextFillColor = "transparent";
    }

}

//Tema verde

function verde() {
    document.getElementById("nav").style.background =
      "linear-gradient(to left, #007f5f, #2b9348)";
    document.getElementById("nav").style.boxShadow =
      "0px 2px 10px rgba(0, 0, 0, 0.2)";
    document.getElementById("footer").style.background =
        "linear-gradient(to left, #007f5f, #2b9348)";
    document.getElementById("footer").style.boxShadow =
        "0px 2px 10px rgba(0, 0, 0, 0.2)";
    var botones = document.getElementsByClassName("button");
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "#007f5f";
    }
    var underlines = document.getElementsByClassName("underline");
    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.backgroundColor = "#2b9348";
    }
    var nameSpan = document.getElementsByClassName("nameSpan");
    for (var i = 0; i < nameSpan.length; i++) {
        nameSpan[i].style.background = "linear-gradient(to left, #007f5f, #2b9348)";
        nameSpan[i].style.webkitBackgroundClip = "text";
        nameSpan[i].style.webkitTextFillColor = "transparent";
    }
}

//Tema azul

function azul() {
    document.getElementById("nav").style.background =
      "linear-gradient(to left, #2e3192, #1bffff)";
    document.getElementById("nav").style.boxShadow =
      "0px 2px 10px rgba(0, 0, 0, 0.2)";
    document.getElementById("footer").style.background =
        "linear-gradient(to left, #2e3192, #1bffff)";
    document.getElementById("footer").style.boxShadow =
        "0px 2px 10px rgba(0, 0, 0, 0.2)";
    var botones = document.getElementsByClassName("button");
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "#2e3192";
    }
    var underlines = document.getElementsByClassName("underline");
    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.backgroundColor = "#1bffff";
    }
    var nameSpan = document.getElementsByClassName("nameSpan");
    for (var i = 0; i < nameSpan.length; i++) {
        nameSpan[i].style.background = "linear-gradient(to left, #2e3192, #1bffff)";
        nameSpan[i].style.webkitBackgroundClip = "text";
        nameSpan[i].style.webkitTextFillColor = "transparent";
    }
}

//Volver a la configuración original

function reiniciar() {
    document.getElementById("nav").style.background =
        "linear-gradient(to left, #316eb4, #721899)";
    document.getElementById("nav").style.boxShadow =
        "0px 2px 10px rgba(0, 0, 0, 0.2)";
    document.getElementById("footer").style.background =
        "linear-gradient(to left, #316eb4, #721899)";
    document.getElementById("footer").style.boxShadow =
        "0px 2px 10px rgba(0, 0, 0, 0.2)";
    var botones = document.getElementsByClassName("button");
    for (var i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "#316eb4";
    }
    var underlines = document.getElementsByClassName("underline");
    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.backgroundColor = "#721899";
    }
    var nameSpan = document.getElementsByClassName("nameSpan");
    for (var i = 0; i < nameSpan.length; i++) {
        nameSpan[i].style.background = "linear-gradient(to left, #316eb4, #721899)";
        nameSpan[i].style.webkitBackgroundClip = "text";
        nameSpan[i].style.webkitTextFillColor = "transparent";
    }
}


