
import './App.css';
//import ReactDOM from 'react-dom/client';
import './Css/NavBar.css';
import './NavBar.js';
import NavBar from './NavBar.js';
import Menu from './Pages/Menu.js';

function App() {
  //this switch case is for linking the pages together using location name 
  let component
  switch (window.location.pathname) {
    case "/Menu":
      component = <Menu/>
      break
  }
  return (
    <> 
    
    <NavBar/>
    {component}
   
    </>

  );
}

export default App;
