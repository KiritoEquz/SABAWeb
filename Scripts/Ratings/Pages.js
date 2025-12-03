export const prevBtn = document.getElementById("prevpage");
export const nextBtn = document.getElementById("nextpage");
export const pageText = document.getElementById("pagetext");

let pageNumber = 1;

export function nextPage(players) {
    if (pageNumber === Math.ceil(players.length/10)) { return; }
    pageNumber += 1;
    pageText.innerText = pageNumber;
    renderPlayerCards(players, pageNumber)
}

export function prevPage(players) {
    if (pageNumber === 1) { return; }
    pageNumber -= 1;
    pageText.innerText = pageNumber;
    renderPlayerCards(players, pageNumber)
}

export function refreshCount() {
    pageNumber = 1;
    pageText.innerText = pageNumber;
}

document.addEventListener("DOMContentLoaded", () => {
    pageText.innerText = 1;
});