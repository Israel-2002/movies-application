import React, { useEffect, useState } from "react";
import { RiPlayCircleFill, RiProfileFill } from "react-icons/ri";
import useFetch from "../../hooks/useFetch";
import { NavLink, Outlet } from "react-router-dom";

const Genres = () => {
  return (
    <section className="genres">
      <div className="genres__container container">
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

export default Genres;
