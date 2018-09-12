// Create dropdowns for location and country
var locations = [];
for(var g = 0; g < locations.length; g++){
  /*

            
                <button class="dropdown-item" type="button">North America</button>
                <button class="dropdown-item" type="button">Republic of Korea</button>
                <button class="dropdown-item" type="button">Russia</button>
                <button class="dropdown-item" type="button">Brazil</button>
                <button class="dropdown-item" type="button">Russia</button>
                <button class="dropdown-item" type="button">Europe Nordic and East</button>
                <button class="dropdown-item" type="button">Europe West</button>
                <button class="dropdown-item" type="button">Japan</button>
                <button class="dropdown-item" type="button">Latin America North</button>
                <button class="dropdown-item" type="button">Latin America South</button>
                <button class="dropdown-item" type="button">Oceania</button>
                <button class="dropdown-item" type="button">Turkey</button>
            </div>
        </div>
  */

  //div
  var locationDiv = $("<div class='dropdown' id='locationsDrop'><hr><label>Server Regions</label><button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenu2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>All</button><div class='dropdown-menu' aria-labelledby='dropdownMenu2'>");

  //checkboxes
  var locationDrop = $("<button class='dropdown-item' type='button'>");
  locationDrop.text(locations[g]);



  locationDiv.append(locationDrop);



  $("#gifs").prepend(gifDiv);
}