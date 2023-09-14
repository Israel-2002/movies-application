import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RiProfileFill, RiPlayCircleFill } from "react-icons/ri";

const Searched = () => {
  return (
    <section className="searched">
      <div className="searched__container container">
        <nav className="searched__navbar">
          <ul>
            <li>
              <NavLink to="." end>
                <RiPlayCircleFill className="home__navbar-icon" />
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="tv">
                <RiProfileFill className="home__navbar-icon" /> Tv Shows
              </NavLink>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </section>
  );
};

export default Searched;
