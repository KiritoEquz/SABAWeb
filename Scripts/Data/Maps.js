class Map {
    constructor(key, name, author, mapper, imageURL) {
        this.mapKey = key;
        this.name = name;
        this.author = author;
        this.mapper = mapper;
        this.imageURL = imageURL;
    }
}

import {Scores} from "./Scores.js"

let beatSaverResponse = null;

let mapCodes = Scores.map(score => score.mapCode);
await fetch(`https://api.beatsaver.com/maps/ids/${mapCodes.toString()}`)
    .then(data => data.json()).then(json => beatSaverResponse = json);

export let maps = mapCodes.map(mapCode => {
    const thisMap = beatSaverResponse[mapCode];
    return {
        mapKey: thisMap.id,
        name: thisMap.metadata.songName,
        author: thisMap.metadata.songAuthorName,
        mapper: thisMap.metadata.levelAuthorName,
        imageURL: thisMap.versions[0].coverURL
    }
})