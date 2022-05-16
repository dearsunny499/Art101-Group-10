
// updates htlm visability for songs being selected
function displayMoods() {
  If (moodNum == 0);
  {

  //elements you want to show as visible
  document.getElementById("mood1").style.visibility ="visible";

  //don't forget to set all the other elements to hidden
  document.getElementById("mood2").style.visibility ="visible";
  document.getElementById("mood3").style.visibility ="visible";
  document.getElementById("mood4").style.visibility ="visible";
  document.getElementById("mood5").style.visibility ="visible";

  }
}

//Return Song list 1, 2, 3, 4, or 5 depending on the mood selected.
function displaySongs(mod) {

  mod = displayMoods();
  if (mod == mood1)
  return "song1"
}
else if (mod == mood2) {
  return "song2"
}
else if (mod == mood3) {
  return "song3"
}
else if (mod == mood4) {
  return "song4"
}
else if (mod == mood5) {
  return "song5"
}


var myButton = document.getElementById("btn");
myButton.addEventListener("click", function()) {
  var mood = document.getElementById("input").value;
  var
}
//Each mood has five songs connected to it
//EX: Mood 1 = 5 songs ==> Each song has one fact bar

//Would I call .innerHTML to call upon my displayMoods ??
//EX: <p id="demo"></p>
// <script>
// const myObject = {
//   firstName:"John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// document.getElementById("demo").innerHTML = myObject.fullName();
// </script>
