import React, { useState, useEffect } from "react";
import Details from "../../../../components/details/Details";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const [cast, setCast] = useState(null);

  const { fetchData } = useFetch();

  const { id } = useParams();
  const url = `movie/${id}/videos?language=en-US`;

  useEffect(() => {
    fetchData(`movie/${id}?language=en-US`).then((data) => setData(data));
    fetchData(`movie/${id}/credits?language=en-US`).then((data) =>
      setCast(data)
    );
  }, [fetchData, id]);

  return <Details data={data} cast={cast} url={url} />;
};

export default MovieDetails;
