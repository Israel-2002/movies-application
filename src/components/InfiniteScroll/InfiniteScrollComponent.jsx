import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetch from "../../hooks/useFetch";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

const InfiniteScrollComponent = ({ children, url, getData }) => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");

  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData(`${url}${currentPage}`).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
    setCurrentPage((prev) => prev + 1);
  }, [fetchData, url]);

  const fetchNextPage = () => {
    if (movies.length <= totalPages) {
      fetchData(`${url}${currentPage}`).then((data) =>
        setMovies((prev) => prev.concat(data.results))
      );
      setCurrentPage((prev) => prev + 1);
    } else {
      setHasMore(false);
    }
  };

  useEffect(() => {
    getData(movies);
  }, [movies]);

  return (
    <InfiniteScroll
      dataLength={movies?.length}
      next={fetchNextPage}
      hasMore={hasMore}
      loader={<LoadingSpinner />}
    >
      {children}
    </InfiniteScroll>
  );
};

export default InfiniteScrollComponent;
