
// updates htlm visability for songs being selected
function displayMoods() {

  $(".mood").show();
}

$("#main-btn").click(displayMoods);





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
