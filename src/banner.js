import React from 'react';
import './Css/banner.css';

export function PageBanner(){
	
	return(
	<>
		<div id="bannerBG">
			<div id="bannerGradientTop"></div>
			
			<div id="logoTitleContainer">
				<img id="topLogo" src="/img/logo/topLogo.png" />
				
			</div>
			
			<div id="bannerGradientBottom"></div>
		</div>
		
	</>
	);
	
};

export default PageBanner;