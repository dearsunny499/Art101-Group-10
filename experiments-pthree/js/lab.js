//We need each song button to display the facts.
//Facts include Artist Facts, Song Facts, and Mental facts
//Images are going to be spotify realted
//Connect the spotify code with Yanyao with this



//So far this code displays the facts for the songs pressed

var songTable = [
	{
    //break up the song title and artist name
  	songTitle: "Breathin " ,
		author: " Song by Ariana Grande",
    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Ariana Grande</b> is perhaps the quintessential pop "+
    " star of the last half of the 2010s, capturing the era's spirit and style.</li><br> " +
    " <li>Emerged in 2013 with the hit single \"The Way\". Underscored her debt to 90s and " +
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

    image: "song1.jpg"
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
		description02: ("<ol><li> </li></ol>"),
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
	<img class="image" src='img/${songData.image}'>
  	<h2 class=title>${songData.songTitle}</h2>
		<h2 class=title>${songData.author}</h2>

    <h2 class=title02>${songData.title02}</h2>
    <div class="desc">${songData.description}</div>

    <h2 class=title03>${songData.title03}</h2>
    <div class="desc">${songData.description02}</div>

    <h2 class=title04>${songData.title04}</h2>
    <div class="desc">${songData.description03}</div>

</body>
</html>


    `
	$("#show-song").html(songHTML);
});
