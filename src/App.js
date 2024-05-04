import logo from './img/logo.svg';
import './App.css';
//import ReactDOM from 'react-dom/client';
import PageBanner from './Components/Banner.js';
import NavBar from './Components/NavBar.js';
import Contact from './Pages/Contact.js';
import Menu from './Pages/Menu.js';
import Location from './Pages/Location.js';

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
    default:
      component = null;
      break;
  }
  return (
    
    <div class="App"> 
      <div className='bannerImage'>
        <NavBar/>
        <PageBanner/>
      </div>
      {component}
   
    </div>

  );
}

export default App;
