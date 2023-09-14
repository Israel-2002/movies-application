import React, { useState, useEffect } from "react";
import useFetch from "../../../../hooks/useFetch";
import MasterCard from "../../../../components/masterCard/MasterCard";
import { Link } from "react-router-dom";

const DiscoverMovies = () => {
  const [data, setData] = useState([]);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData(
      "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    ).then((data) => setData(data.results));
  }, [fetchData]);

  return (
    <div className="movie-grid-wrappper">
      <h2 className="movies-category">Discover Movies</h2>
      <ul className="movie-grid">
        {data?.map((movie, index) => (
          <li key={index} to={`/movie/${movie.id}`}>
            <Link>
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

export default DiscoverMovies;
