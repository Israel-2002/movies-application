import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiCloseLine, RiMenuLine, RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const showNavLinks = () => {
    document.querySelector(".navbar__links-container").style.right = 0;
  };

  const hideNavLinks = () => {
    document.querySelector(".navbar__links-container").style.right = "-100%";
  };

  const searchHandler = (event) => {
    setSearchedValue(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <div className="navbar__top">
          <h2 className="navbar__logo">
            <span className="navbar__logo-orange">Hd</span>
            <span className="navbar__logo-blue">Movies</span>
          </h2>

          <div className="navbar__links-container">
            <RiCloseLine className="navbar__close" onClick={hideNavLinks} />

            <ul className="navbar__links">
              <li onClick={hideNavLinks}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li onClick={hideNavLinks}>
                <NavLink to="genres">Genres</NavLink>
              </li>
              <li onClick={hideNavLinks}>
                <NavLink to="movies">Movies</NavLink>
              </li>
              <li onClick={hideNavLinks}>
                <NavLink to="tv-shows">Tv Shows</NavLink>
              </li>
            </ul>
          </div>
          <RiMenuLine className="navbar__open" onClick={showNavLinks} />
        </div>

        <div className="navbar__search">
          <input
            type="search"
            placeholder="Enter keywords..."
            onChange={searchHandler}
            value={searchedValue}
          />
          {searchedValue.trim().length > 0 && (
            <Link
              className="navbar__search-btn"
              to={`searched/${searchedValue}`}
            >
              <RiSearchLine onClick={() => setSearchedValue("")} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
