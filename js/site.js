
//hide mood buttons using jquery
$('#hidden').hide();



// updates htlm visability for songs being selected
function displayMoods() {
  $("#hidden").show();
  // hide previous content
  $("#first-layer").hide();
}

//on main-btn click, all displayMoods()
$("#main-btn").click(displayMoods);
