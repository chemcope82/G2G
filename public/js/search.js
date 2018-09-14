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
  // $("#criteria").empty();
  
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
  $("#userData").empty();
  // displayCriteria();
     
  });

$("#updateUser").click(function(){
  event.preventDefault();
  console.log(rankVal);
  userName = $("#userNameInput").val();
  // displayCriteria();
  var newUser = {
    user_name: userName,
    team_name: "",
    skill_level: rankVal,
    primary_role: primRole,
    secondary_role: secRole,
    tactical_role: tactRole,
    top_hero_name: "",
    secondary_hero_name: "",
  };
  console.log(newUser);

    $.ajax("/api/users", {
        type: "POST",
        data: newUser
    }).then(function() {
        // location.reload();
    });
});
  // $.post("/api/users/", user, function(){
  // location.reload();
  // };
// });



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
  messageH2.html("No Information Available...");
  $("#userData").append(messageH2);
  $("#userData").append("<button id='createUser'>Create User</button>");
}

// This function displays a message when there are no users
function displayUser(data) {
  $("#userData").empty();
  var displayUser = $("<div>");
  
  // for loop to find the right user data
  for(var i = 0; i < data.length; i++){
    if(data[i].user_name === $("#userNameInput").val()){
    displayUser.attr("id", "userInfo");
    displayUser.html(`
    <div class="">
        <p class="userSpecs"><b>User Name: </b></p>
        <p class="userSpecs"><span id="displayUser">${data[i].user_name}</span></p>
        <br>
        <p class="userSpecs"><b>Skill Level: </b></p>
        <p class="userSpecs"><span id="skillLevel">${data[i].skill_level}</span></p>
        <br>
        <p class="userSpecs"><b>Primary Role: </b></p>
        <p class="userSpecs"><span id="primRole">${data[i].primary_role}</span></p>
        <br>
        <p class="userSpecs"><b>Secondary Role: </b></p>
        <p class="userSpecs"><span id="secRole">${data[i].secondary_role}</span></p>
        <br>
        <p class="userSpecs"><b>Heroes: </b></p>
        <p class="userSpecs"><span id="hero1">${data[i].top_hero_name}</span></p>
        <p class="userSpecs"><span id="hero2">${data[i].secondary_hero_name}</span></p>
        <br>
        <p class="userSpecs"><b>Tactical Role: </b></p>
        <p class="userSpecs"><span id="tactRole">${data[i].tactical_role}</span></p>
        <br>
        <p class="userSpecs"><b>Team Name: </b></p>
        <p class="userSpecs"><span id="teamName">${data[i].team_name}</span></p>
        <br>
    </div>
    `);
  }

  }
  $("#userData").append(displayUser);
}


$("#findTeam").click(function(){
  event.preventDefault();

  $.get("/api/teams", function(data) {
    var teams = data;
    if(!teams || !teams.length){
      displayEmpty();
    }
    else{
      console.log("team found");
      displayTeams(teams);
    }
  });

});


function callModal(){
  var modals = $("<div>");
  modals.html(`
  <div class="modal" tabindex="-1" role="dialog">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
  <h5 class="modal-title">No Room In This Team</h5>
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>Your Roles are not available for this team.</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
  `);
  $("#teamInfo").append(modals);
}


function displayTeams(data){
  var displayTeam = $("<div>");
  displayTeam.attr("id", "teamInfo");
  for(var i = 0; i < data.length; i++){
    displayTeam.append(`
    <div class="row" id="teamdisplay">
      <div class="col-2">
        <p class="teamSpecs"><b>Team Name: </b></p>
        <p class="teamSpecs"><span id="displayTeam">${data[i].team_name}</span></p>
        </div>
        <div class="col-2">
        <p class="teamSpecs"><b>Top Lane: </b></p>
        <p class="teamSpecs"><span id="top">${data[i].top}</span></p>
        </div>
        <div class="col-2">
        <p class="teamSpecs"><b>Jungler: </b></p>
        <p class="teamSpecs"><span id="jungler">${data[i].jungler}</span></p>
        </div>
        <div class="col-2">
        <p class="teamSpecs"><b>Mid Lane: </b></p>
        <p class="teamSpecs"><span id="mid">${data[i].mid}</span></p>
        </div>
        <div class="col-2">
        <p class="teamSpecs"><b>ADC: </b></p>
        <p class="teamSpecs"><span id="adc">${data[i].adc}</span></p>
        </div>
        <div class="col-2">
        <p class="teamSpecs"><b>Support: </b></p>
        <p class="teamSpecs"><span id="support">${data[i].support}</span></p>
        </div>
        <div class="col-2">
        <button class="joinTeamBtn" id='joinTeam${i}'>Join Team</button>
        <br><hr><br>
    </div>
    
    `);
  };
  $("#teamData").append(displayTeam);
}


$(".joinTeamBtn").click(function(){
  event.preventDefault();
  console.log("joining team");
  var teamID = $(this).attr("id").substring(8);
  $.get("/api/teams", function(teamdata){
    var teams = teamdata;
    $.get("/api/users", function(userdata){
      var user = userdata;
    
      //Check if open slot is userName primRole or secRole
      if(teams[teamID].role1 === "" && (user.primary_role === "Top Lane" || user.secondary_role === "Top Lane")){
        //Add to team
        teams[teamID].top = user.user_name;
      }else if(teams[teamID].role2 === "" && (user.primary_role === "Jungler" || user.secondary_role === "Jungler")){
        //Add to team
        teams[teamID].top = user.user_name;
      }else if(teams[teamID].role3 === "" && (user.primary_role === "Mid Lane" || user.secondary_role === "Mid Lane")){
        //Add to team
        teams[teamID].top = user.user_name;
      }else if(teams[teamID].role4 === "" && (user.primary_role === "ADC" || user.secondary_role === "ADC")){
        //Add to team
        teams[teamID].top = user.user_name;
      }else if(teams[teamID].role5 === "" && (user.primary_role === "Support" || user.secondary_role === "Support")){
        //Add to team
        teams[teamID].top = user.user_name;
      }else{
      //Say slot is not available
      callModal();
      }
  });
});
});