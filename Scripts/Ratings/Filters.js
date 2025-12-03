import {players} from './Players.js';
import {nextBtn, nextPage, prevBtn, prevPage, refreshCount} from "./Pages.js";

const filters = document.getElementById("filters");
const dropdown = document.getElementById("filterdropdown");
const searchbar = document.getElementById("search");
const countryselect = document.getElementById("country");

const countries = [
    { code: "us", name: "США"},
    { code: "ru", name: "Россия"},
    { code: "am", name: "Армения"},
    { code: "jp", name: "Япония"}
]

let filteredPlayers = players;



players.sort((a, b) => {
    const ppA = parseFloat(a.pp.replace(/,/g,''));
    const ppB = parseFloat(b.pp.replace(/,/g,''));
    return ppB - ppA;
})

for (let i = 0; i < players.length; i++) {
    players[i].rank = i+1;
}

filters.addEventListener('click', () => {
    filters.classList.toggle("active");
    dropdown.classList.toggle("active");
})

function filterBySearch(players) {
    if (searchbar.value === "") return players;
    let filteredPlayers = []
    players.forEach((player) => {
        if (player.name.toLowerCase().includes(searchbar.value.toLowerCase())) {
            filteredPlayers.push(player);
        }
    })
    return filteredPlayers;
}

function getCountryCode(countryName) {
    let countryCode = "";
    countries.forEach(country => {
        if (country.name.toLowerCase() === countryName.toLowerCase()) {
            countryCode = country.code;
        }
    })
    return countryCode;
}

function filterByCountry(players) {
    if (countryselect.value === "Все страны") return players;
    let filteredPlayers = []
    const countryCode = getCountryCode(countryselect.value);
    players.forEach((player) => {
        if (player.country === countryCode) {
            filteredPlayers.push(player);
        }
    })
    return filteredPlayers;
}

function renderFiltered(players) {
    const searchFiltered = filterBySearch(players);
    filteredPlayers = filterByCountry(searchFiltered);
    renderPlayerCards(filteredPlayers, 1);
}


function createCountryChoice(country) {
    const countryChoice = document.createElement("option");
    countryChoice.value = country.name;
    return countryChoice;
}

function renderCountries() {
    countryselect.innerHTML = '<option value="Все страны">Все страны</option>'

    countries.forEach(country => {
        const countryUnit = createCountryChoice(country);
        countryUnit.innerHTML = `${country.name}`;
        countryselect.appendChild(countryUnit);
    })
}

document.addEventListener('DOMContentLoaded', () => renderPlayerCards(players ,1));
document.addEventListener('DOMContentLoaded', () => renderCountries());

searchbar.addEventListener("input", () => {renderFiltered(players); refreshCount();});
countryselect.addEventListener("input", () => {renderFiltered(players); refreshCount();});

prevBtn.addEventListener("click", () => prevPage(filteredPlayers, 1));
nextBtn.addEventListener("click", () => nextPage(filteredPlayers, 1));