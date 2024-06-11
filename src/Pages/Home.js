import '../Css/Home.css';
import StreamPlayer from '../Components/StreamPlayer.js';

export default function Home () {

	return(
	<>
		
		<div id="homePageContainer">
		
			<div id="homeBody">
			
			
			<div id="aboutSubSection">
				
				<h1>Live Radio Player</h1>
				
				<StreamPlayer src="https://stream.zeno.fm/9fpmqjl6jrztv" />

				
			</div>
			
			
			<div id="aboutSubSection">
			
				<h1>Our Socials</h1>
				
				<div id="socialMediaLinkContainer">
				<a href="https://www.facebook.com/djscribpage?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
					<img id="facebookLogo" src="img/facebookLogo.png" alt="faceBook Link" title="Our FaceBook Page"/>
				</a>
				<a href="https://www.youtube.com/@djscrib3884" target="_blank" rel="noreferrer">
					<img id="youtubeLogo" src="img/youtubeLogo.png" alt="youtube channel Link" title="Our YouTube Channel"/>
				</a>
				</div>
				
				
				<img id="spinningLogo" src="img/cribs hr 4.png" alt="Dj's Crib Logo"/>
				
			</div>
			
			</div>
			
		</div> {/* end of container*/}
		
		
	</>
	);
}