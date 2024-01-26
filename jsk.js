function validacionExpre() {
    var emailInput = document.getElementById('email');
    var password = document.getElementById('password');
    var emailvalidacion = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailvalidacion.test(emailInput.value)) {
         
      console.log('Favor de ingresar un correo electronico valido');
      
      return false;
    } 
     
    if (password.value.length < 8) {
        console.log('La contraseña debe tener 8 caracteres o más.');
        return false;
      }

    else {
      window.alert('Inicio de sesion exitoso')
      return true;
    }  }


  