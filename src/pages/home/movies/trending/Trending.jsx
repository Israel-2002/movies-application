import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MasterCard from "../../../../components/masterCard/MasterCard";
import useFetch from "../../../../hooks/useFetch";

const Trending = () => {
  const [data, setData] = useState([]);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData("trending/movie/day?language=en-US").then((data) =>
      setData(data.results)
    );
  }, [fetchData]);

  return (
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
  );
};

export default Trending;
