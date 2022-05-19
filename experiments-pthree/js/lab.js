//We need each song button to display the facts.
//Facts include Artist Facts, Song Facts, and Mental facts
//Images are going to be spotify realted
//Connect the spotify code with Yanyao with this



//So far this code displays the facts for the songs pressed

var songTable = [
	{
    //break up the song title and artist name
  	songTitle: "Breathin" ,
		author: "Ariana Grande",
    title02: "Artist Facts",
    //need to make these bullet point notes
    description: ("<b>Ariana Grande</b> is perhaps the quintessential pop "+
    " star of the last half of the 2010s, capturing the era's spirit and style. " +
    " Emerged in 2013 with the hit single \"The Way\". Underscored her debt to 90s and " +
    " R&B. Later incorporating hip-hop and EDM. Grande began singing and acting at " +
    " an early age, appearing in local theater productions. " +
    " Her four-octave vocal range has received public acclaim, and her personal " +
    " life has been the subject of widespread media attention. "),
    title03: "Song Facts",
    //Bold ANXIETY
    description02: ("Ariana Grande released her highly-anticipated album Sweetener "+
    " on Friday, August 17 and while there are several songs on the project that "+
    " have struck a chord with fans, listeners couldn't help but to wonder if the "+
    " lyrics to Grande's \"Breathin\" are about the singer's struggle with anxiety. "+
    " \"My anxiety has anxiety, I've always had anxiety. I've never really spoken about it because I thought everyone had it, but when I got home from the tour it was the most severe I think it's ever been.\" - Ariana Grande. "+
    " Breathin is about being reminded that when life is just taking over and you "+
    " can't see a way to sense your core self, you need to stop and just breathe. "+
    " The picture Grande paints with her lyrics, with everyday tasks seemingly taking "+
    " more energy and the feeling that the room is spinning, is one every person "+
    " who has ever suffered from anxiety will recognize. Leading into the pre-chorus, "+
    " Grande shares some of the feelings she endures in those moments. "),

    title04: "Mental Facts",
    description03: ("For many years people kept their stories to themselves in fear "+
    " that they would be ridiculed. For listeners really paying attention to the "+
    " song, \"breathin\" is about that feeling a person gets when they are so anxious "+
    " that they can not get a full breath in. It is something most, if not all anxiety "+
    " sufferers have dealt with. It can be absolutely horrifying, especially if "+
    " the person dealing with it has no idea why it is happening. This song will "+
    " put listeners within themselves to not only understand their anxieties but "+
    " also relate. "),

    image: "breathin.png"
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
    description: "Here is information about song 4.",
    image: "song4.jpg"
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
  	<h2 class=title>${songData.songTitle}</h2>
		<h2 class=title>${songData.author}</h2>

    <h2 class=title02>${songData.title02}</h2>
    <div class="desc">${songData.description}</div>

    <h2 class=title03>${songData.title03}</h2>
    <div class="desc">${songData.description02}</div>

    <h2 class=title04>${songData.title04}</h2>
    <div class="desc">${songData.description03}</div>
    <img class="image" src='img/${songData.image}'>
    `
	$("#show-song").html(songHTML);
});
