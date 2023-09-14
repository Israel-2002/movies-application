import { RiPlayCircleFill } from "react-icons/ri";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { RiPlayFill } from "react-icons/ri";
import Player from "./player/Player";
import Modal from "../modal/Modal";
import { useEffect, useState } from "react";
import Recommended from "./recommended/Recommended";
import LazyLoad from "../lazyLoad/LazyLoad";

const Details = ({ data, cast, url }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const [trailers, setTrailers] = useState([]);

  const { isLoading, fetchData } = useFetch();

  useEffect(() => {
    fetchData(url).then((data) => setTrailers(data.results));
  }, [fetchData, url]);

  if (!data || !cast) return;

  const officialTrailer = trailers.find((r) => r.type === "Trailer" && r.type);

  const genres = data.genres.map((genre) => genre.name).join(", ");

  const casts = cast.cast
    .slice(0, 10)
    .map((genre) => genre.name)
    .join(", ");

  const countries = data.production_countries
    .map((country) => country.name)
    .join(", ");

  const companies = data.production_companies
    .map((country) => country.name)
    .join(", ");

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(data.release_date || data.first_air_date || "12 12 2023"));

  const convertRuntime = (r) => {
    const hours = r / 60;
    const rHours = Math.floor(hours);
    const minutes = (hours - rHours) * 60;
    const rMinutes = Math.round(minutes);
    return `${rHours}h ${rMinutes}m`;
  };

  const runtime = convertRuntime(data.runtime);

  const showPlayerHandler = () => setShowPlayer(true);
  const hidePlayerHandler = () => setShowPlayer(false);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <section className="details">
      <div className="details__backdrop">
        <RiPlayCircleFill
          className="details__backdrop-btn"
          onClick={showPlayerHandler}
        />
        <LazyLoad
          image={{
            src: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="container">
        <div className="details__container">
          <div className="details__poster">
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt=""
            />
          </div>

          <div className="details__info">
            <div>
              <button className="details__watch" onClick={showPlayerHandler}>
                <RiPlayFill className="details__watch-icon" /> Watch now
              </button>
              <h2 className="details__title">{data.title || data.name}</h2>
              <h4 className="details__rating">
                Rating: {data.vote_average.toFixed(1)}
              </h4>
              <p className="details__overview">{data.overview}</p>
            </div>

            <div className="details__info-bottom">
              <div>
                <p className="details__info-bottom-date">
                  <strong>Released:</strong> {formattedDate}
                </p>
                <p className="details__info-bottom-genres">
                  <strong>Genres:</strong> {genres}.
                </p>
                <p className="details__info-bottom-cast">
                  <strong>Casts:</strong> {casts}.
                </p>
              </div>

              <div>
                <p className="details__info-bottom-duration">
                  <strong>Duration:</strong> {runtime}
                </p>
                <p className="details__info-bottom-countries">
                  <strong>Country:</strong> {countries}
                </p>
                <p className="details__info-bottom-companies">
                  <strong>Production:</strong> {companies}.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Recommended />

        {showPlayer && (
          <Modal hidePlayer={hidePlayerHandler}>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              !isLoading && <Player videoId={officialTrailer?.key} />
            )}
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Details;
