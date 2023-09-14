import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import MasterCard from "../../../components/masterCard/MasterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";

const GenreMovies = () => {
  const [tvGenres, setTvGenres] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [genreValue, setGenreValue] = useState("");

  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");

  const { fetchData } = useFetch();

  const selectedGenre = tvGenres.find((genre) => genre.name === genreValue);

  useMemo(() => selectedGenre, []);

  const url = `discover/tv?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${selectedGenre?.id}`;

  const genreValueHandler = (event) => setGenreValue(event.target.value);

  useEffect(() => {
    fetchData("genre/tv/list?language=en").then((data) =>
      setTvGenres(data.genres)
    );
  }, [fetchData]);

  useEffect(() => {
    fetchData(url).then((data) => {
      setTvShows(data.results);
      setTotalPages(data.total_pages);
    });

    setCurrentPage((prev) => prev + 1);
  }, [fetchData, selectedGenre]);

  const fetchNextPage = () => {
    if (tvShows.length <= totalPages) {
      fetchData(url).then((data) =>
        setTvShows((prev) => prev.concat(data.results))
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
        {tvGenres.map((genre) => (
          <option key={genre.id}>{genre.name}</option>
        ))}
      </select>

      <div className="movie-grid-wrapper">
        <h2 className="movies-category">
          {genreValue === "Please select a genre" ? "" : genreValue}
        </h2>

        {tvShows.length > 0 ? (
          <InfiniteScroll
            dataLength={tvShows.length}
            next={fetchNextPage}
            hasMore={hasMore}
            loader={<LoadingSpinner />}
          >
            <ul className="movie-grid">
              {tvShows.map((tv, index) => (
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
          </InfiniteScroll>
        ) : (
          <p>No Tv Shows found, please select another genre.</p>
        )}
      </div>
    </>
  );
};

export default GenreMovies;
