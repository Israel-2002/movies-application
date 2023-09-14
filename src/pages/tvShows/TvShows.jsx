import React, { useState } from "react";
import { Link } from "react-router-dom";
import MasterCard from "../../components/masterCard/MasterCard";
import InfiniteScrollComponent from "../../components/InfiniteScroll/InfiniteScrollComponent";

const TvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  const url = `tv/popular?language=en-US&page=`;

  const getData = (tvShows) => {
    setTvShows(tvShows);
  };

  return (
    <section className="tv-shows">
      <div className="container tv-shows__container">
        <div className="movie-grid-wrapper">
          <h2 className="movies-category">Popular Tv Shows</h2>

          <InfiniteScrollComponent url={url} getData={getData}>
            <ul className="movie-grid">
              {tvShows?.map((tv, index) => (
                <li key={index}>
                  <Link to={`/tv/${tv.id}`}>
                    <MasterCard
                      poster={tv.poster_path}
                      title={tv.name}
                      date={tv.first_air_date}
                      type="tv"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </InfiniteScrollComponent>
        </div>
      </div>
    </section>
  );
};

export default TvShows;
