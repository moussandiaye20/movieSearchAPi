import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const api_key = "a80ada7f";
  const api_url = `http://www.omdbapi.com?apikey=${api_key}&s=`;
  const fetchMovies = async (title) => {
    const movies = await fetch(`${api_url}${title}`);
    const response = await movies.json();
    setMovies(response.Search);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies("Spiderman");
  }, []);
  if (loading) return <>fd</>;
  console.log(title);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          alt="search"
        />
        <img src={SearchIcon} onClick={() => fetchMovies(title)} />
      </div>
      <div className="container">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
