import { useState, useCallback } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWEyMWJkNDBiN2U4NGVhMzJkMmZmOGVmY2RiZDZmZCIsInN1YiI6IjY0ZDQ0OTRiMDIxY2VlMDBhZTUxMGQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4ALve_nwmoRUavWrJVejIJBdy7FXctN_g8Gin3wVHIQ",
    },
  };

  let baseUrl = "https://api.themoviedb.org/3/";

  const fetchData = useCallback(async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl + url}`, options);

      if (!response.ok) throw new Error("Something went wrong");

      setIsLoading(false)
      return await response.json();
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    fetchData,
  };
};

export default useFetch;
