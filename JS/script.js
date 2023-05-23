// Espera a que se cargue el contenido de la página
document.addEventListener("DOMContentLoaded", function() {
  // Obtiene el elemento del título
  const titleElement = document.getElementById("typingEffect");
  // Obtiene el texto a mostrar
  const text = titleElement.innerText;
  // Limpia el contenido del título
  titleElement.innerText = "";
  // Variable para almacenar el texto que se mostrará progresivamente
  let displayText = "";
  // Variable para llevar la cuenta de los caracteres mostrados
  let charIndex = 0;
  
  // Función que simula el efecto de máquina de escribir
  function type() {
    // Si se han mostrado todos los caracteres, detén el efecto
    if (charIndex >= text.length) {
      return;
    }
    
    // Agrega el siguiente carácter al texto a mostrar
    displayText += text.charAt(charIndex);
    // Asigna el texto a mostrar al título
    titleElement.innerText = displayText;
    // Incrementa el índice de caracteres mostrados
    charIndex++;
    
    // Programa la llamada recursiva para el siguiente carácter
    setTimeout(type, 100);
  }
  
  // Inicia el efecto de máquina de escribir después de un tiempo de espera
  setTimeout(type, 1000);
});


/*COCKTAIL*/
// Obtener la sección y los elementos necesarios
const cocktailSection = document.getElementById('cocktailSection');
const cocktailImage = document.getElementById('cocktailImage');
const cocktailName = document.getElementById('cocktailName');
const cocktailInstructions = document.getElementById('cocktailInstructions');

// Hacer la petición a la API para obtener una receta aleatoria
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
    const cocktail = data.drinks[0];

    // Mostrar la imagen del cóctel
    cocktailImage.style.backgroundImage = `url(${cocktail.strDrinkThumb})`;

    // Mostrar el nombre y las instrucciones del cóctel
    cocktailName.textContent = cocktail.strDrink;
    cocktailInstructions.textContent = cocktail.strInstructions;
  })
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });

  /*COMIDA*/

  const mealSection = document.getElementById('mealSection');
const mealImage = document.getElementById('mealImage');
const mealName = document.getElementById('mealName');
const mealInstructions = document.getElementById('mealInstructions');

// Hacer la petición a la API para obtener una receta aleatoria
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
    const meal = data.meals[0];

    // Mostrar la imagen de la comida
    mealImage.style.backgroundImage = `url(${meal.strMealThumb})`;

    // Mostrar el nombre y las instrucciones de la comida
    mealName.textContent = meal.strMeal;
    mealInstructions.textContent = meal.strInstructions;
  })
  .catch(error => {
    console.log('Ha ocurrido un error:', error);
  });


  /*RAMDON USER*/

  // Obtener los comentarios de la API Random User
// Obtener los comentarios de la API Random User
fetch('https://randomuser.me/api/?results=3')
.then(response => response.json())
.then(data => {
  const testimonials = data.results;
  const testimonialContainer = document.querySelector('.testimonial-carousel');

  // Comentarios aleatorios
  const comments = [
    "El ambiente acogedor, la comida deliciosa y los cócteles creativos hacen de este bar mi lugar favorito para disfrutar de una noche perfecta.",
    "El menú variado, la atención amigable y la calidad de las bebidas hacen de este bar el destino ideal para pasar un buen rato con amigos.",
    "Las tapas son deliciosas y las bebidas están muy bien preparadas. Este bar es mi elección segura para disfrutar de una comida informal y sabrosa.",
    "Este bar es simplemente genial. Las hamburguesas son jugosas y los cócteles son una explosión de sabores. ¡Volveré una y otra vez!",
    "El servicio rápido y la comida deliciosa hacen de este bar el lugar perfecto para almorzar. ¡El menú ejecutivo es una excelente relación calidad-precio!",
    "La fusión de sabores en los platos y las mezclas únicas en los cócteles hacen de este bar una experiencia culinaria increíblemente gratificante.",
    "La comida gourmet y los cócteles creativos en este bar son una delicia para los sentidos. Sin duda, un lugar que supera todas las expectativas.",
    "El menú ofrece una amplia selección de opciones para todos los gustos. La comida es deliciosa y las bebidas son perfectas para acompañarla. ¡Recomendado!",
    "La combinación de platos tradicionales y modernos es asombrosa. Este bar es mi elección para disfrutar de sabores auténticos y originales.",
    "El bar tiene un ambiente vibrante y relajado, con platos deliciosos y bebidas refrescantes. Es mi lugar favorito para disfrutar de una cena informal con amigos."
  ];

  // Iterar sobre los comentarios y crear los recuadros
  testimonials.forEach((testimonial, index) => {
    const testimonialBox = document.createElement('div');
    testimonialBox.classList.add('testimonial-box');
    testimonialBox.innerHTML = `
      <img src="${testimonial.picture.medium}" alt="Foto de cliente">
      <p>${testimonial.name.first} ${testimonial.name.last}</p>
      <p>${comments[index]}</p>
    `;
    testimonialContainer.appendChild(testimonialBox);
  });
})
.catch(error => {
  console.log('Ha ocurrido un error al obtener los comentarios:', error);
});


/*BOTON - HISTORIA COMPLETA*/

// Obtener referencia al botón
const botonMostrarHistoria = document.getElementById('mostrarHistoria');

// Asignar evento click al botón
botonMostrarHistoria.addEventListener('click', mostrarVentanaHistoria);

// Función que muestra la ventana y escribe el texto
function mostrarVentanaHistoria() {
  // Abrir una nueva ventana
  const ventanaHistoria = window.open('', 'VentanaHistoria', 'width=800,height=600');

  // Escribir el texto en la ventana
  ventanaHistoria.document.write(`
    <html>
    <head>
      <title>Historia de ByteBar</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.5;
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <h1>Historia de ByteBar</h1>
      <p>
¡Por supuesto! A continuación, te presento una historia inventada pero emocionante para la sección "Nosotros" de la página web de ByteBar, el resto bar ubicado en Córdoba Capital, Argentina:

¡Bienvenidos a ByteBar, el lugar donde los sabores se fusionan con la pasión por la tecnología en el corazón de Córdoba Capital! Nuestra historia se remonta a 1995, cuando dos hermanos, Marcos y Ana, decidieron dar vida a su visión de crear un espacio único que combinara la pasión por la buena comida con la innovación tecnológica.

Marcos, un talentoso chef con un amor inmenso por la cocina de autor, y Ana, una ingeniera apasionada por las últimas tendencias tecnológicas, unieron sus fuerzas para crear ByteBar. Su objetivo era simple pero ambicioso: ofrecer a los comensales una experiencia culinaria excepcional y sumergirlos en un ambiente lleno de sorpresas tecnológicas.

En ByteBar, nuestra misión es deleitarte con una variedad de platos inspirados en la cocina internacional, elaborados con ingredientes frescos y locales de la región de Córdoba. Desde exquisitas tapas argentinas hasta sabores asiáticos cautivadores, nuestra carta es una fusión de culturas que se mezclan para crear un festín para tus sentidos.

El ambiente en ByteBar es único y cautivador. Nuestra decoración moderna y elegante se combina con elementos tecnológicos innovadores, creando una atmósfera futurista que te transportará a otro mundo. Ya sea que estés disfrutando de nuestra terraza al aire libre con vistas panorámicas de la ciudad o explorando nuestras áreas interactivas llenas de juegos de luces y hologramas, cada rincón de ByteBar te sorprenderá.

Nuestro equipo está compuesto por apasionados chefs, mixólogos expertos y un personal amable y atento, dedicados a brindarte un servicio excepcional en cada visita. Trabajamos en estrecha colaboración con proveedores locales para garantizar la frescura y calidad de nuestros ingredientes, y nos enorgullece ofrecer platos únicos y cócteles innovadores que satisfarán incluso a los paladares más exigentes.

Además de nuestra oferta culinaria, en ByteBar nos esforzamos por ofrecer una experiencia completa. Organizamos eventos temáticos emocionantes, desde noches de jazz en vivo hasta exhibiciones de realidad virtual, que te mantendrán entretenido y maravillado durante toda tu visita. Además, estamos comprometidos con nuestra comunidad, colaborando con organizaciones locales para apoyar proyectos sociales y promover el desarrollo sostenible en Córdoba.

En ByteBar, la innovación, la excelencia culinaria y la pasión por la tecnología se unen para brindarte una experiencia gastronómica única en Córdoba Capital. ¡Ven y únete a nosotros en este viaje culinario donde cada bocado es una experiencia extraordinaria!</p>
      <!-- Resto del texto -->
    </body>
    </html>
  `);

  // Cerrar la escritura en la ventana
  ventanaHistoria.document.close();
}


/*PRUEBA SCROLL*/
window.addEventListener('scroll', function() {
  var headerBackElement = document.querySelector('#header-back');
  var seccionesBackElement = document.querySelector('#secciones-back');

  if (window.scrollY > 100) {
    headerBackElement.style.backgroundImage = 'none';
    seccionesBackElement.style.display = 'none';
    
  } else {
    headerBackElement.style.backgroundImage = 'url("/imagenes/navbar_fondo.png")';
    seccionesBackElement.style.display = 'flex';
  }
});







