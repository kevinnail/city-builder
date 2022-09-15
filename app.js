/* Imports */

/* Get DOM Elements */
//city name
const nameInput = document.getElementById('name-input');
const cityName = document.getAnimations('city-name');

//climate selection
const climateSelect = document.getElementById('climate-select');
const climageImg = document.getElementById('climate-img');

// architecture selection
const archSelect = document.getElementById('arch-select');
const archImg = document.getElementById('arch-img');

// add attractions
const attractionInput = document.getElementById('attractions-input');
const addBtn = document.getElementById('attractions-input');

/* State */
const city = {
    name: 'Oceantown',
    climate: 'coastal',
    architecture: 'islamic',
    attractions: [],
};

/* Events */
nameInput.addEventListener('keydown', () => {
    city.name = nameInput.value;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
