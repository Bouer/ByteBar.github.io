

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

/*PRUEBA SCROLL*/
window.addEventListener('scroll', function() {
  var headerBackElement = document.querySelector('#header-back');
  var seccionesBackElement = document.querySelector('#secciones-back');
  let w = window.innerWidth;

if (window.scrollY < 100 && w > 1367) {
  
  headerBackElement.style.backgroundImage = 'url("./imagenes/navbar_fondo.png")';
  seccionesBackElement.style.display = 'flex';
 
} else {
  headerBackElement.style.backgroundImage = 'none';
  seccionesBackElement.style.display = 'none';  
}

});

/*NAVBAR*/

    // JavaScript para controlar el despliegue del menú
    const burgerItem = document.querySelector('.burger-item');
    const seccionesMenu = document.querySelector('.secciones-menu');

    burgerItem.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace #
    
      seccionesMenu.classList.toggle('active');
    });





