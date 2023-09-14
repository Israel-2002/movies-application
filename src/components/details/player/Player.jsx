import React from "react";
import ReactPlayer from "react-player/youtube";

const Player = ({ videoId }) => {
  return (
    <div className="details__player container">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        controls={true}
        width="100%"
        height="100%"
        playing={true}
      />
    </div>
  );
};

export default Player;
