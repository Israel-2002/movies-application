import React, { useState, useEffect } from "react";
import useFetch from "../../../../hooks/useFetch";
import MasterCard from "../../../../components/masterCard/MasterCard";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [data, setData] = useState([]);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData("tv/top_rated?language=en-US&page=1").then((data) =>
      setData(data.results)
    );
  }, [fetchData]);

  return (
    <div className="movie-grid-wrapper">
      <h2 className="movies-category">Top Rated</h2>
      <ul className="movie-grid">
        {data?.map((tv, index) => (
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

export default TopRated;
