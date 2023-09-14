import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MasterCard from "../../../components/masterCard/MasterCard";
import InfiniteScrollComponent from "../../../components/InfiniteScroll/InfiniteScrollComponent";
import useFetch from "../../../hooks/useFetch";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";

const SearchedMovies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const { isLoading } = useFetch();

  const { name } = useParams();

  const url = `search/movie?query=${name}&include_adult=false&language=en-US&page=`;

  const getData = (movies) => {
    setSearchedMovies(movies);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <InfiniteScrollComponent url={url} getData={getData}>
      {searchedMovies.length > 0 ? (
        <ul className="movie-grid">
          {searchedMovies.map((movie, index) => (
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
      ) : (
        <p>No Movies found</p>
      )}
    </InfiniteScrollComponent>
  );
};

export default SearchedMovies;
