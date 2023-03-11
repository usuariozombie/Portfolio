/*Desarrollar un evento que cuando se quite el focus del input,
verifique que lo que se ha metido en el input es correcto (el
asunto no está vacío, cc es un correo, el cuerpo del mensaje
no está vacío...). En caso de ser correcto, se mostrará el borde
del input en verde. En caso de ser incorrecto, se mostrará el
borde del input en rojo y se añadirá debajo un texto en rojo
indicando que no se cumplen los requisitos.*/

function validateOnBlur(element) {
    element.addEventListener('blur', function () {
      if (!element.checkValidity()) {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
      }
      else {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
      }
    });
}
  
// obtener todos los campos del formulario
const formFields = document.querySelectorAll('input, textarea');
  
// iterar sobre todos los campos y llamar a la función validateOnBlur para cada uno
formFields.forEach(function (field) {
    validateOnBlur(field);
});
  