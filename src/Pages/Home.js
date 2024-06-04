import '../Css/Home.css';

/* // use Media Source Extensions for the live audio stream

const videoTag = document.getElementById("djStream");
const myMediaSource = new MediaSource();
const url = URL.createObjectURL(myMediaSource);
videoTag.src = url;

// 1. add source buffers

const audioSourceBuffer = myMediaSource
  .addSourceBuffer('audio/mp4; codecs="mp4a.40.2"');
const videoSourceBuffer = myMediaSource
  .addSourceBuffer('video/mp4; codecs="avc1.64001e"');

// 2. download and add our audio/video to the SourceBuffers

// for the audio SourceBuffer
fetch("<http://server.com/audio.mp4>").then(function(response) {
  // The data has to be a JavaScript ArrayBuffer
  return response.arrayBuffer();
}).then(function(audioData) {
  audioSourceBuffer.appendBuffer(audioData);
});

// the same for the video SourceBuffer
fetch("<http://server.com/video.mp4>").then(function(response) {
  // The data has to be a JavaScript ArrayBuffer
  return response.arrayBuffer();
}).then(function(videoData) {
  videoSourceBuffer.appendBuffer(videoData);
}); */


export default function Home () {
	
	
	return(
	<>
		
		<div id="homePageContainer">
		
			<div id="homeBody">
			
			<video id="djStream" src="https://stream.zeno.fm/9fpmqjl6jrztv" controls autoplay>
				Your browser does not support the video tag.
			</video>
			
			<div id="businessHoursContainer">
				<h1>Our Business Hours</h1>
				<ul>
					<li>
						<h2>Monday: 9:00am - 9:00pm</h2>
					</li>
					<li>
						<h2>Tuesday: 9:00am - 9:00pm</h2>
					</li>
					<li>
						<h2>Wednesday: 9:00am - 9:00pm</h2>
					</li>
					<li>
						<h2>Thursday: 9:00am - 9:00pm</h2>
					</li>
					<li>
						<h2>Friday: 9:00am - 9:00pm</h2>
					</li>
					<li>
						<h2>Saturday: 9:00am - 9:00pm</h2>
					</li>
					<li>
						<h2>Sunday: 9:00am - 9:00pm</h2>
					</li>
				</ul>
			</div>
			
			<div id="aboutSubSection">
			
				<h1>Our History</h1>
			
				<div id="aboutImageSection">
					
					<div id="aboutImageGrid">
						<img src="/img/home/about1.jpg" class="aboutImage1"/>
					</div>
					
				</div>
				
				<div id="aboutTextSection">
					
					
					<p>Welcome to M & E Bistro, a cherished gem nestled in the heart of Calgary. Established in 2005 by culinary enthusiasts Maria and Eduardo, the bistro quickly became a local favorite. Inspired by their travels across Europe and their deep-rooted love for fresh, flavorful cuisine, Maria and Eduardo sought to bring a unique dining experience to Calgary, blending the elegance of European bistros with the warmth of Canadian hospitality.</p>
					
					<p>Over the years, M & E Bistro has built a reputation for its exquisite menu, which showcases a diverse array of dishes crafted from the finest locally-sourced ingredients. Our chefs meticulously prepare each meal, drawing inspiration from classic European recipes while incorporating modern twists to delight the palates of our guests. Signature dishes such as the coq au vin and our renowned Alberta beef tenderloin reflect our commitment to culinary excellence and innovation.</p>
					
					<p>Today, M & E Bistro stands as a testament to Maria and Eduardo's vision, offering a cozy yet sophisticated atmosphere where friends and family can gather to enjoy exceptional food and wine. With a dedicated team passionate about providing impeccable service, we continue to be a beloved destination for both locals and visitors seeking a memorable dining experience in Calgary. Come and savor the flavors that have made M & E Bistro a cornerstone of our vibrant community.</p>
					
				</div>
				
			</div>
			
			
			<div id="aboutSubSection">
			
				<h1>Locally Sourced Ingredients</h1>
				
				<div id="aboutImageSection">
					
					<img src="/img/home/about2.jpeg" class="aboutImage2"/>
					
				</div>
				
				<div id="aboutTextSection">
					
					<p>At M & E Bistro, our commitment to quality begins with our ingredients. We proudly source the freshest produce, meats, and dairy from local farms and suppliers across Alberta. By partnering with regional growers and producers, we ensure that our dishes are crafted with the highest quality ingredients, reflecting the rich agricultural heritage of our community.</p>
					
					<p>Our relationships with local farmers and artisanal suppliers allow us to feature seasonal ingredients at the peak of their flavor. From heirloom vegetables and organic greens to sustainably raised meats and poultry, every component of our menu is selected with care. This dedication not only supports local businesses but also reduces our environmental footprint, aligning with our ethos of sustainability and responsible sourcing.</p>
					
					<p>Seafood at M & E Bistro is sourced with a keen eye on sustainability. We work with reputable suppliers who provide fresh, ethically sourced fish and shellfish. This ensures that our seafood dishes are not only delicious but also environmentally conscious. By choosing local and sustainable sources, we guarantee that every meal at M & E Bistro is a celebration of the finest and freshest ingredients our region has to offer.</p>
					
					
				</div>
				
				
				
			</div>
			
			<div id="aboutSubSection">
			
				<div id="aboutImageSection">
					
				</div>
				
				<div id="aboutTextSection">
					
				</div>
				
			</div>
			
			</div>
			
		</div> {/* end of container*/}
		
		
	</>
	);
}