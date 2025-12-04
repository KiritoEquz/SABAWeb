function getColorByRating(rating) {
    if (rating == 1) return "gold";
    if (rating == 2) return "silver";
    if (rating == 3) return "saddlebrown";
    return "#474747";
}

function createPlayerUnit(player) {
    const playerUnit = document.createElement('div');
    playerUnit.className = "tableunit";
    const pfp = player.avatar === "" ? "../../Images/Pfps/unknown.webp" : player.avatar;
    playerUnit.innerHTML = `
    <div class="rank">${player.rank}</div>
            <div class="flag"><img src="../Icons/Flags/${player.country}.svg" alt=""></div>
            <div class="pfp"><img src="../Images/Pfps/${pfp}" alt=""></div>
            <a href="">${player.name}</a>
            <div class="pp">${player.pp}pp</div>
    `;
    return playerUnit;
}

function renderPlayerCards(players, pageNumber) {
    const table = document.getElementById(`table`);
    table.innerHTML = ``;

    for (let i = 0; i < 10; i++) {
        if (i + (pageNumber-1)*10 >= players.length) return;
        const unit = createPlayerUnit(players[i+(pageNumber-1)*10]);
        const flagc = unit.getElementsByClassName("flag");
        flagc[0].style.backgroundColor = getColorByRating(players.rank);
        table.appendChild(unit);
    }
}