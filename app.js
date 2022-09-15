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
const addBtn = document.getElementById('add-attractions');
const attractionList = document.getElementById('attraction-list');

// for changing classes
const cityClass = document.getElementById('city-design');

/* State */
const city = {
    name: 'Oceantown',
    climate: 'coastal',
    architecture: 'islamic',
    attractions: ['Coastal beaches', 'Sand dunes', 'Forests and mountains'],
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

addBtn.addEventListener('click', () => {
    const attraction = attractionInput.value;
    if (attraction !== '') {
        city.attractions.push(attraction);
        displayAttractions();
        attractionInput.value = '';
    }
});

/* Display Functions */
function displayCity() {
    cityClass.classList = '';
    cityClass.classList.add(city.climate, city.architecture);
    cityName.textContent = city.name;
    climateImg.src = '/assets/city-design/' + city.climate + '-climate.jpg';
    archImg.src = '/assets/city-design/' + city.architecture + '-architecture.jpg';
}

function displayInputs() {
    nameInput.value = city.name;
    climateSelect.value = city.climate;
    archSelect.value = city.architecture;
}

function displayAttractions() {
    attractionList.innerHTML = '';
    for (const attraction of city.attractions) {
        const li = document.createElement('li');
        li.textContent = attraction;
        attractionList.append(li);
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayCity();
displayInputs();
displayAttractions();
