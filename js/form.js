function validar(form) {
  if(form.nombre.value=="") { //Si este campo está vacío
    alert('No has escrito tu nombre'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  if(form.email.value=="") { //Si este campo está vacío
    alert('No has escrito tu e-Mail'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  if(form.mensaje.value=="") { //Si este campo está vacío
    alert('No has escrito el Mensaje'); // Mensaje a mostrar
    return false; //devolvemos un valor negativo
  }

  return true; // Si esta todo bien, devolvemos Ok, positivo
}
