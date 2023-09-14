import React, { useEffect, useState } from "react";
import useFetch from "../../../../hooks/useFetch";
import MasterCard from "../../../../components/masterCard/MasterCard";
import { Link } from "react-router-dom";

const Trending = () => {
  const [data, setData] = useState([]);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData("trending/tv/day?language=en-US").then((data) =>
      setData(data.results)
    );
    }, [fetchData]);

  return (
    <ul className="movie-grid">
      {data?.map((tv, index) => (
        <li key={index}>
          <Link to={`/tv/${tv.id}`}>
            <MasterCard
              poster={tv.poster_path}
              title={tv.name}
              date={tv.first_air_date || "12 12 2023"}
              type="tv"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Trending;
