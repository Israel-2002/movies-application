import React, { useState } from "react";
import MasterCard from "../../components/masterCard/MasterCard";
import { Link } from "react-router-dom";
import InfiniteScrollComponent from "../../components/InfiniteScroll/InfiniteScrollComponent";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  

  const url = `movie/popular?language=en-US&page=`;

  const getData = (movies) => {
    setMovies(movies);
  };

  return (
    <section className="movies">
      <div className="movies__container container">
        <div className="movie-grid-wrapper">
          <h2 className="movies-category">Popular Movies</h2>

          <InfiniteScrollComponent url={url} getData={getData}>
            <ul className="movie-grid">
              {movies?.map((movie, index) => (
                <li key={index}>
                  <Link to={`/movie/${movie.id}`}>
                    <MasterCard
                      poster={movie.poster_path}
                      title={movie.title}
                      date={movie.release_date}
                      type="movie"
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

export default Movies;
