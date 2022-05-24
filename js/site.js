// hide mood buttons using jquery at run
$('#hidden').hide();
//hidden.style.visibility='hidden';
//hidden.style.display='none';

// hide song buttons using jquery at run
$('#mood-1-songs').hide();
$('#mood-2-songs').hide();
$('#mood-3-songs').hide();
$('#mood-4-songs').hide();
$('#mood-5-songs').hide();

// function to update htlm visability to display all mood buttons
function displayMoods() {
  $("#hidden").show();
}
// on main-btn button click, call displayMoods()
$("#main-btn").click(displayMoods);

// function to update htlm visability of song list assigned to a mood
function displaySong1() {
  $("#mood-1-songs").show();
   alert('Anxiety button was clicked')
}

// on mood1 (anxiety) button click, call displayMoods()
//$("#mood1").click(displaySong1);

// how to get the id of the specific button clicked and hold it in variable
var idClicked;
$("button").click(function(e){
    idClicked = e.target.id;
});


function displaySongs() {
   alert(idClicked);
   if(idClicked==='mood1'){
      $("#mood-1-songs").show();
   }else if (idClicked==='mood2') {
      $("#mood-2-songs").show();
   }else if (idClicked==='mood3') {
      $("#mood-3-songs").show();
   }else if (idClicked==='mood4') {
      $("#mood-4-songs").show();
   }else if (idClicked==='mood5') {
      $("#mood-5-songs").show();
   }
   // consider a refactor: call proper song list based on mood idClicked
      // pull number out of string into a var
      // concat number to '#mood-' + number +'-songs'
      // display songs
}

// on any mood button click, call displaySongs()
$("#mood1").click(displaySongs);
$("#mood2").click(displaySongs);
$("#mood3").click(displaySongs);
$("#mood4").click(displaySongs);
$("#mood5").click(displaySongs);

//Songtable for facts once a song choice is made: Anxiety
var songTable1 = [
	{
    //break up the song title and artist name
  	songTitle: "Breathin " ,
		author: " Song by Ariana Grande",
    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Ariana Grande</b> is perhaps the quintessential pop "+
    " star of the last half of the 2010s, capturing the era's spirit and style.</li><br> " +
    " <li>Emerged in 2013 with the hit single <b>\"The Way\"</b>. Underscored her debt to 90s and " +
    " R&B.</li><br> <li>Later incorporating hip-hop and EDM. Grande began singing and acting at " +
    " an early age, appearing in local theater productions.</li><br> " +
    " <li>Her four-octave vocal range has received public acclaim, and her personal " +
    " life has been the subject of widespread media attention.</li></ol> "),

    title03: "<u>Song Facts</u>:",
    //Bold ANXIETY
    description02: ("<ol><li>Ariana Grande released her highly-anticipated album <b>Sweetener</b> "+
    " on Friday, August 17 and while there are several songs on the project that "+
    " have struck a chord with fans, listeners couldn't help but to wonder if the "+
    " lyrics to Grande's <b>\"Breathin\"</b> are about the singer's struggle with anxiety.</li><br> "+
    " <li><i><b>\"My anxiety has anxiety, I've always had anxiety. I've never really spoken about it because I thought everyone had it, but when I got home from the tour it was the most severe I think it's ever been.\"</b></i> - Ariana Grande.</li><br> "+
    " <li>Breathin is about being reminded that when life is just taking over and you "+
    " can't see a way to sense your core self, you need to stop and just breathe.</li><br> "+
    " <li>The picture Grande paints with her lyrics, with everyday tasks seemingly taking "+
    " more energy and the feeling that the room is spinning, is one every person "+
    " who has ever suffered from anxiety will recognize.</li><br> <li>Leading into the pre-chorus, "+
    " Grande shares some of the feelings she endures in those moments.</li></ol> "),

    title04: "<u>Mental Facts</u>:",
    description03: ("<ol><li>For many years people kept their stories to themselves in fear "+
    " that they would be ridiculed.</li><br> <li>For listeners really paying attention to the "+
    " song,<b> \"Breathin\" </b> is about that feeling a person gets when they are so anxious "+
    " that they can not get a full breath in.</li><br> <li>It is something most, if not all anxiety "+
    " sufferers have dealt with.</li><br> <li>It can be absolutely horrifying, especially if "+
    " the person dealing with it has no idea why it is happening.</li><br> <li>This song will "+
    " put listeners within themselves to not only understand their anxieties but "+
    " also relate.</li></ol> "),

    image: "breathin.png"
  },
	{
  	songTitle: "Help ",
		author: "Song by The Beatles",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li> <b>The Beatles</b> were an English rock band, formed in Liverpool "+
		" in 1960, that comprised <b>John Lennon</b>, <b>Paul McCartney</b>, <b>George Harrison</b>,and <b>Ringo Starr</b>. </li><br> "+
		" <li>They are regarded as the most influential band of all time and were integral "+
		" to the development of 1960s counterculture and popular music's recognition "+
		" as an art form.</li> <br><li><dl><b>Active From:</b><br> <dd>- 1960<br></dl></dd></li> <dl><li><b>Genres:</b><br><dd>- Rock, Pop, Beat, and Psychedelia </dd></dl></li><br>"+
		" <li><b>First Hit:</dt></b><br> <dd>- Love Me Do</dd> </li></ol>"),

		title03: "<u>Song Facts</u>:",
    description02: ("<ol><li> Released July 19 1965</li><br> <li>Served as the title song for " +
		" the 1965 film and its soundtrack album. </li><br> <li>Lennon wrote the lyrics "+
		" of the song to express his stress after the Beatles' quick rise to success.</li><br>"+
		" <li>Lenon expressed that the song was his cry for help as he dealt with the anxiety of fame. </li><br>"+
		" <li>The song dealt as the first crack in the protective shell Lennon had built "+
		" around his emotions. </li></ol>"),

		title04: "<u>Mental Facts</u>:",
		description03: ("<ol><li>The <b>song Help</b> is really the basis of the <b>movie Help</b> itself. </li><br>"+
		" <li>The movie slyly refers to drug use and how anxiety really can lead to "+
		" darker places if ignored.</li><br> <li>The song will place a listener in a "+
		" vulnerable place.</li><br> <li>As it talks about all anxieties that come with "+
		" fame and also hiding your true feelings. </li></ol>"),

    image: "song2.jpg"
  },
	{
		songTitle: "Overkill " ,
		author: " Song by Colin Hay",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li>Colin James Hay is a Scottish-born Australian-American "+
		" musician, singer, songwriter, and actor.</li><br><li>He came to prominence "+
		" as the lead vocalist of the band Men at Work and later as a solo artist.</li><br>"+
		" <li>Hay's music has been used frequently by actor and director Zach Braff "+
		" in his work, which helped a career rebirth in the mid-2000s.</li><br><li> "+
		" Hay has also been a member of Ringo Starr's Ringo Starr & His All-Starr Band.</li></ol>"),

		title03: "<u>Song Facts</u>:",
		description02: ("<ol><li>This was the first single from Men at Work's second "+
		" album, Cargo.</li><br><li>The band quickly went from a local Australian group "+
		" to a worldwide success.</li><br><li>OverKill was a song about what was happening "+
		" at the time, the experience we were going through of stepping into the unknown.</li><br><li>"+
		" It's about having a fear about the unknown, but also knowing that what was going "+
		" to happen was inevitable.</li><br><li> Leaving behind where you are and stepping "+
		" into something which is out of your control to some degree.</li></ol>"),

		title04: "<u>Mental Facts</u>:",
		description03: ("<ol><li> This song could relate a listener to a relationship "+
		" with a person or a relationship with a place.</li><br><li> It's about placing "+
		" a listener into a state about leaving somewhere and leaving your comfort zone.</li><br><li>"+
		" It reminds a listener that we as humans spend a lot of years trying to get "+
		" something - fame or recognition or getting to a certain point, and then when "+
		" you actually achieve it, there's always a certain amount of fear that comes "+
		" with that, a sense of loss of control, because all of the sudden you're not "+
		" in control of a situation any more, there's other people involved, it gets bigger "+
		" and bigger with much more stress.</li></ol>"),

    image: "song3.jpg"
  },
  {
		songTitle: "Crawling " ,
		author: " Song by Linkin Park",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li>Linkin Park is an American rock band from Agoura Hills, California.</li><br><li>"+
		" The band's current lineup comprises vocalist/rhythm guitarist/keyboardist <b>Mike Shinoda</b>, "+
		" lead guitarist <b>Brad Delson</b>, bassist <b>Dave Farrell</b>, DJ/turntablist <b>Joe Hahn</b> "+
		" and drummer <b>Rob Bourdon</b>, all of whom are founding members.</li><br><li>Linkin Park "+
		" is among the best-selling bands of the 21st century and the world's best-selling "+
		" music artists, having sold over 100 million records worldwide.</li></ol>"),

    title03: "<u>Song Facts</u>:",
		description02: ("<ol><li> This song manifests that nasty feeling that something "+
    " is crawling under your skin.</li><br><li>Much of the lyric delivered by <b>Chester "+
    " Bennington</b> deals with the side effects of taking methamphetamines - a drug "+
    " he used throughout his teens.</li><br><li>The song is about taking responsibility "+
    " for your actions.</li><br><li><b>\'Crawling\'</b> is about feeling like I had no control "+
    " over myself in terms of drugs and alcohol.</li></ol>"),

    title04: "<u>Mental Facts</u>:",
		description03: ("<ol><li> The anxiety, hallucinations and a feeling of things "+
    " crawling under the skin arise.</li><br><li>The song applies to anyone feeling "+
    " uncomfortable and helpless.</li></ol>"),

    image: "song4.jpg"
  }

]


$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable1[songNum];
  console.log("Song data: ", songData);


  songHTML = `
    <img class="image" src='img/${songData.image}'>
  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h4 class=title02>${songData.title02}</h4>
    <div class="desc">${songData.description}</div>

    <h4 class=title03>${songData.title03}</h4>
    <div class="desc">${songData.description02}</div>

    <h4 class=title04>${songData.title04}</h4>
    <div class="desc">${songData.description03}</div>

    
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EFm15MFG2FKNZ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

</body>
</html>


    `
	$("#show-song1").html(songHTML);

});


//Bipolar SongTable:

var songTable2 = [
	{
    //break up the song title and artist name
  	songTitle: " " ,
		author: " ",
    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> "+
    "  " +
    "  " +
    "  " +
    "  " +
    "  " +
    "  "),

    title03: "<u>Song Facts</u>:",
    //Bold Bipolar
    description02: ("<ol><li> "+
    "  "+
    "  "+
    "  "+
    "  "+
    "  "),

    title04: "<u>Mental Facts</u>:",
    description03: ("<ol><li> "+
    "  "+
    "  "+
    "  "+
    " </li></ol> "),

    image: "song1.jpg"
  },
	{
  	songTitle: " ",
		author: "",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li> "+
		" "+
		"  </li></ol>"),

		title03: "<u>Song Facts</u>:",
    description02: ("<ol><li>  " +
		" "+
		" "+
		" "+
		"  </li></ol>"),

		title04: "<u>Mental Facts</u>:",
		description03: ("<ol><li> "+
		" "+
		" </li></ol>"),

    image: "song2.jpg"
  },
	{
		songTitle: " " ,
		author: " Song by ",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li> "+
		"  "+
		" "+
		" </li></ol>"),

		title03: "<u>Song Facts</u>:",
		description02: ("<ol><li> "+

		" </li></ol>"),

		title04: "<u>Mental Facts</u>:",
		description03: ("<ol><li>  "+
		" "+
		" </li></ol>"),

    image: "song3.jpg"
  },
  {
		songTitle: " " ,
		author: " Song by ",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li> "+
		" </li></ol>"),
    image: "song4.jpg"
  }

]


//Bipolar SongTable function

$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable2[songNum];
  console.log("Song data: ", songData);


  songHTML = `

  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h3 class=title02>${songData.title02}</h3>
    <div class="desc">${songData.description}</div>

    <h3 class=title03>${songData.title03}</h3>
    <div class="desc">${songData.description02}</div>

    <h3 class=title04>${songData.title04}</h3>
    <div class="desc">${songData.description03}</div>

    <img class="image" src='img/${songData.image}'>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1EFm15MFG2FKNZ?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

</body>
</html>


    `
	$("#show-song2").html(songHTML);

});
