
// updates htlm visability for songs being selected
function displayMoods() {

  $(".mood").show();
}

$("#main-btn").click(displayMoods);


var songTable = [
	{
  	title: "Song 1",
    description: "Here is information about song 1.",
    image: "song1.jpg"
  },
	{
  	title: "Song 2",
    description: "Here is information about song 2.",
    image: "song2.jpg"
  },
	{
  	title: "Song 3",
    description: "Here is information about song 3.",
    image: "song3.jpg"
  },
  {
  	title: "Song 4",
    description: "Here is information about song 3.",
    image: "song3.jpg"
  }
]

$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable[songNum];
  console.log("Song data: ", songData);
  // note we are using a tricky kind of
  // string substitution in the next
  // few lines using backticks and ${}
  songHTML = `
  	<h2 class=title>${songData.title}</h2>
    <div class="desc">${songData.description}</div>
    <img class="image" src='img/${songData.image}'>
    `
	$("#show-song").html(songHTML);
});






//Each mood has five songs connected to it
//EX: Mood 1 = 5 songs ==> Each song has one fact bar
