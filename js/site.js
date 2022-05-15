
// updates htlm visability for songs being selected
function displaySongs(moodNum) {
  If (moodNum == 1)
  {
     //elements you want to show as visible
   document.getElementById("Popup").style.display="visible";

  //don't forget to set all the other elements to hidden
  document.getElementById("song1").style.display="hidden";
  document.getElementById("song2").style.display="hidden";
  document.getElementById("song3").style.display="hidden";
  document.getElementById("song4").style.display="hidden";
  document.getElementById("song5").style.display="hidden";
  }
}
