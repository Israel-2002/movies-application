import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import MasterCard from "../../../components/masterCard/MasterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";

const GenreMovies = () => {
  const [movieGenres, setMovieGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreValue, setGenreValue] = useState("");

  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");

  const { fetchData } = useFetch();

  const selectedGenre = movieGenres.find((genre) => genre.name === genreValue);

  useMemo(() => selectedGenre, []);
 
  const url = `discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${selectedGenre?.id}`;

  const genreValueHandler = (event) => setGenreValue(event.target.value);

  useEffect(() => {
    fetchData("genre/movie/list?language=en").then((data) =>
      setMovieGenres(data.genres)
    );
  }, [fetchData]);

  useEffect(() => {
    fetchData(url).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });

    setCurrentPage((prev) => prev + 1);
  }, [fetchData, selectedGenre]);

  const fetchNextPage = () => {
    if (movies.length <= totalPages) {
      fetchData(url).then((data) =>
        setMovies((prev) => prev.concat(data.results))
      );
      setCurrentPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  return (
    <>
      <select className="genres__select" onChange={genreValueHandler}>
        <option>Please select a genre</option>
        {movieGenres.map((genre) => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>

      <div className="movie-grid-wrapper">
        <h2 className="movies-category">
          {genreValue === "Please select a genre" ? "" : genreValue}
        </h2>

        {movies.length > 0 ? (
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchNextPage}
            hasMore={hasMore}
            loader={<LoadingSpinner />}
          >
            <ul className="movie-grid">
              {movies.map((movie, index) => (
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
          </InfiniteScroll>
        ) : (
          <p>No Movies found, please select another genre.</p>
        )}
      </div>
    </>
  );
};

export default GenreMovies;
