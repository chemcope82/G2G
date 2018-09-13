//vars for API Calls
// //Skill Level
// var skillLevel = getSkill();
//Hero Name
var heroName = "";

//Stats
var primRole = "";
var secRole = "";
var tactRole = "";




//functions to collect data
// function getSkill(){
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
// }



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