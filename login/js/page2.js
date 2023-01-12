function encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    document.getElementById("error").innerHTML = " ";
    var mensajeEncriptado = btoa(mensaje);
    document.getElementById("msjEncrip").innerHTML = mensajeEncriptado;
 }
function desencriptar() {
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);

    // alert(mensajeDesencriptado);

    document.getElementById("msjReal").innerHTML = mensajeDesencriptado;
}

function mostrarNombre() {
    document.getElementById("usser").innerHTML += localStorage.getItem("nombreStorage");

}

mostrarNombre();