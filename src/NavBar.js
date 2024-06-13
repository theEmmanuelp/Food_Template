import './Css/NavBar.css';

/*               <li>
                <a href="/Contact">Contact</a>
              </li> */

export default function NavBar () {
    return (
        
          <div className="NavBar">
            <ul>
              <li>
                <a href="/Home">Home</a>    
              </li>
			  <li>
                <a href="/Milestones">Milestones</a>    
              </li>

            </ul>
          </div>
        
      );
}