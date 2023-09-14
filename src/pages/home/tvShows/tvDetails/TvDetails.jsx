import React, { useEffect, useState } from "react";
import Details from "../../../../components/details/Details";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";

const TvDetails = () => {
  const [data, setData] = useState(null);
  const [cast, setCast] = useState(null);

  const { fetchData } = useFetch();

  const { id } = useParams();
  const url = `tv/${id}/videos?language=en-US`;

  useEffect(() => {
    fetchData(`tv/${id}?language=en-US`).then((data) => setData(data));
    fetchData(`tv/${id}/credits?language=en-US`).then((data) => setCast(data));
  }, [fetchData, id]);

  return <Details data={data} cast={cast} url={url} />;
};

export default TvDetails;
