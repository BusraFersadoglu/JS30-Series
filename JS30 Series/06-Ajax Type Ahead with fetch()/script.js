const dataPoint = "https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json" ;
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector('.suggestions');

const countries = [];

fetch(dataPoint)
    .then(b => b.json())
    .then(d => countries.push(...d)); 

function findMach(wordToMatch, countries){
    return countries.filter(place => {

const regex = new RegExp(wordToMatch, "gi")
    return place.country.match(regex)
    })
}

function displayMatches(){
    const matchArray = findMach(this.value, countries);
    const html = matchArray.map(place => {
        return `
            <li>
                <span class="name">${place.country}</span>
                <span class="city">${place.city}</span>
            </li> `;
        }).join('');
    suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);