class Guide {
    constructor(icon, name, description, link) {
        this.icon = icon;
        this.name = name;
        this.description = description;
        this.link = link;
    }
}

let guides = [ new Guide("/SABAWeb/Images/Guides/accguide.png", "Как улучшить точность", "Подробное руководство по увеличению точности ударов."),
    new Guide("/SABAWeb/Images/Guides/modding.svg", "Моды и плагины", "Гайд по установке и настройке модов для максимального удобства.", ""),
    new Guide( "/SABAWeb/Images/Guides/hardlevels.jpg", "Как проходить сложные карты", "Советы для повышения планки скорости и точности на более высоких по сложности картах.", "")
];

let filteredGuides = [];
const searchbar = document.getElementById("searchbar");

function getGuidesHTML(guides) {
    return guides.map(guide =>
        `<a href="${guide.link}" class="guidecard">
            <div class="thumb">
                <img src="${guide.icon}" alt="guide thumbnail">
            </div>
            <div class="info">
                <h2 class="title">${guide.name}</h2>
                <p class="desc">${guide.description}</p>
            </div>
        </a>
    `
    )
}

function renderGuides(guides) {
    const guideList = document.getElementById('guidelist');
    if (guides.length < 1) {
        guideList.innerHTML = "Гайды не найдены.";
    }
    else (guideList.innerHTML = getGuidesHTML(guides).join(''));
}

function filterGuides() {
    if (searchbar.value === "") {
        renderGuides(guides);
        return;
    }

    filteredGuides = [];
    guides.forEach(guide => {
        if (guide.name.toLowerCase().includes(searchbar.value.toLowerCase())
            || guide.description.toLowerCase().includes(searchbar.value.toLowerCase()))  {
            filteredGuides.push(guide);
        }
    })
    renderGuides(filteredGuides);
}

document.addEventListener('DOMContentLoaded', renderGuides(guides));
searchbar.addEventListener("input", () => filterGuides());