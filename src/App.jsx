import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/home/movies/movieDetails/MovieDetails";
import TvDetails from "./pages/home/tvShows/tvDetails/TvDetails";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tvShows/TvShows";
import ScrollToTop from "./components/scrollToTp/ScrollToTop";
import Searched from "./pages/searched/Searched";
import SearchedMovies from "./pages/searched/movies/SearchedMovies";
import SearchedTvShows from "./pages/searched/tv/SearchedTvShows";
import Genres from "./pages/genres/Genres";
import GenreMovies  from "./pages/genres/movies/GenreMovies";
import GenreTvShows  from "./pages/genres/tvShows/GenreTvShows";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />
          <Route path="movie/:id" element={<MovieDetails />} />

          <Route path="tv-shows" element={<TvShows />} />
          <Route path="tv/:id" element={<TvDetails />} />

          <Route path="genres" element={<Genres />}>
            <Route index element={<GenreMovies />} />
            <Route path="tv" element={<GenreTvShows />} />
          </Route>

          <Route path="searched/:name" element={<Searched />}>
            <Route index element={<SearchedMovies />} />
            <Route path="tv" element={<SearchedTvShows />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
