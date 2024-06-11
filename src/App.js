import './App.css';
//import ReactDOM from 'react-dom/client';
import './Css/NavBar.css';
import './NavBar.js';
import PageBanner from './banner.js';
import NavBar from './NavBar.js';
import Home from './Pages/Home.js';
import Milestones from './Pages/Milestones.js';

function App() {
  //this switch case is for linking the pages together using location name 
  let component
  switch (window.location.pathname) {
	case "/Home":
      component = <Home/>
      break
	case "/Milestones":
	  component = <Milestones/>
	  break
    default:
	  component = <Home/>
      break;
  }
  return (
    
    <div class="App"> 
	
	<NavBar/>
    <PageBanner/>

	{component}
	
    </div>

  );
}

export default App;
