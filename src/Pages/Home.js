import '../Css/Home.css';
import StreamPlayer from '../Components/StreamPlayer.js';

export default function Home () {

	return(
	<>
		
		<div id="homePageContainer">
		
			<div id="homeBody">
			
			
			<div id="aboutSubSection">
				
				<h1>Live Radio Player</h1>
				<div id="streamPlayerContainer">
					<StreamPlayer src="https://stream.zeno.fm/9fpmqjl6jrztv" />
				</div>
				
			</div>
			
			
			<div id="aboutSubSection">
			
				<h1>Our Socials</h1>
				
				<div id="socialMediaLinkContainer">
				
				<div id="socialMediaLogoContainer">
				<a href="https://www.facebook.com/djscribpage?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
					<img src="img/facebookLogo.png" alt="faceBook Link" title="Our FaceBook Page"/>
				</a>
				</div>
				
				<div id="socialMediaLogoContainer">
				<a href="https://www.youtube.com/@djscrib3884" target="_blank" rel="noreferrer">
					<img src="img/youtubeLogo.png" alt="youtube channel Link" title="Our YouTube Channel"/>
				</a>
				</div>
				
				</div>
				
				<div id="adContainer">
					<img id="djAd" src="img/cribs hr 4.png" alt="Dj's Crib Promo"/>
				</div>
				
				
			</div>
			
			</div>
			
		</div> {/* end of container*/}
		
		
	</>
	);
}