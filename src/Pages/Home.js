import '../Css/Home.css';
import StreamPlayer from '../Components/StreamPlayer.js';

export default function Home () {

	/* <video id="djStream" src="https://stream.zeno.fm/9fpmqjl6jrztv" controls>
					Your browser does not support the video tag.
					</video>  */
	return(
	<>
		
		<div id="homePageContainer">
		
			<div id="homeBody">
			
			
			<div id="aboutSubSection">
			
				<img id="spinningLogo" src="img/cribs hr 4.png" alt="Dj's Crib Logo"/>
				
				<StreamPlayer src="https://stream.zeno.fm/9fpmqjl6jrztv" />

				
			</div>
			
			
			<div id="aboutSubSection">
				<a href="https://www.facebook.com/djscribpage?mibextid=ZbWKwL" target="_blank">
				<img id="faceBookLogo" src="img/facebookLogo.png" alt="faceBook Link"/>
				</a>
			</div>
			
			</div>
			
		</div> {/* end of container*/}
		
		
	</>
	);
}