// alert("hello world");
function encriptar() {
    var PasswordSistema = 'admin123';
    var MensajeError = 'Contraseña erronea';
    
    var mensaje = document.getElementById("mensaje").value;
    var password = document.getElementById("password").value;

     // alert(mensaje + password);

    if(password == PasswordSistema){
        alert ("contraseña correcta: ingresaste");
    }else{
        alert(MensajeError);
    }
 }

