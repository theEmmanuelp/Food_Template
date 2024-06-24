import '../Css/Home.css';
import StreamPlayer from '../Components/StreamPlayer.js';

export default function Home () {

	return(
	<>
		
		<div id="homePageContainer">
		
			<div id="homeBody">
			
			
			<div id="aboutSubSection">
				
				
				<div id="streamPlayerContainer">
				<h1>Live Radio Player</h1>
					<StreamPlayer src="https://stream.zeno.fm/9fpmqjl6jrztv" />
				</div>
				
			</div>
			
			
			<div id="aboutSubSection">
			
				<p id="socialsText">Connect with us</p>
				
				<div id="contactInfoLine">
					<img id="contactInfoImg" alt="Phone Icon" src="img/phone_icon.png"/>
					<p id="contactInfo">(+63) 939-486-5756</p>
				</div>
				
				<div id="contactInfoLine">
					<img id="contactInfoImg" alt="Email Icon" src="img/email_icon.png"/>
					<p id="contactInfo">
					<a href="mailto: tess111274@yahoo.com">tess111274@yahoo.com</a>
				</p>
				
				</div>
				
				
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