// hide mood buttons using jquery
$('#hidden').hide();
//hidden.style.visibility='hidden';
//hidden.style.display='none';

// updates htlm visability for songs being selected
function displayMoods() {
  $("#hidden").show();
   alert('a click occured');
}

// on main-btn click, call displayMoods()
$("#main-btn").click(displayMoods);
