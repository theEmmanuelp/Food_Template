import './App.css';
//import ReactDOM from 'react-dom/client';
import './Css/NavBar.css';
import './NavBar.js';
import PageBanner from './banner.js';
import NavBar from './NavBar.js';
import Contact from './Pages/Contact.js';
import Menu from './Pages/Menu.js';
import Location from './Pages/Location.js';
import Home from './Pages/Home.js';
import Order from './Pages/Order.js';

function App() {
  //this switch case is for linking the pages together using location name 
  let component
  switch (window.location.pathname) {
    case "/Contact":
      component = <Contact/>
      break
    case "/Menu":
      component = <Menu/>
      break
    case "/Location":
      component = <Location/>
      break
	case "/Home":
      component = <Home/>
      break
	case "/Order":
	  component = <Order/>
	  break
    default:
      component = null;
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
