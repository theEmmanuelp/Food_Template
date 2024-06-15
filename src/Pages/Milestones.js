import { useState } from "react";
import '../Css/Milestones.css';

import Milestones2024 from './Milestone Pages/2024.js';
import Milestones2023 from './Milestone Pages/2023.js';
import Milestones2022 from './Milestone Pages/2022.js';

// import the different milestone pages here

export default function Milestones() {
	
	// useState that determines what to show
	 const [year, setYear] = useState("2024");
	 
	// change contents based on user input
	 const renderContents = () => {
		 switch (year) {
		case "2024":
			return <Milestones2024/>;
		case "2023":
			return <Milestones2023/>;
			case "2022":
			return <Milestones2022/>;
		default:
			return <Milestones2024/>;

		}
		 
	 }
	
	
	return(
		<>
			<div id="milestonePageContainer">
			
			
			
			<div id="milestoneBody">
			
			<h1>Look back on our Milestones!</h1>
			
			<div id="yearSelectorContainer">
				<button onClick={() => setYear("2024")}>2024</button>
				<button onClick={() => setYear("2023")}>2023</button>
				<button onClick={() => setYear("2022")}>2022</button>
			</div>
			
			
			{renderContents()}
			
			</div>
			
			</div> {/* end of container*/}
			
		</>
	);
}