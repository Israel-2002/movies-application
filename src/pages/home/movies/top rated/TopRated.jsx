import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MasterCard from "../../../../components/masterCard/MasterCard";
import useFetch from "../../../../hooks/useFetch";

const TopRated = () => {
  const [data, setData] = useState([]);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData("movie/top_rated?language=en-US&page=1").then((data) =>
      setData(data.results)
    );
  }, [fetchData]);

  return (
    <div className="movie-grid-wrapper">
      <h2 className="movies-category">Top Rated</h2>

      <ul className="movie-grid">
        {data.map((movie, index) => (
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
    </div>
  );
};

export default TopRated;
