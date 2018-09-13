console.log("connected champions.js")
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
      championDiv.className = "champDiv";
  
      var championLink = document.createElement("a");
      championLink.setAttribute("href", `http://api.champion.gg/v2/champions/${champion.key}?&limit=200&champData=kda,damage,averageGames,totalHeal,killingSpree,minions,gold,positions,normalized,groupedWins,trinkets,runes,firstitems,summoners,skills,finalitems,masteries,maxMins,matchups&api_key=${API.key}`);
      championLink.setAttribute("target", "_blank");
      championDiv.appendChild(championLink);
      
      var image = document.createElement("img");
      image.setAttribute("src", `${API.base}${API.images}/${champion.image.full}`);
      championLink.appendChild(image);

      var name = document.createElement("p");
      name.textContent = champion.name;
      championLink.appendChild(name);
      
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


