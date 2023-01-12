function ingresar() {
    var PasswordStorage = localStorage.getItem("claveU");
    var nombreStorage = localStorage.getItem("nombreU");

    var nombreUser = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    

    if(password == PasswordStorage && nombreUser==nombreStorage){
        document.getElementById("error").innerHTML = " ";
        
        location.href = "page2.html"
        
    }else{
        // alert(MensajeError);
        document.getElementById("error").innerHTML = "MensajeError";
    }
}