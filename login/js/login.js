function crearCuenta() {
    var nombreU = document.getElementById("nombreU").value;
    var claveU = document.getElementById("passU").value;

    localStorage.setItem("nombreU", nombreU);
    localStorage.setItem("claveU", claveU);
}
