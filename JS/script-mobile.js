/*NAVBAR*/

    // JavaScript para controlar el despliegue del menú
    const burgerItem = document.querySelector('.burger-item');
    const seccionesMenu = document.querySelector('.secciones-menu');

    burgerItem.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace #
    
      seccionesMenu.classList.toggle('active');
    });