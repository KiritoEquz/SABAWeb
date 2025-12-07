/*export const players = [
    { name: "KrayserPikmi", country: "ru", avatar: "krayserpikmi.jpg", pp: "99,999.99"},
    { name: "Глеб Романенко", country: "ru", avatar: "gleb-romanenko.jpeg", pp: "17,097.55" },
    { name: "Suziki", country: "ru", avatar: "suziki.jpg", pp: "69,420.55" },
    { name: "Bubronija", country: "am", avatar: "bubronija.jpg", pp: "77,777.77" },
    { name: "doshik0606", country: "ru", avatar: "doshik0606.jpg", pp: "5" },
    { name: "RhythmMaster", country: "us", avatar: "", pp: "12,450.30"},
    { name: "TapLover", country: "jp", avatar: "", pp: "9,876.54"},
    { name: "AimBot", country: "kr", avatar: "", pp: "23,100.75"},
    { name: "CookieziFan", country: "pl", avatar: "", pp: "15,200.00"},
    { name: "HDDTHR", country: "de", avatar: "", pp: "8,900.10"},
    { name: "StreamGod", country: "gb", avatar: "", pp: "18,340.25"},
    { name: "PPFarmer", country: "fr", avatar: "", pp: "6,543.21"},
    { name: "LaserBeam", country: "us", avatar: "", pp: "14,220.40" },
    { name: "OsuSaitama", country: "jp", avatar: "", pp: "32,500.90" },
    { name: "SkyShatter", country: "ca", avatar: "", pp: "7,845.33" },
    { name: "BeatRhino", country: "br", avatar: "", pp: "11,004.20" },
    { name: "TapWizard", country: "fi", avatar: "", pp: "19,230.75" },
    { name: "SpeedFury", country: "ru", avatar: "", pp: "9,402.10" },
    { name: "NightFlash", country: "ua", avatar: "", pp: "6,789.55" },
    { name: "CircleKing", country: "kr", avatar: "", pp: "24,990.00" },
    { name: "MetaTapper", country: "se", avatar: "", pp: "5,605.43" },
    { name: "GhostSlider", country: "cz", avatar: "", pp: "3,902.11" },
    { name: "AimSensei", country: "jp", avatar: "", pp: "28,440.88" },
    { name: "RhythmPhoenix", country: "it", avatar: "", pp: "13,330.01" },
    { name: "HyperTapper", country: "de", avatar: "", pp: "16,004.66" },
    { name: "FlowMaster", country: "pl", avatar: "", pp: "4,955.00" },
    { name: "SpinLegend", country: "au", avatar: "", pp: "20,320.20" },
    { name: "BeatNemesis", country: "mx", avatar: "", pp: "8,410.90" },
    { name: "StreamRider", country: "tr", avatar: "", pp: "12,678.56" },
    { name: "SliderWolf", country: "ar", avatar: "", pp: "10,320.75" },
    { name: "TapDragon", country: "cn", avatar: "", pp: "17,905.88" },
    { name: "CircleStorm", country: "nl", avatar: "", pp: "6,777.70" },
    { name: "NeoVortex", country: "ru", avatar: "", pp: "15,234.67" },
    { name: "CyberBear", country: "ru", avatar: "", pp: "14,890.12" },
    { name: "SiberianTiger", country: "ru", avatar: "", pp: "18,456.34" },
    { name: "VolgaRider", country: "ru", avatar: "", pp: "12,345.78" },
    { name: "UralStorm", country: "ru", avatar: "", pp: "16,789.01" },
    { name: "Matryoshka", country: "ru", avatar: "", pp: "11,223.45" },
    { name: "KremlinGhost", country: "ru", avatar: "", pp: "19,876.54" },
    { name: "BaikalWave", country: "ru", avatar: "", pp: "13,456.89" },
    { name: "SamovarKing", country: "ru", avatar: "", pp: "10,987.32" },
    { name: "TsarStream", country: "ru", avatar: "", pp: "17,654.21" },
    { name: "Balalaika", country: "ru", avatar: "", pp: "9,876.54" },
    { name: "SputnikPro", country: "ru", avatar: "", pp: "20,123.45" },
    { name: "Kalashnikov", country: "ru", avatar: "", pp: "15,678.90" },
    { name: "VodkaMaster", country: "ru", avatar: "", pp: "8,765.43" },
    { name: "CossackRider", country: "ru", avatar: "", pp: "14,321.09" },
    { name: "RedStar", country: "ru", avatar: "", pp: "16,543.21" },
    { name: "MoscowDream", country: "ru", avatar: "", pp: "12,109.87" },
    { name: "StPetersburg", country: "ru", avatar: "", pp: "18,901.23" },
    { name: "SiberianFrost", country: "ru", avatar: "", pp: "13,210.98" },
    { name: "UrsaMajor", country: "ru", avatar: "", pp: "19,012.34" },
    { name: "TransSiberian", country: "ru", avatar: "", pp: "11,098.76" },
    { name: "Katyusha", country: "ru", avatar: "", pp: "17,890.12" },
    { name: "Gagarin", country: "ru", avatar: "", pp: "21,234.56" },
    { name: "Cheburashka", country: "ru", avatar: "", pp: "7,654.32" },
    { name: "LadaRacer", country: "ru", avatar: "", pp: "14,098.76" },
    { name: "RussianBot", country: "ru", avatar: "", pp: "10,123.45" },
    { name: "TaigaWolf", country: "ru", avatar: "", pp: "16,789.43" },
    { name: "Faberge", country: "ru", avatar: "", pp: "12,456.78" },
    { name: "BearForce", country: "ru", avatar: "", pp: "18,765.09" },
    { name: "KremlinStar", country: "ru", avatar: "", pp: "13,890.12" }
];*/

class Player {
    constructor(name, country, avatar, pp, rank) {
        this.name = name;
        this.country = country;
        this.avatar = avatar;
        this.pp = pp;
        this.rank = rank;
    }
}

export let fetchedPlayers = null;

let ssResponse = null;

await fetch('https://c.prox.shyyluna.dev/https://scoresaber.com/api/players?countries=ru%2Crb%2Cua%2Ckz')
    .then(data => data.json()).then(json => ssResponse = json);

fetchedPlayers = ssResponse.players.map(player => {
    return {
        name: player.name,
        country: player.country.toLowerCase(),
        avatar: player.profilePicture,
        pp: player.pp,
        rank: player.rank
    }
})