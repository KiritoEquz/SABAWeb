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


function getGuidesHTML() {
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

function renderGuides() {
    const guideList = document.getElementById('guidelist');
    guideList.innerHTML = getGuidesHTML().join('');
}

document.addEventListener('DOMContentLoaded', renderGuides());