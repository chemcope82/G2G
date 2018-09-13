//vars for API Calls
//Skill Level
var skillLevel = getSkill();
//Hero Name
var heroName = "";

//Stats
var primRole = "";
var secRole = "";
var tactRole = "";




//functions to collect data
function getSkill(){
  // Slider JQuery Version
  var slider = $("#myRange");
  var output = $("#demo");
  output.html(slider.val()); // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.on("input", function() {
    output.html($(this).val());
    return $(this).val();
  });
}



$(".prim-role").click(function() {
  $(".prim-role").not(this).prop("checked", false);
  primRole = $(this).val();
  //call to DB for Primary Role

});

$(".sec-role").click(function() {
  $(".sec-role").not(this).prop("checked", false);
  secRole = $(this).val();
  //call to DB for Secondary Role
});

$(".tact-role").click(function() {
  $(".tact-role").not(this).prop("checked", false);
  tactRole = $(this).val();
  //call to DB for Tactical Role
});