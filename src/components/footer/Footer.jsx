import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__left">
          <Link to="/">
            <h2 className="footer__logo">
              <span className="footer__logo-orange">Hd</span>
              <span className="footer__logo-blue">Movies</span>
            </h2>
          </Link>
          <p>© HDMovies</p>
        </div>

        <div className="footer__center">
          <p>
            HDMovies is a Free Movies streaming site with zero ads. We let you
            watch movies online without having to register or paying, with over
            10000 movies and TV-Series. You can also Download full movies from
            HDMovies and watch it later if you want.
          </p>

          <ul className="footer__links">
            <li>
              <a href="#">Android App</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        <p className="footer__right">
          HDMovies does not store any files on our server, we only linked to the
          media which is hosted on 3rd party services.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
