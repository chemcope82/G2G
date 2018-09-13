const API = {
    "key": "ede1611243a89b545af7e3cb141474ca",
    "base": "http://ddragon.leagueoflegends.com/cdn/8.17.1",
    "data": "/data/en_US",
    "images": "/img/champion"
  };
  var champions = {};
  
  function makeImages() {
    for (i in champions) {
      console.log(`${API.base}${API.images}/${champions[i].image.full}`)
    }
  }
  
  function getChampionID(ddID) {
    for (i in champions) {
      if (champions[i].id == ddID)
        return champions[i].key
    } 
  }
  
  function getChampionStats(championID) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.champion.gg/v2/champions/${championID}?&limit=200&champData=kda,damage,averageGames,totalHeal,killingSpree,minions,gold,positions,normalized,groupedWins,trinkets,runes,firstitems,summoners,skills,finalitems,masteries,maxMins,matchups&api_key=${API.key}`);
    xhr.onload = function() {
      console.log(JSON.parse(xhr.response));
    }
    xhr.send();
  }
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `${API.base}${API.data}/champion.json`);
  xhr.onload = function() {
    champions = JSON.parse(xhr.response).data;
    makeImages();
  }
  xhr.send();




///alternate iteration

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/champion.json");
xhr.onload = function() {
  var response = JSON.parse(xhr.response);
  console.table(response.data);
}
xhr.send();


function getChampion(key) {
    for (i in champions) {
      if (champions[i].key == key)
        return champions[i]
    } 
  }
  
  var champions = {};
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/champion.json");
  xhr.onload = function() {
    champions = JSON.parse(xhr.response).data;
  }
  xhr.send();

  getChampion("103")



  //different iterations of testing

const APIKEY = "ede1611243a89b545af7e3cb141474ca";
var champions = {};

function getChampionID(ddID) {
  for (i in champions) {
    if (champions[i].id == ddID)
      return champions[i].key
  } 
}

function getChampionStats(championID) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.champion.gg/v2/champions/${championID}?&limit=200&champData=kda,damage,averageGames,totalHeal,killingSpree,minions,gold,positions,normalized,groupedWins,trinkets,runes,firstitems,summoners,skills,finalitems,masteries,maxMins,matchups&api_key=${APIKEY}`);
  xhr.onload = function() {
    console.log(JSON.parse(xhr.response));
  }
  xhr.send();
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/champion.json");
xhr.onload = function() {
  champions = JSON.parse(xhr.response).data;
}
xhr.send();

///run this after
console.log(getChampionID("Ahri"));
console.log(getChampionStats(getChampionID("Ahri")));



////////


var API = {
  "key": "ede1611243a89b545af7e3cb141474ca",
  "base": "http://ddragon.leagueoflegends.com/cdn/8.17.1",
  "data": "/data/en_US",
  "images": "/img/champion"
};

var champions = {};

function initUI() {
  var containerDiv = document.createElement("div");
  containerDiv.className = "container";
  
  for (var i in champions) {
    var champion = champions[i];

    var championDiv = document.createElement("div");

    var championLink = document.createElement("a");
    championLink.setAttribute("href", `http://api.champion.gg/v2/champions/${champion.key}?&limit=200&champData=kda,damage,averageGames,totalHeal,killingSpree,minions,gold,positions,normalized,groupedWins,trinkets,runes,firstitems,summoners,skills,finalitems,masteries,maxMins,matchups&api_key=${API.key}`);
    championLink.setAttribute("target", "_blank");
    championDiv.appendChild(championLink);
    
    var name = document.createElement("h1");
    name.textContent = champion.name;
    championLink.appendChild(name);
    
    var image = document.createElement("img");
    image.setAttribute("src", `${API.base}${API.images}/${champion.image.full}`);
    championLink.appendChild(image);
    
    containerDiv.appendChild(championDiv);
  }
  document.body.appendChild(containerDiv);
}

(function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", `${API.base}${API.data}/champion.json`);
  xhr.onload = function() {
    champions = JSON.parse(xhr.response).data;
    initUI();
  }
  xhr.send();
})();