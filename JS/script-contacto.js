// Obtener referencia al formulario y al botón de enviar
const form = document.getElementById('reserva');
const enviarButton = document.getElementById('enviar_mensaje');

// Asignar evento submit al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de los campos del formulario
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const tel = form.elements.tel.value;
  const mensaje = form.elements.mensaje.value;

  // Validar que se hayan ingresado todos los datos
  if (name && email) {
    // Mostrar la pantalla modal de agradecimiento
    showModal();
    // Restablecer los campos del formulario
    form.reset();
  } else {
    alert('Por favor, complete los campos obligatorios.'); // Mostrar mensaje de error si faltan campos obligatorios
  }
});

// Función para mostrar la pantalla modal de agradecimiento
function showModal() {
  // Crear el elemento de la pantalla modal
  const modal = document.createElement('div');
  modal.classList.add('modal');

  // Crear el contenido de la pantalla modal
  const content = document.createElement('div');
  content.classList.add('modal-content');
  content.innerHTML = `
    <h2>Gracias por su contacto</h2>
    <p>Todos sus comentarios son de gran ayuda para que podamos seguir creciendo y haciéndolos felices.</p>
  `;

  // Agregar el contenido a la pantalla modal
  modal.appendChild(content);

  // Agregar la pantalla modal al cuerpo del documento
  document.body.appendChild(modal);

  // Cerrar la pantalla modal al hacer clic fuera del contenido
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Función para cerrar la pantalla modal
  function closeModal() {
    modal.remove();
  }
}
