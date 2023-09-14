import React from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import LazyLoad from "../lazyLoad/LazyLoad";
import useFetch from "../../hooks/useFetch";

const MasterCard = ({ poster, title, date, type }) => {
  const { isLoading } = useFetch();

  const dynamicTitle =
    title.length > 14 ? `${title.substring(0, 14)}...` : title;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date || "10 10 2023"));

  const movieType = type === "movie" ? "Movie" : "TV";

  return (
    <div className="master-card">
      <div className="master-card__image">
        <RiPlayCircleFill className="master-card__image-video" />
        <div className="master-card__image-backdrop"></div>
        <h5 className="master-card__image-hd">HD</h5>
        <LazyLoad
          image={{
            src: `https://image.tmdb.org/t/p/original${poster}`,
            width: "100%",
            height: "100%",
            className: "master-card__image-img",
          }}
        />
      </div>

      <h4 className="master-card__title">{dynamicTitle}</h4>
      <div className="master-card__bottom">
        <p className="master__card-date">
          <small>{formattedDate}</small>
        </p>
        <p className="master-card__type">{movieType}</p>
      </div>
    </div>
  );
};

export default MasterCard;
