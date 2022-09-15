/* Imports */

/* Get DOM Elements */
//city name
const nameInput = document.getElementById('name-input');
const cityName = document.getElementById('city-name');

//climate selection
const climateSelect = document.getElementById('climate-select');
const climateImg = document.getElementById('climate-img');

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
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});
archSelect.addEventListener('change', () => {
    city.architecture = archSelect.value;
    displayCity();
});

/* Display Functions */
function displayCity() {
    cityName.textContent = city.name;
    climateImg.src = '/assets/city-design/' + city.climate + '-climate.jpg';
    archImg.src = '/assets/city-design/' + city.architecture + '-architecture.jpg';
}

// (don't forget to call any display functions you want to run on page load!)
displayCity();
