class Score {
    constructor(mapCode, diff, playerID, points, pp, misses) {
        this.mapCode = mapCode;
        this.playerID = playerID;
        this.points = points;
        this.pp = pp;
        this.misses = misses;
    }
}

export const Scores = [
    new Score("46b75", "Ex+", 76561198427751585, 831774, 517.82, 0),
    new Score("200dc", "Ex+", 76561198427751585, 1779056, 600.06, 0),
    new Score("1b4f9", "Ex", 76561198427751585, 82918, 592.55, 0),
    new Score("20db5", "H", 76561198427751585, 2949819, 537.10, 0),
    new Score("3d2c5", "N", 76561198427751585, 8735122, 462.23, 0),
    new Score("13377", "E", 76561198427751585, 572825, 129.24, 0),
    new Score("1a523", "H", 76561198427751585, 4658473, 235.19, 0),
    new Score("19059", "Ex+", 76561198427751585, 327985, 612.52, 0),
    new Score("9e5c", "Ex", 76561198427751585, 439582, 501.25, 0),
    new Score("1547b", "Ex+", 76561198427751585, 1258342, 622.92, 0),
    new Score("ffa5", "N", 76561198427751585, 285792, 398.61, 0),
    new Score("ff83", "Ex", 76561198427751585, 2157823, 125.11, 7),
    new Score("1d2ef", "Ex+", 76561198427751585, 235672, 482.66, 2),
    new Score("36c09", "E", 76561198427751585, 98532, 301.25, 0),
    new Score("3aa01", "Ex", 76561198427751585, 127852, 461.67, 1),
    new Score("a2de", "Ex+", 76561198427751585, 1287523, 512.43, 4),
    new Score("168de", "H", 76561198427751585, 3489062, 553.50, 0)
]

let fetchedScores = null;
