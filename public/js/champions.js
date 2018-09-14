console.log("connected champions.js")
var API = {
    "key": "ede1611243a89b545af7e3cb141474ca",
    "base": "https://ddragon.leagueoflegends.com/cdn/8.17.1",
    "data": "/data/en_US",
    "images": "/img/champion"
  };
  
  var champions = {};
  
  function initUI() {
    var containerDiv = document.createElement("div");
    containerDiv.className = "grid-container";
    
    for (var i in champions) {
      var champion = champions[i];
      var champName = champion.name;
      var championDiv = document.createElement("div");
      championDiv.className = "champDiv";
  //https://api.champion.gg/v2/champions/${champion.key}?&limit=200&champData=groupedWins,trinkets,firstitems,summoners,finalitems,masteries,hashes,skillorderhash&api_key=${API.key}
      var championLink = document.createElement("a");
      championLink.setAttribute("href", `https://u.gg/lol/champions/` + champName + `/build/`);
      championLink.setAttribute("target", "_blank");
      championDiv.appendChild(championLink);
      championLink.setAttribute("class", "card text-white  bg-dark");

      
      var image = document.createElement("img");
      image.setAttribute("src", `${API.base}${API.images}/${champion.image.full}`);
      image.setAttribute("class", "card-img-top");
      championLink.appendChild(image);



      var name = document.createElement("p");
      name.setAttribute("class", "champName");
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

  $("body").on("click", ".card", function(event){
    event.preventDefault();
    console.log($(this)[0].attributes[0].nodeValue);
    window.open($(this)[0].attributes[0].nodeValue,'_blank');
    var newChamp = {
      url: $(this).attr("data-hero")
    }

    $.post("/api/newChamp", newChamp)
    .then(function(data) {
      console.log($(this).attributes[0].nodeValue);
      window.location.href = $(this).attributes[0].nodeValue;
    })
  })
