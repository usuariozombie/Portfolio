/*Desarrollar una función que se ejecutará al seleccionar una de
las opciones del select “filtro” que tenemos encima de los
proyectos del portfolio. Dicha función ocultará las cards de los
proyectos que no usen la tecnología seleccionada y mostrará o
volverá a mostrar (en caso de que estuviese oculta) las cards
de los proyectos que si usen dicha tecnología. Esta función se
ejecutará mediante el evento onchange para el código de arriba.*/


function filterProjects() {
    // obtener el valor seleccionado del selector
    var selectedLanguage = document.getElementById("selector-lenguajes").value;
    // obtener todos los proyectos
    var projects = document.getElementsByClassName("col-md-4");
    // recorrer los proyectos y ocultar/mostrar según el valor seleccionado
    for (var i = 0; i < projects.length; i++) {
        if (selectedLanguage == "all" || projects[i].classList.contains(selectedLanguage)) {
            projects[i].style.opacity = "1";
            //fade animation
            projects[i].style.transition = "opacity 1s";
        } else {
            projects[i].style.opacity = "0";
            //fade animation
            projects[i].style.transition = "opacity 1s";
        }
    }
}