import React from "react";
import data from "../../data.json";
import './MovieList.css'
import MovieCard from "./MovieCard";


const MoviesList = () => {
  return (
    <div className="mt-10 mx-8">
    <h1 className="text-center text-5xl font-bold">All Movies</h1>
    <div className="btns mt-8 flex justify-around items-center">
      <button>All</button>
      <button>Best ever</button>
      <button>Newest</button>
      <button>Action</button>
      <button>Drama</button>
      <button>Si-Fi</button>
      <button>Fantasy</button>
    </div>
    <div className="movies-container mt-20 ">
      {data.map((movie) => {
        return (
          <MovieCard movie={movie} />
        );
      })}
    </div>
    </div>

  );
};

export default MoviesList;
