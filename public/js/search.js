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

function getPrimRole(){
  if($("#TopLane").attr("checked") || $("#MidLane").attr("checked") || $("#Jungler").attr("checked") || $("#ADC").attr("checked") || $("#Support").attr("checked")){
    
  }
}