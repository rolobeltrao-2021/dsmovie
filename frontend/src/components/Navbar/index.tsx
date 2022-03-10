import { ReactComponent as GitHubIcon } from "assets/img/GitHub.svg";
import './styles.css'

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/rolobeltrao-2021">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/rolobeltrao</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
