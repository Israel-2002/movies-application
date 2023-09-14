import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MasterCard from "../../../../components/masterCard/MasterCard";
import useFetch from "../../../../hooks/useFetch";

const DiscoverTvShows = () => {
  const [data, setData] = useState([])

  const { fetchData } = useFetch(
  );

  useEffect(() => {
    fetchData(
      "discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"
    ).then((data) => setData(data.results));
  },[fetchData])

  return (
    <div className="movie-grid-wrappper">
      <h2 className="movies-category">Discover Tv Shows</h2>

      <ul className="movie-grid">
        {data.map((tv, index) => (
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
    </div>
  );
};

export default DiscoverTvShows;
