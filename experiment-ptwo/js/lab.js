// hide mood buttons using jquery
$('#hidden').hide();
//hidden.style.visibility='hidden';
//hidden.style.display='none';

// updates htlm visability for songs being selected
function displayMood() {
  $("#hidden").show();

}

// on main-btn click, call displayMoods()
$("#main-btn").click(displayMood);


function displaySong() {
  $("#hidden").show();
}
$("#mood1").click(displaySong);
