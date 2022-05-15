
// updates htlm visability for songs being selected
function displayMoods(moodNum) {
  If (moodNum == 1)
  {
     //elements you want to show as visible
   document.getElementById("song1").style.display="visible";

  //don't forget to set all the other elements to hidden
  document.getElementById("song2").style.display="visible";
  document.getElementById("song3").style.display="visible";
  document.getElementById("song4").style.display="visible";
  document.getElementById("song5").style.display="visible";

  }
}
