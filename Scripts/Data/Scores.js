class Score {
    constructor(mapCode, rank, diff, playerID, points, pp, misses) {
        this.mapCode = mapCode;
        this.rank = rank;
        this.playerID = playerID;
        this.points = points;
        this.pp = pp;
        this.misses = misses;
    }
}

export const Scores = [
    new Score("46b75", 41, "Ex+", 76561198427751585, 831774, 517.82, 0),
    new Score("200dc", 13, "Ex+", 76561198427751585, 1779056, 600.06, 0),
    new Score("1b4f9", 22, "Ex", 76561198427751585, 82918, 592.55, 0),
    new Score("20db5", 107, "H", 76561198427751585, 2949819, 537.10, 0),
    new Score("3d2c5", 15, "N", 76561198427751585, 8735122, 462.23, 0),
    new Score("13377", 6, "E", 76561198427751585, 572825, 129.24, 0),
    new Score("1a523", 32, "H", 76561198427751585, 4658473, 235.19, 0),
    new Score("19059", 51, "Ex+", 76561198427751585, 327985, 612.52, 0),
    new Score("9e5c", 9, "Ex", 76561198427751585, 439582, 501.25, 0),
    new Score("1547b", 13, "Ex+", 76561198427751585, 1258342, 622.92, 0),
    new Score("ffa5", 15, "N", 76561198427751585, 285792, 398.61, 0),
    new Score("ff83", 22, "Ex", 76561198427751585, 2157823, 125.11, 7),
    new Score("1d2ef", 111, "Ex+", 76561198427751585, 235672, 482.66, 2),
    new Score("36c09", 1, "E", 76561198427751585, 98532, 301.25, 0),
    new Score("3aa01", 5, "Ex", 76561198427751585, 127852, 461.67, 1),
    new Score("a2de", 7, "Ex+", 76561198427751585, 1287523, 512.43, 4),
    new Score("168de", 10, "H", 76561198427751585, 3489062, 553.50, 0)
]

export let fetchedScores = null;

let ssResponse = null;

await fetch('https://corsproxy.io/?https://scoresaber.com/api/player/76561198427751585/scores?limit=20&sort=top')
    .then(data => data.json()).then(json => ssResponse = json);


fetchedScores = ssResponse.playerScores.map(score => {
    return {
        score: score.score,
        leaderboard: score.leaderboard
    }
})
