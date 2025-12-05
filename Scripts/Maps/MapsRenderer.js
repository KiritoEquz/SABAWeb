import {maps} from '../Data/Maps.js'

function getMapsHTML() {
    return maps.map(map => `<div class="mapcard">
            <div class="cover">
                <img src="${map.imageURL}" alt="cover">
            </div>
            <div class="info">
                <a href='https://beatsaver.com/maps/${map.mapKey}'><h2 class="title">${map.name}</h2></a>
                <p class="author">${map.author}</p>
            </div>
        </div>`)
}

function renderMaps() {

    const maplist = document.getElementById('maplist');

    maplist.innerHTML = getMapsHTML().join('');
}

document.addEventListener('DOMContentLoaded', renderMaps());