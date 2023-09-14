import React from "react";
import useFetch from "../../../hooks/useFetch";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";
import Trending from "./trending/Trending";
import TopRated from "./top rated/TopRated";
import DiscoverMovies from "./discover/DiscoverMovies";

const HomeTvShows = () => {
  const { isLoading } = useFetch();

  return (
    <div className="movie-grid-container">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Trending />
          <TopRated />
          <DiscoverMovies />
        </>
      )}
    </div>
  );
};

export default HomeTvShows;
