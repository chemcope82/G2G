//vars for API Calls
// Slider JQuery Version
var slider = $("#myRange");
var rank = $("#rankIcon");
var rankVal = 40;
// output.html(slider.val()); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.on("input", function () {
  rankVal = $(this).val();
 
  if(rankVal <=1 && rankVal <=10) {
    $(".tier").attr("src", "../images/TierIcons/BronzeTier.png");
    //Push to DB
    
  }else if(rankVal <=11 && rankVal <=20){
    $(".tier").attr("src", "../images/TierIcons/SilverTier.png");
    //Push to DB
    
  }else if(rankVal <=21 && rankVal <=30){
    $(".tier").attr("src", "../images/TierIcons/GoldTier.png");
    //Push to DB
    
  }else if(rankVal <=31 && rankVal <=40){
    $(".tier").attr("src", "../images/TierIcons/PlatinumTier.png");
    //Push to DB
    
  }else if(rankVal <=41 && rankVal <=50){
    $(".tier").attr("src", "../images/TierIcons/DiamondTier.png");
    //Push to DB
    
  }else if(rankVal <=51 && rankVal <=60){
    $(".tier").attr("src", "../images/TierIcons/MasterTier.png");
    //Push to DB
    
  }else if(rankVal <=61 && rankVal <=70){
    $(".tier").attr("src", "../images/TierIcons/ChallengerTier.png");
    //Push to DB
    
  }
});

//Skill Level
var skillLevel = "";
//Hero Name
var heroName = "";

var userName = "";

//Stats
var primRole = "";
var secRole = "";
var tactRole = "";

$("#submitUser").click(function() {
  event.preventDefault();
  $.get("/api/users", function(data) {
    users = data;
    if(!users || !users.length){
      // displayEmpty();
    }
    else{
      console.log("user found");
      displayUser(users);
    }
  });
});

$("#createUser").click(function(){
  event.preventDefault();
  userName = $("#userNameInput").val();
  displayCriteria();
     
  });

$("#updateUser").click(function(){
  event.preventDefault();
  userName = $("#userNameInput").val();
  displayCriteria();
  var newUser = {
    user_name: userName,
    team_name: "",
    skill_level: skillLevel,
    primary_role: primRole,
    secondary_role: secRole,
    tactical_role: tactRole,
    top_hero_name: "",
    secondary_hero_name: "",
  };
})



$(".prim-role").click(function () {
  $(".prim-role").not(this).prop("checked", false);
  primRole = $(this).val();
  //call to DB for Primary Role

});

$(".sec-role").click(function () {
  $(".sec-role").not(this).prop("checked", false);
  secRole = $(this).val();
  //call to DB for Secondary Role
});

$(".tact-role").click(function () {
  $(".tact-role").not(this).prop("checked", false);
  tactRole = $(this).val();
  //call to DB for Tactical Role
});

// This function displays a message when there are no users
function displayEmpty() {
  $("#userData").empty();
  var messageH2 = $("<h2>");
  messageH2.css({ "text-align": "center", "margin-top": "50px" });
  messageH2.html("No User Found. Please click the create button.");
  $("#userData").append(messageH2);
  $("#userData").append("<button id='createUser'>Create User</button>");
}

// This function displays a message when there are no users
function displayUser(data) {
  $("#userData").empty();
  var displayUser = $("<div>");
  console.log(data);
  
  // for loop to find the right user data
  for(var i = 0; i < data.length; i++){
    if(data[i].user_name === $("#userNameInput").val()){
    displayUser.attr("id", "userInfo");
    displayUser.html(`
    <div class="col-4">
        <p>User Name</p>
        <h1><span id="displayUser">${data[i].user_name}</span></h1>
    </div>
    <div class="col-4">
        <p>Primary Role:</p>
        <span id="primRole">${data[i].primary_role}</span>
    </div>
    <div class="col-4">
        <p>Secondary Role:</p>
        <span id="secRole">${data[i].secondary_role}</span>
    </div>
    <div class="col-4">
        <p>Heroes: </p>
        <span id="hero1">${data[i].top_hero_name}</span>
        <br><br>
        <span id="hero2">${data[i].secondary_hero_name}</span>
    </div>
    <div class="col-4">
        <p>Tactical Role:</p>
        <span id="tactRole">${data[i].tactical_role}</span>
    </div>
    <div class="col-4">
        <p>Team Name:</p>
        <span id="teamName">${data[i].team_name}</span>
    </div>
    `);
  }

  }
  $("#userData").append(displayUser);
}

function displayCriteria(){
  var modUser = $("<div>");
  modUser.html(
    `
    <!-- Skill Level Selector -->
        <div class="slidecontainer">
            <input type="range" min="1" max="70" value="35" class="slider" id="myRange">
            <div class="slidecontainer">
                <div id="rank">
                    <span id="rankIcon"><img src='../images/TierIcons/PlatinumTier.png' class='tier'></span>
                </div>
                
            </div>
        </div>
        <hr>
        <div class="primaryRole">
            <label>Primary Role</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                    <input type="checkbox" class="prim-role" aria-label="Primary Role" value="Top Lane">
                    </div>
                </div>
                <label class="form-control" aria-label="Primary Role" id="TopLane">Top Lane</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="prim-role" aria-label="Primary Role" value="Jungler">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Primary Role" id="Jungler">Jungler</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="prim-role" aria-label="Primary Role" value="Mid Lane">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Primary Role" id="MidLane">Mid Lane</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="prim-role" aria-label="Primary Role" value="ADC">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Primary Role" id="ADC">ADC</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="prim-role" aria-label="Primary Role" value="Support">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Primary Role" id="Support">Support</label>
                </div>
        </div>
        <hr>
        <div class="secondaryRole">
            <label>Secondary Role</label>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                    <input type="checkbox" class="sec-role" aria-label="Secondary Role" value="Top Lane">
                    </div>
                </div>
                <label class="form-control" aria-label="Secondary Role" name="Top Lane">Top Lane</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="sec-role" aria-label="Secondary Role" value="Jungler">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Secondary Role" name="Jungler">Jungler</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="sec-role" aria-label="Secondary Role" value="Mid Lane">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Secondary Role" name="Mid Lane">Mid Lane</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="sec-role" aria-label="Secondary Role" value="ADC">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Secondary Role" name="ADC">ADC</label>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="sec-role" aria-label="Secondary Role" value="Support">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Secondary Role" name="Support">Support</label>
                </div>
        </div> 
        <div class="Tactical Role">
                <label>Tactical Role</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                        <input type="checkbox" class="tact-role" aria-label="Tactical Role" value="Drafter">
                        </div>
                    </div>
                    <label class="form-control" aria-label="Tactical Role" name="Drafter">Drafter</label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                            <input type="checkbox" class="tact-role" aria-label="Tactical Role" value="Shot Caller">
                            </div>
                        </div>
                        <label class="form-control" aria-label="Tactical Role" name="Shot Caller">Shot Caller</label>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                            <input type="checkbox" class="tact-role" aria-label="Tactical Role" value="Captain">
                            </div>
                        </div>
                        <label class="form-control" aria-label="Tactical Role" name="Captain">Captain/IGL</label>
                    </div>
            </div> <!-- End of Roles -->
    `);
    $("#criteria").append(modUser);
}