// hide mood buttons using jquery at run
$('#hidden').hide();


// hide song buttons using jquery at run
$('#mood-1-songs').hide();
$('#mood-2-songs').hide();
$('#mood-3-songs').hide();
$('#mood-4-songs').hide();
$('#mood-5-songs').hide();

// function to update htlm visability to display all mood buttons
function displayMoods() {
  $("#hidden").show();
  $("#first-layer").hide();
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
   //alert(idClicked);
   if(idClicked==='mood1'){
      $("#mood-1-songs").show();
      $("#second-layer").hide();
   }else if (idClicked==='mood2') {
      $("#mood-2-songs").show();
      $("#second-layer").hide();
   }else if (idClicked==='mood3') {
      $("#mood-3-songs").show();
      $("#second-layer").hide();
   }else if (idClicked==='mood4') {
      $("#mood-4-songs").show();
      $("#second-layer").hide();
   }else if (idClicked==='mood5') {
      $("#mood-5-songs").show();
      $("#second-layer").hide();
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
		author: " Song by: Ariana Grande",
    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Ariana Grande</b> is perhaps the quintessential pop "+
    " star of the last half of the 2010s, capturing the era's spirit and style.</li><br> " +
    " <li>Emerged in 2013 with the hit single <b>\"<u>The Way</u>\"</b>. Underscored her debt to 90s and " +
    " R&B.</li><br> <li>Later incorporating hip-hop and EDM. Grande began singing and acting at " +
    " an early age, appearing in local theater productions.</li><br> " +
    " <li>Her four-octave vocal range has received public acclaim, and her personal " +
    " life has been the subject of widespread media attention.</li></ol> "),

    title03: "<u>Song Facts</u>:",
    //Bold ANXIETY
    description02: ("<ol><li><b>Ariana Grande</b> released her highly-anticipated album <u><b>Sweetener</b></u> "+
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

    cover: "breathin.png",

  },
	{
  	songTitle: "Help ",
		author: "Song by: The Beatles",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li> <b>The Beatles</b> were an English rock band, formed in Liverpool "+
		" in 1960, that comprised <b>John Lennon</b>, <b>Paul McCartney</b>, <b>George Harrison</b>,and <b>Ringo Starr</b>. </li><br> "+
		" <li>They are regarded as the most influential band of all time and were integral "+
		" to the development of 1960s counterculture and popular music's recognition "+
		" as an art form.</li> <br><li><dl><b><u>Active From:</u></b><br> <dd><b>- 1960</b><br></dl></dd></li> <dl><li><b><u>Genres:</u></b><br><dd><b>- Rock, Pop, Beat, and Psychedelia </b></dd></dl></li><br>"+
		" <li><b><u>First Hit:</u></dt></b><br> <dd><b>- Love Me Do</dd></b> </li></ol>"),

		title03: "<u>Song Facts</u>:",
    description02: ("<ol><li> Released July 19 1965</li><br> <li>Served as the title song for " +
		" the 1965 film and its soundtrack album. </li><br> <li>Lennon wrote the lyrics "+
		" of the song to express his stress after the Beatles' quick rise to success.</li><br>"+
		" <li>Lenon expressed that the song was his cry for help as he dealt with the anxiety of fame. </li><br>"+
		" <li>The song dealt as the first crack in the protective shell Lennon had built "+
		" around his emotions. </li></ol>"),

		title04: "<u>Mental Facts</u>:",
		description03: ("<ol><li>The <b><i>song</i> <u>Help</u></b> is really the basis of the <b><i>movie</i> <u>Help</u></b> itself. </li><br>"+
		" <li>The movie slyly refers to drug use and how anxiety really can lead to "+
		" darker places if ignored.</li><br> <li>The song will place a listener in a "+
		" vulnerable place.</li><br> <li>As it talks about all anxieties that come with "+
		" fame and also hiding your true feelings. </li></ol>"),

    cover: "help.png",

  },
	{
		songTitle: "Overkill " ,
		author: " Song by: Colin Hay",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li><b>Colin James Hay</b> is a Scottish-born Australian-American "+
		" musician, singer, songwriter, and actor.</li><br><li>He came to prominence "+
		" as the lead vocalist of the band <b>Men at Work</b> and later as a solo artist.</li><br>"+
		" <li>Hay's music has been used frequently by actor and director <b>Zach Braff</b> "+
		" in his work, which helped a career rebirth in the mid-2000s.</li><br><li> "+
		" Hay has also been a member of <b>Ringo Starr's Ringo Starr & His All-Starr Band.</b></li></ol>"),

		title03: "<u>Song Facts</u>:",
		description02: ("<ol><li>This was the first single from <b>Men at Work's</b> second "+
		" album, <b><u>Cargo</u>.</b></li><br><li>The band quickly went from a local Australian group "+
		" to a worldwide success.</li><br><li><b>OverKill</b> was a song about what was happening "+
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

    cover: "overkill.png",

  },
  {
		songTitle: "Crawling " ,
		author: " Song by: Linkin Park",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li><b>Linkin Park</b> is an American rock band from Agoura Hills, California.</li><br><li>"+
		" The band's current lineup comprises <i>vocalist/rhythm guitarist/keyboardist</i> <b>Mike Shinoda</b>, "+
		" <i>lead guitarist</i> <b>Brad Delson</b>, <i>bassist</i> <b>Dave Farrell</b>, <i>DJ/turntablist</i> <b>Joe Hahn</b> "+
		" and <i>drummer</i> <b>Rob Bourdon</b>, all of whom are founding members.</li><br><li><b>Linkin Park</b> "+
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

    cover: "crawling.png",

  }

]

//Anxiety Songtable function
$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable1[songNum];
  console.log("Song data: ", songData);


  songHTML = `
    <img class="cover" src='img/${songData.cover}'>


  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h4 class=title02>${songData.title02}</h4>
    <div class="desc">${songData.description}</div>

    <h4 class=title03>${songData.title03}</h4>
    <div class="desc">${songData.description02}</div>

    <h4 class=title04>${songData.title04}</h4>
    <div class="desc">${songData.description03}</div>

</body>
</html>
    `
	$("#show-song1").html(songHTML);

});


//Bipolar SongTable:

var songTable2 = [
	{
    //break up the song title and artist name
  	songTitle: "Shake It Out" ,
		author: "Song by: Florence + The Machine",
    title02: "<u>Artist Facts</u>: ",

    description: ("<ol><li><b>Florence and the Machine</b> are an English indie rock band "+
    " that formed in London in 2007, consisting of <i>vocalist</i> <b>Florence Welch</b>, "+
    " <i>keyboardist</i> <b>Isabella Summers</b>,<i> guitarist</i> <b>Rob Ackroyd</b>, <i>harpist</i> <b>Tom Monger</b>, "+
    " and a collaboration of other musicians.</li><br><li>The band's music is renowned "+
    " for its dramatic, eccentric production and Welch's powerful vocals.</li><br><li>"+
    " <b>Florence and the Machine's</b> style has been described as <b>\"dark, robust and romantic\"</b></li></ol>"),

    title03: "<u>Song Facts</u>:",
    //Bold Bipolar
    description02: ("<ol><li> The song is within the <b><u>Ceremonials</u></b> album</li><br><li> "+
     " <dl><b><u>Released in:</u></b><br>"+
     " <dd><b>- 2011</b><br></dl></dd></li> "+
     " <li><dl><b><u>Written by:</u></b>"+
     "<dd><b>- Florence Welch and Paul Epworth</b></dd></dl>"+
     "<br><li>Welch stated the song is about, "+
     "<b><i>\"wanting to just shake something out, shake out these regrets, shake out "+
     " these things that haunt you. It was one of those songs that came in<br>about "+
     " half an hour and when you've got a hangover, it is almost like a hangover cure. "+
     " You're like, thank you! I don't want everyone to think that I always write "+
     " songs with a hangover!<br> Cause I don't, I really don't. But with this one I "+
     " have to say there was a bit of one lurking in my mind as I wrote it. It was "+
     " like I was trying to write a hangover cure.\”</i></b> -Welch</li><br><li> "+
     " She then echoes her determination to fight and shake them off in order to get "+
     " a grip on her life and enjoy every moment from henceforth.</li></ol>"),



    title04: "<u>Mental Facts</u>:",
    description03: ("<ol><li> When listening to the song listeners may not first "+
    " realize what this song is about.</li><br><li> Some say it is about just shaking "+
    " off the day and that is why it makes them happy after a long one.</li><br><li>"+
    " Yet there is another side to the song.</li><br><li> There are lyrics that say, "+
    " <b><i>\“with the devil on your back <b>JUST SHAKE IT OFF!</b>\”</b></i> This was taken more "+
    " seriously.</li><br><li>For those who deal with <b>bipolar syndrome</b> one minute "+
    " you may feel like yourself and within the next you can be, as some say, "+
    " <b>\“another version\”</b>. Good or bad.</li><br><li>This song can put "+
    " listeners in a mental state of calm but also realization of the way bipolar "+
    " syndrome can be so chaotic and all you want to do is <b>SHAKE IT OFF!</b></li></ol> "),

    cover: "shakeItOut.png"
  },
	{
  	songTitle: "Secrets ",
		author: "Song By: Mary Lambert",

		title02: "<u>Artist Facts</u>: ",
    description: ("<ol><li>Before rising to fame in 2012, <b>Mary Lambert</b> had juggled "+
    " several food working jobs.</li><br><li><b>Mary Lambert</b> had grown up struggling "+
    " with her sexuality, but she later came out as lesbian in the age of 17.</li><br> "+
    " <li> She is currently an avid supporter of the LGBTQ community, and has worked "+
    " for the <b><u>documentary 1946</u></b> that discusses the mistranslation of the Bible "+
    " and how it was used to promote homophobia and the silencing of LGBTQ voices.</li><br>"+
    " <li>Lambert has been very vocal about her bipolar disorder, showing how even "+
    " celebrities and influencers struggle with mental health issues.</li><br> "+
    "<li>She is very outspoken when it comes to body image, and has detailed her "+
    " struggles with her body and how hurtful body shaming can be in her blog post, "+
    " \<i><b>“I want to talk about Body Positivity, OK?\”</b></i></li></ol>"),


		title03: "<u>Song Facts</u>:",

    description02: ("<ol><li><b> Released in Jul 31, 2014</b>"+
    " The meaning and purpose of the song was about how Lambert \<i><b>“does not care what "+
    " people think about her or her secrets\”</b></i> and \<b><i>“she’s just going to be <b>herself</b>.\”</b></i></li>"+
    " <br><li>Overall, the song discusses her struggles with her sexuality, mental health, and body image.</li></ol>"),


		title04: "<u>Mental Facts</u>:",

		description03: ("<ol><li> The song gives hope to the fans who are struggling "+
    " with their <b>sexuality, body image, and mental health issues such as Bipolar/BPD "+
    " disorder.</b></li><br><li>The song also has several humorous aspects, adding on "+
    " puns and a few jokes to lighten up the mood. </li></ol>"),

    cover: "secrets.png"
  },
	{
		songTitle: "I Don't Feel Like Dancin' " ,
		author: " Song by: Scissor Sisters ",

		title02: "<u>Artist Facts</u>: ",

    description: ("<ol><li>The term \<b>“scissors\”</b> is often used as a related "+
    " lesbian “term,” though none of the band members are lesbian.</li><br>"+
    "<li> However, three of the individuals in the band are gay.</li><br><li> "+
    " <b>Shears</b> has spoken out against high record shop pricing, such as "+
    " <u><b>Transworld Entertainment.</b></u> <br>As a result, <u><b>Transworld</b></u> discontinued "+
    " selling <b>Scissor Sisters merchandise.</b></li><br><li><b>Ana Matronic</b>, the lead "+
    " vocalist and percussionist, claims that she is a \<b>“drag queen stuck in a woman's body\”</b></li></ol>"),


		title03: "<u>Song Facts</u>:",

		description02: ("<ol><li> <b>Released in August 2006 </b>as a single from "+
    " their <b>album <u>Ta-Dah (2006)</u></b></li><br><li>Written by:<b> Jason Sellards, "+
    " Scott Hoffman and Elton John (who played the piano).</b></li><br><li>"+
    " The song also features a rhythm piano that is similar/references to "+
    " \<b>“Decemeber, 1963 (Oh, What a Night)\” by The Four Seasons</b></li></ol>"),

		title04: "<u>Mental Facts</u>:",

		description03: ("<ol><li> A catchy song that’s created to lighten up the mood "+
    " and create happy vibes <b>Babydaddy</b> states that, <br><b><i>\"Our life wasn't that "+
    " song, as much as we wanted it to be\"</b></i> in the <b><u>Daily Telegraph.</b></u></li><br><li>"+
    " The song was created as a response to <u><b>Bee Gees’</b></u> <b><i>“You Should Be Dancing”</b></i></li></ol>"),

    cover: "dancin.png"
  },
  {
    songTitle: "Raging Fire" ,
		author: " Song by: Phillip Phillips ",

		title02: "<u>Artist Facts</u>: ",

    description: ("<ol><li><b>Phillip Phillips</b> is an American singer-songwriter who rose to fame "+
    " after winning the 11th season of <b><u>American Idol</u>.</b></li><br><li>Phillips has an "+
    " ongoing struggle with kidney stones, in which he had seven surgeries for them "+
    " during American Idol	Season 11.</li><br><li>Phillips signed with <b><u>Simon Cowell's "+
    " management company</u></b>, <b><u>19 Entertainment</u></b>, but ultimately "+
    " decided that it wasn’t for him and filed a lawsuit when they wouldn’t let him leave.</li></ol>"),

		title03: "<u>Song Facts</u>:",

		description02: ("<ol><li><b> Phillip Phillips</b> released the lead single, "+
    " <b>“<u>Raging Fire</u>,”</b>off his sophomore album, <b><u>Behind The Light</u></b>, "+
    " on March 3rd, 2014.</li><br><li><b>“Raging Fire”</b> fused a new heavier, "+
    " rockier sound with the warm and anthemic qualities of Phillip’s two previous "+
    " massive hits, <b>“<u>Home</u>”</b> and <b>“<u>Gone Gone Gone.</u>”</b></li><br><li> "+
    " A song composed of two contrasts: string instruments and rocking drums</li></ol>"),

		title04: "<u>Mental Facts</u>:",

		description03: ("<ol><li> Phillips states that the song is <b><i>“about love, "+
    " and about wanting to feel the same way you felt the first time you kissed <br>"+
    " the person you love. It is indeed a beautiful song about love, particularly<br>"+
    " long-lasting love, and about keeping passion alive in your heart in the name<br>"+
    " of all your shared hopes, pains and memories.”</b></i> (from this website <a> http://www.phillphill.com/tag/raging-fire/</a>) "+
    " </li><br><li>Additionally, he believes that passion and hope is always worth fighting for "+
    " and believing in, which rings even more true when you’re in a dark place</li></ol>"),

    cover: "ragingFire.png"
  }

]


//Bipolar SongTable function

$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable2[songNum];
  console.log("Song data: ", songData);


  songHTML = `
    <img class="cover" src='img/${songData.cover}'>

  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h3 class=title02>${songData.title02}</h3>
    <div class="desc">${songData.description}</div>

    <h3 class=title03>${songData.title03}</h3>
    <div class="desc">${songData.description02}</div>

    <h3 class=title04>${songData.title04}</h3>
    <div class="desc">${songData.description03}</div>

</body>
</html>
    `
	$("#show-song2").html(songHTML);

});



//Depression SongTable
var songTable3 = [
	{
    //break up the song title and artist name
  	songTitle: "Adam's Song" ,
		author: " Song by: Blink-182",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> Their initial band name was <b>Blink</b>, but they were "+
    " threatened with a lawsuit by an Irish band with the same name. "+
    " They later changed it to <b>Blink-182</b>.</li><br><li> "+
    " There is a popular theory that <b>182</b> is derived from the amount of times "+
    " the f-word was said in <b>Scarface</b>. </li><br><li>"+
    " After being expelled from high school for drinking at a basketball game, "+
    " <b>DeLonge</b> met <b>Scott Raynor</b> and subsequently <b>Mark Hoppus</b> "+
    " at the new school he was forced to attend.</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> There was a point when <b>Blink-182</b> did not perform "+
    " <b>\"<u>Adam's Song</u>\"</b>in concert.</li><br><li> <b>Adam Goldstein</b>, also "+
    " known as <b>DJ AM</b>, was a musician friend of theirs who later died of an "+
    " overdose<br> in early 2009, and Hoppus says he couldn't bring himself to sing it.</li><br><li>"+
    " <b>Hoppus</b> states that he got inspired by <b><i>\"reading a magazine where some "+
    " teenage kid had killed himself and left a letter for his family.\"</b></i></li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> <b>“The world is a place of infinite possibilities, "+
    " but can possess infinitely little possibilities if you aren’t willing to act.<br> "+
    " Adam had just finished an event which should have made him very happy, but "+
    " due to his inner turmoil, he got very little joy from it.”</b>- <u>Genius</u></li><br><li>"+
    " The lyric <b><i>\“Tomorrow holds such better days\”</b></i> is a message of "+
    " hope for anyone listening that things will get better and to just make it "+
    " one more day.</li><br><li>There is a transition from <b>“we”</b> to <b>“I”</b> "+
    " in the song, which deals with Mark’s loneliness of being on tour.</li></ol> "),

    cover: "adam.png"
  },
	{
  	songTitle: "Hurt",
		author: "Song by: Johnny Cash",

    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> <b>Johnny Cash</b> was also a writer and novelist that "+
    " had published several books, such as <b><u>Man in White</u></b>.</li><br><li>"+
    " His brother <b>Jack</b> had passed away when Cash was twelve, who later became "+
    " more introspective afterwards<br> and began to spend more time alone, "+
    " writing stories and sketches.</li><br><li>Despite his obvious interest in "+
    " music and talent for music during his childhood, Cash wouldn’t get a guitar<br> "+
    " and start seriously writing songs until he joined the Air Force.</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> <b><i>Hurt</i></b> is <b>Johnny Cash’s</b> cover of "+
    " <b><u>Nine Inch Nails' Hurt</u></b></li><br><li>The original song was released "+
    " in 1995, and Cash sang a cover of the song in 2002.</li><br><li>The music "+
    " video for <b>Nine Inch Nails'</b> original version of <b>\"Hurt\"</b> is a "+
    " live performance <br> that was recorded before the show in Omaha, Nebraska.</li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> <b><i>\“I wrote some words and music in my bedroom "+
    " as a way of staying sane, about a bleak and desperate place I was in, totally "+
    " isolated and alone,\”</b></i><b> Reznor </b>told <b><u>Alternative Press</u></b>.</li><br><li>"+
    " Cash was suffering from autonomic neuropathy brought on by diabetes. By the time "+
    " he recorded Hurt, his health was failing.</li><br><li>The song contains references "+
    " to self-harm and heroin addiction.</li><br><li> Some listeners believe the song "+
    " is a suicide letter composed by the protagonist as a result of his sadness, "+
    " while others believe it reflects the tough process of finding a purpose to live <br>"+
    " despite depression and agony and has little to do with The Downward Spiral's plot.</li></ol> "),

    cover: "hurt.png"
  },
	{
    songTitle: "Eyes On Fire" ,
    author: " Song by: Blue Foundation",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> <b>Blue Foundation</b> is a Danish band that is famously "+
    " known for being featured in films and TV shows such as <b><u>Twilight</u></b> and the "+
    " <b><u>Vampire Diaries</u></b>.</li><br><li><b>Tobias Wilner</b> founded the group "+
    " in 2000 recruiting a rotating cast of traditional musicians throughout the band's "+
    " history to inspire creativity.</li><br><li>Specializes in the <b>Dance/Electronic genre</b></li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> <b>Eyes On Fire</b> was released during 2016, "+
    " but first appeared in the <b>Twilight movie on September 24, 2007</b></li><br><li>"+
    " Premiered in the first Twilight movie soundtrack in 2008.</li><br><li>"+
    " Produced by <b>Tobias Wilner</b> & <b>Bo Rande</b></li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> The lyrics <b>\<i>“I'm taking it slow / Feeding my flame / "+
    " Shuffling the cards of your game</i>\”</b> implies how all of your pains "+
    " and sorrows have gone away during substance use.</li><br><li> With more excessive "+
    " use of these substances comes a higher tolerance, and you’re more likely "+
    " to continue to increase the dosage and slowly become addicted, <b><i>“shuffling”</i></b>"+
    " your feelings on the important things in your life.</li><br><li>"+
    " <b><i>\“The eyes are commonly referred to as the window to the soul, and as  "+
    " the song is sung as personified drug, the drug has ‘fire in its eyes.’\”</b></i></li></ol> "),

    cover: "blueFound.png"
  },
  {
    songTitle: "Breaking Down " ,
    author: " Song by: Florence + The Machine",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Florence and the Machine</b> are an English indie rock band "+
    " that formed in London in 2007, consisting of <i>vocalist</i> <b>Florence Welch</b>, "+
    " <i>keyboardist</i> <b>Isabella Summers</b>,<i> guitarist</i> <b>Rob Ackroyd</b>, <i>harpist</i> <b>Tom Monger</b>, "+
    " and a collaboration of other musicians.</li><br><li>The band's music is renowned "+
    " for its dramatic, eccentric production and Welch's powerful vocals.</li><br><li>"+
    " <b>Florence and the Machine's</b> style has been described as <b>\"dark, robust and romantic\"</b></li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li><dl><b><u>Written by:</u></b><br> <dd><b>- James Ford "+
    " </b><br></dd> <dd><b>- Florence welch</b><br></dl></dd></li> <dl><li><b><u> "+
    " Produced by:</u></b><br> <dd><b>-Paul Epworth</b><br></dl></dd></li> "+
    " <dl><li><b><u>Released:</u></b><br> <dd><b>- 2011</b><br></dl></dd></li> "+
    " <dl><li><b><u>Album:</u></b><br> <dd><b>-Ceremonials</b><br></dl></dd></li>"+
    " <dl><li><b><u>Genres:</u></b><br> <dd><b>-Alternative/ Indie and Pop</b><br></dl></dd></li>"+
    " <li>Florence’s depression arrives when she’s about to go to sleep; commonly, "+
    " people rethink their whole day before they sleep, and this serves as a trigger<br> "+
    " for Florence’s depression.</li><br><li> Once again, rather than being described "+
    " as something fearful, it’s personified as a friend that fills the space "+
    " that her love has left in her bed.</li><br><li> Since depression is a familiar "+
    " thing for <b>Florence</b>, it acts as a sort of <b><i>comfort</i></b>.<br><br>"+
    " <b><b>“Breaking Down Again”</b></b></li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> This song evokes both mental fragility and childhood fears."+
    "</li><br><li>As it was inspired by the ending of a relationship for a second time.</li><br><li>"+
    " Makes a listener feel like they are breaking down several times as the song "+
    " writer felt.</li><br><li><b>Florence</b> felt totally mad and brought their "+
    " listeners with them.</li></ol> "),

    cover: "breakingDown.png"
  }

]

//Depression SongTable function

$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable3[songNum];
  console.log("Song data: ", songData);


  songHTML = `
    <img class="cover" src='img/${songData.cover}'>

  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h4 class=title02>${songData.title02}</h4>
    <div class="desc">${songData.description}</div>

    <h4 class=title03>${songData.title03}</h4>
    <div class="desc">${songData.description02}</div>

    <h4 class=title04>${songData.title04}</h4>
    <div class="desc">${songData.description03}</div>

</body>
</html>
    `
	$("#show-song3").html(songHTML);

});



//OCD SongTable
var songTable4 = [
	{
    //break up the song title and artist name
  	songTitle: "Brain Lock" ,
		author: " Song by: Johnny Franck",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Johnny Franck</b> is a singer , songwriter and is the the "+
    " main contributing member of <b>Alternative Indie-Pop</b> band <b><u>Bilmuri</u></b> "+
    " and<br> <b>Progressive Post-Hardcore</b> band <b><u>The March Ahead</u></b> as "+
    " well as the former <i>clean vocalist</i> and <i>rhythm guitarist</i> of "+
    " <b>metalcore/electronicore</b> band <b><u>Attack Attack</u></b>!</li><br><li>"+
    " <b>Attack Attack!</b> was an <b>American metalcore/electronicore</b> band "+
    " from <b>Westerville, Ohio,</b> formed in 2007 originally known as <br><b>Ambiance</b>, "+
    " later changing their name.</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> This song was Produced, Mixed, and Mastered by "+
    " <b>Johnny Franck</b>.</li><br><li>This song was released in 2016.</li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li>Make listeners feel they are on a golden journey. "+
    " </li><br><li>Inspire people to have some conversation with themselves.</li></ol> "),

    cover: "brain.png"
  },
	{
  	songTitle: "Crazy Love",
		author: "Song by: Mindy Gledhill",

    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Mindy Gledhill</b> is an indie award winning singer "+
    " from <b>Eureka, California</b>.</li><br><li>She is also known for her guest "+
    " vocal work for <b>DJ Kaskade</b>. She is very deep in the pop culture scene.</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li>On April 3, 2011 the single <b>\"<u>Crazy Love</u>\"</b>"+
    " reached <b>No. 1</b> on the <b>Korean streaming service <u>Bugs Music.</u></b></li><br><li>"+
    " The song also reached <b>No. 7</b> on the <b>South Korea (<u>GAON</u>)</b> music chart. "+
    " </li><br><li>Seven other tracks also charted on the S. Korean charts.</li><br><li>"+
    " Music videos for <b>\"<u>Anchor</u>\"</b> and <b>\"<u>Whole Wide World</u>\"</b>"+
    " have both amassed more than 1 million views on YouTube.</li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li>This song increases the release of serotonin in the "+
    " brain which seems to be effective in reducing obsessions as well as anxiety "+
    " and depressive symptoms.</li><br><li>The song is influential in making people smile.</li></ol> "),

    cover: "crazyLove.png"
  },
	{
    songTitle: "My OCD" ,
    author: " Song by: Rhett & Link",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Rhett and Link</b> are an American comedy duo.</li><br><li>"+
    " They are known for creating and hosting the <b>YouTube series <u>Good Mythical Morning</u></b>.</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li>It was<b> Released on June 11, 2014</b>.</li><br><li>"+
    " <b>\"My OCD\"</b> is about a man and his urge to fix a normally acceptable, "+
    " fake sort of OCD.</li><br><li>The doctor is played by <b>Rhett Mclaughlin</b>.</li><br><li>"+
    " It was <b><u> Produced by:</u></b><br> <dd><b>- Stevie Wynne Levine</b></dd> </li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li><b>\"My OCD\"</B> helps people to find something in common."+
    " </li><br><li>It supports people and gives them energy.</li></ol> "),

    cover: "ocd.png"
  },
  {
    songTitle: "Make It Happen" ,
    author: " Song by: Mariah Carey",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> This inspiring song from <b>Mariah Carey's</b> second album "+
    " is a <b>rags-to-riches</b> story about the singer's rise to fame.</li><br><li>"+
    " The Long Island native was born into a troubled home fraught with domestic violence. "+
    " Her parents divorced when she was little and she was constantly on the move "+
    " with her mother, who struggled to support them.</li><br><li> The singer's "+
    " circumstances didn't improve much when she moved to New York City as a teenager "+
    " to pursue a music career, but through faith and determination she "+
    " <b>\"made it happen\"</b> and landed a record deal with <b><u>Columbia</u></b>.</li><br><li>"+
    " Her self-titled debut album was a major success, spawning <b>four #1 hit singles</b>"+
    " and launching her into stardom.</li><br><li>According to <b>Mariah, optimism "+
    " is an essential component to her music</b>, which she hopes will inspire her "+
    " fans to follow their own dreams.</li><br><li>"+
    " <b>\"I like to try and give positive messages, if I can in my music, "+
    " whenever I can... like with the songs <u>'Make It Happen'</u> and <u>'Hero'</u>,\"</b>"+
    " she told <b><u>Jet magazine</u></b> in 1994.</li><br><li>"+
    " <b>\"I do this because there is a lot of negativity out there and lot of people "+
    " are singing about how screwed up the world is, and I don't think that everybody "+
    " wants to hear about that all the time.\"</b> - Mariah</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li><b>\"Make It Happen\"</b> was <b>written</b> and <b>produced</b>"+
    " by: <br> <dd><b>- Carey and <u>C+C Music Factory's:</u> David Cole and Robert Clivillés.</b></dd> </li><br><li>"+
    " The song was praised by music critics, many of whom applauded Carey's incorporation "+
    " of several musical genres, as well as the song's personalized lyrical content.</li><br><li>"+
    " The song's music video was filmed in a cathedral-like church.</li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li>The inspiring vocals give people motivations and inspirations.</li><br><li>"+
    " It encourages people to be independent and try things with their talents.</li><br><li>"+
    " It madd people to believe in faith.</li></ol> "),

    cover: "happen.png"
  }

]

//OCD SongTable function

$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable4[songNum];
  console.log("Song data: ", songData);


  songHTML = `
    <img class="cover" src='img/${songData.cover}'>

  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h4 class=title02>${songData.title02}</h4>
    <div class="desc">${songData.description}</div>

    <h4 class=title03>${songData.title03}</h4>
    <div class="desc">${songData.description02}</div>

    <h4 class=title04>${songData.title04}</h4>
    <div class="desc">${songData.description03}</div>

</body>
</html>
    `
	$("#show-song4").html(songHTML);

});





//Insomnia SongTable
var songTable5 = [
	{
    //break up the song title and artist name
  	songTitle: "How Do You Sleep? " ,
		author: " Song by: Sam Smith",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li><b>Sam Smith</b> is an English singer and songwriter.</li><br><li> "+
    " As of April 2022, <b>Smith</b> has sold over <b>33 million albums</b> and "+
    " <b>227 million singles</b> worldwide.</li><br><li>Smith's achievements include: "+
    " <br> <dd><b>- Four Grammy Awards <br> <dd><b>- Three Brit Awards <br> "+
    " <dd><b>- Three Billboard Music Awards <br> <dd><b>- An American Music Award "+
    " <br> <dd><b>- Golden Globe and an Academy Award.Smith is genderqueer and uses they/them pronouns.</li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> </li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> </li></ol> "),

    cover: "song2.png"
  },
	{
  	songTitle: " ",
		author: "Song by: ",

    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> </li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> </li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> </li></ol> "),

    cover: "song3.png"
  },
	{
    songTitle: " " ,
    author: " Song by: ",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> </li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> </li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> </li></ol> "),

    cover: "song4.png"
  },
  {
    songTitle: " " ,
    author: " Song by: ",


    title02: "<u>Artist Facts</u>: ",
    //need to make these bullet point notes
    description: ("<ol><li> </li></ol> "),

    title03: "<u>Song Facts</u>:",

    description02: ("<ol><li> </li></ol> "),

    title04: "<u>Mental Facts</u>:",

    description03: ("<ol><li> </li></ol> "),

    cover: "song5.png"
  }

]

//Insomnia SongTable function

$(".song").click(function(){
	var songNum = $(this).data("songnum");
  console.log("Button Pressed: " + songNum);
  var songData = songTable5[songNum];
  console.log("Song data: ", songData);


  songHTML = `
    <img class="cover" src='img/${songData.cover}'>

  	<h3 class=title>${songData.songTitle}</h3>
		<h3 class=title>${songData.author}</h3>

    <h4 class=title02>${songData.title02}</h4>
    <div class="desc">${songData.description}</div>

    <h4 class=title03>${songData.title03}</h4>
    <div class="desc">${songData.description02}</div>

    <h4 class=title04>${songData.title04}</h4>
    <div class="desc">${songData.description03}</div>

</body>
</html>
    `
	$("#show-song5").html(songHTML);

});
