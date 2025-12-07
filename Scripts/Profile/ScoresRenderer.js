import {fetchedTopScores} from "../Data/Scores.js"
import {fetchedRecentScores} from "../Data/Scores.js"
import {maps} from "../Data/Maps.js"

const topBtn = document.getElementById('top');
const recentBtn = document.getElementById('recent');


function getScoresHTML(fetchedScores) {
    return fetchedScores.map(score => {
        const currDate = new Date(Date.now());
        const scoreDate = new Date(score.score.timeSet);

        let finalDiff = '';

        const timeInMs1 = currDate.getTime();
        const timeInMs2 = scoreDate.getTime();
        const diffInMs = timeInMs1 - timeInMs2;

        const diffInSeconds = Math.trunc(diffInMs / 1000);
        const diffInMinutes = Math.trunc(diffInMs / (1000 * 60));
        const diffInHours = Math.trunc(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.trunc(diffInMs / (1000 * 60 * 60 * 24));
        const diffInMonths = Math.trunc(diffInMs / (1000 * 60 * 60 * 24 * 30));

        if (diffInMinutes === 0) {
            finalDiff = `${diffInSeconds}с`;
        }
        else if (diffInHours === 0) {
            finalDiff = `${diffInMinutes}мин, ${diffInSeconds % 60}с`;
        }
        else if (diffInDays === 0) {
            finalDiff = `${diffInHours}ч, ${diffInMinutes % 60}мин`
        }
        else if (diffInMonths === 0) {
            finalDiff = `${diffInDays}дн, ${diffInSeconds % 24}ч`
        }
        else {
            finalDiff = `${diffInMonths}мес, ${diffInDays % 30}дн`
        }

        const acc = (score.score.baseScore / score.leaderboard.maxScore * 100).toFixed(2);
        let pp = score.score.pp == 0 ? '' : `<div class="pp">
                    <p>${score.score.pp.toFixed(2)}pp</p>
                </div>`;

        return `<div class="score">
            <div class="scoreinfo1">
                <div class="rank">
                    <img src="../Icons/earth.svg" alt="">
                    <p>#${score.score.rank}</p>
                </div>
                <p>${finalDiff}</p>
            </div>
            <div class="cover">
                <img src="${score.leaderboard.coverImage}" alt="">
            </div>
            <div class="mapinfo">
                <a href="https://beatsaver.com/?q=${score.leaderboard.songHash}">${score.leaderboard.songAuthorName} - ${score.leaderboard.songName}</a>
                <p>${score.leaderboard.levelAuthorName}</p>
            </div>
            <div class="scoreinfo2">
                <div class="acc">
                    <p>${acc}%</p>
                </div>
                ${pp}
                <div class="points">
                    <p>${score.score.baseScore}</p>
                </div>
                <div class="mistakes">
                    <p>FC</p>
                    <img src="../Icons/checkmark.svg" alt="">
                </div>
            </div>
        </div>`
    })
}

function sortTop() {
    if (!topBtn.classList.contains('active') && recentBtn.classList.contains('active')) {
        recentBtn.classList.remove('active');
        topBtn.classList.add('active');
        renderScores(fetchedTopScores)
    }
}

function sortRecent() {
    if (!recentBtn.classList.contains('active') && topBtn.classList.contains('active')) {
        topBtn.classList.remove('active');
        recentBtn.classList.add('active');
        renderScores(fetchedRecentScores)
    }
}

function renderScores(fetchedScores) {
    const scoreTable = document.getElementById('scores');

    scoreTable.innerHTML = getScoresHTML(fetchedScores).join('');
}

document.addEventListener('DOMContentLoaded', topBtn.classList.add('active'));
document.addEventListener('DOMContentLoaded', renderScores(fetchedTopScores));

topBtn.addEventListener('click', () => sortTop());
recentBtn.addEventListener('click', () => sortRecent());