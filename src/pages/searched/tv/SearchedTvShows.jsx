import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MasterCard from "../../../components/masterCard/MasterCard";
import InfiniteScrollComponent from "../../../components/InfiniteScroll/InfiniteScrollComponent";
import useFetch from "../../../hooks/useFetch";
import LoadingSpinner from "../../../components/loadingSpinner/LoadingSpinner";

const SearchedTvShows = () => {
  const [searchedTvShows, setSearchedTvShows] = useState([]);
  const { isLoading } = useFetch();

  const { name } = useParams();

  const url = `search/tv?query=${name}&include_adult=false&language=en-US&page=`; // change

  const getData = (tv) => {
    setSearchedTvShows(tv);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <InfiniteScrollComponent url={url} getData={getData}>
      {searchedTvShows.length > 0 ? (
        <ul className="movie-grid">
          {searchedTvShows.map((tv, index) => (
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
      ) : (
        <p>No Tv Shows found found</p>
      )}
    </InfiniteScrollComponent>
  );
};

export default SearchedTvShows;
