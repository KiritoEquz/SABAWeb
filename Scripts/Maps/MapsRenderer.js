import {maps} from '../Data/Maps.js'

const searchBar = document.getElementById('searchbar');
let filteredMaps = null;

function copyBSR(mapKey) {
    navigator.clipboard.writeText("!bsr " + mapKey);
}

function getMapsHTML(maps) {
    return maps.map(map => `<div class="mapcard">
            <div class="cover">
                <a href="https://beatsaver.com/maps/${map.mapKey}"><img src="${map.imageURL}" alt="cover"></a>
            </div>
            <div class="info">
                <a href='https://beatsaver.com/maps/${map.mapKey}'><h2 class="title">${map.name}</h2></a>
                <p class="author">${map.author}</p>
                <p class="mapper">${map.mapper}</p>
            </div>
            <div class="buttons">
            <a href="beatsaver://${map.mapKey}" class="oneclick btn"><i class="pi pi-cloud-download"></i></a>
            <button id="${map.mapKey}" class="bsr btn"><i class="pi pi-copy"></i></button>
            <a href="${map.downloadURL}" class="download btn"><i class="pi pi-download"></i></a>
</div>
        </div>`)
}

function renderMaps(maps) {

    const maplist = document.getElementById('maplist');

    maplist.innerHTML = getMapsHTML(maps).join('');
    document.querySelectorAll('.bsr').forEach(button => {
        button.addEventListener('click', () => {
            copyBSR(button.getAttribute('id'));
        })
    } )
}

function filterBySearch() {
    filteredMaps = [];
    maps.forEach(map => {
        const author = map.author;
        const name = map.name;
        const mapper = map.mapper;

        if (author.toLowerCase().includes(searchBar.value.toLowerCase())
            || name.toLowerCase().includes(searchBar.value.toLowerCase())
            || mapper.toLowerCase().includes(searchBar.value.toLowerCase())) {
            filteredMaps.push(map);
        }
    })
    renderMaps(filteredMaps);
}



document.addEventListener('DOMContentLoaded', renderMaps(maps));

searchBar.addEventListener('input', () => filterBySearch())