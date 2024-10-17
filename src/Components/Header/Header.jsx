import "./HeaderStyle.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="headerStyle">

      
        <nav>
         <Link  to="/">{" "} <img className="logoVainaflix" src="/vaiNaFlixLogo.svg" alt="" /> {" "}</Link>
          <ul>
            <li>
              <Link className="navLink" to="/Series">{" "}Séries{" "}</Link>
            </li>
            <li>
              <Link className="navLink" to="/Animes">{" "}Animes{" "}</Link>
            </li>
            <li>
              <Link className="navLink" to="/Filmes">{" "}Filmes{" "}</Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
}

export default Header;
