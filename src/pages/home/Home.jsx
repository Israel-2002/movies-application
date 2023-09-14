import React, { useState } from "react";
import { RiPlayCircleFill, RiProfileFill } from "react-icons/ri";
import HomeMovies from "./movies/HomeMovies";
import HomeTvShows from "./tvShows/HomeTvShows";

const Home = () => {
  const [showMovies, setShowMovies] = useState(true);
  const [showTV, setShowTv] = useState(false);

  const hideMoviesHandler = () => {
    setShowMovies(false);
    setShowTv(true);
  };

  const hideTvHandler = () => {
    setShowMovies(true);
    setShowTv(false);
  };

  return (
    <section className="home">
      <div className="home__container container">
        <div className="home__top">
          <h2 className="movies-category">Trending</h2>
          <nav className="home__navbar">
            <ul>
              <li
                onClick={hideTvHandler}
                style={
                  showMovies
                    ? { backgroundColor: "#2160bc", color: "#fff" }
                    : {}
                }
              >
                <RiPlayCircleFill className="home__navbar-icon" />
                Movies
              </li>

              <li
                onClick={hideMoviesHandler}
                style={
                  showTV ? { backgroundColor: "#2160bc", color: "#fff" } : {}
                }
              >
                <RiProfileFill className="home__navbar-icon" /> Tv Shows
              </li>
            </ul>
          </nav>
        </div>

        {showMovies && <HomeMovies />}

        {showTV && <HomeTvShows />}
      </div>
    </section>
  );
};

export default Home;
