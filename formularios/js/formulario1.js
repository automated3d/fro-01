const botonRegistrar = document.getElementById('btn-registrar');

//function imprimirDatos() {

//}

//Funcion de flecha
const imprimirDatos = () => {
    let nombre = document.getElementById('txt-nombre').value;
    let apellidos = document.getElementById('txt-apellidos').value;
    let correo = document.getElementById('txt-correo').value;
    let direccion = document.getElementById('txt-direccion').value;
    let ciudad = document.getElementById('txt-ciudad').value;
    let provincia = document.getElementById('slt-provincia').value;
    let codigo = document.getElementById('txt-zip').value;

    console.log(nombre, apellidos, correo, direccion, ciudad, provincia, codigo);

}



botonRegistrar.addEventListener('click', imprimirDatos);