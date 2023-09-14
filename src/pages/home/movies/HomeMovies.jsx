import React from "react";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import Trending from "./trending/Trending";
import useFetch from "../../../hooks/useFetch";
import TopRated from "./top rated/TopRated";
import DiscoverTvShows from "./discover/DiscoverTvShows";

const HomeMovies = () => {
  const { isLoading } = useFetch();

  return (
    <div className="movie-grid-container">
      {isLoading && <LoadingSpinner />}
      {!isLoading && <Trending />}
      {!isLoading && <TopRated />}
      {!isLoading && <DiscoverTvShows />}
    </div>
  );
};

export default HomeMovies;
