import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import MasterCard from "../../masterCard/MasterCard";
import useFetch from "../../../hooks/useFetch";

const Recommended = () => {
  const [movieRecommendations, setMovieRecommendations] = useState([]);
  const [tvRecommendations, setTvRecommendations] = useState([]);

  const { fetchData } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    if (window.location.href.includes("/movie")) {
      fetchData(`movie/${id}/recommendations?language=en-US&page=1`).then(
        (data) => setMovieRecommendations(data?.results)
      );
    } else {
      fetchData(`tv/${id}/recommendations?language=en-US&page=1`).then((data) =>
        setTvRecommendations(data?.results)
      );
    }
  }, [fetchData, id]);

  const recommendedName = window.location.href.includes("/movie")
    ? "Movies"
    : "Tv Shows";

  const recommendedType = window.location.href.includes("/movie")
    ? "movie"
    : "tv";

  const dynamicRecommendations =
    movieRecommendations?.length > 0 ? movieRecommendations : tvRecommendations;

  const dynamicLink = movieRecommendations?.length > 0 ? "movie" : "tv";

  return (
    <div className="movie-grid-wrapper recommended">
      <h2 className="movies-category">Recommended {recommendedName}</h2>

      {dynamicRecommendations?.length > 0 ? (
        <ul className="movie-grid">
          {dynamicRecommendations.map((movie, index) => (
            <li key={index}>
              <Link to={`/${dynamicLink}/${movie.id}`}>
                <MasterCard
                  poster={movie.poster_path}
                  title={movie.title || movie.name}
                  date={
                    movie.release_date || movie.first_air_date || new Date()
                  }
                  type={recommendedType}
                />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommended {recommendedName} found</p>
      )}
    </div>
  );
};

export default Recommended;
