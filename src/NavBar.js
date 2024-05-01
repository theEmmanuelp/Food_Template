import './Css/NavBar.css';

export default function NavBar () {
    return (
        <div className="">
          <div className="NavBar">
            <ul>
              <li>
                <a href="/Home"> Home </a>    
              </li>
              <li>
                <a href="/Location"> Location </a>
              </li>
              <li>
                <a href="/Menu"> Menu </a>
              </li>
              <li>
                <a href="/Contact"> Contact </a>
              </li>
            </ul>
          </div>
        </div>
      );
}