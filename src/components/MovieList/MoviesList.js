import React from "react";
import data from "../../data.json";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MoviesList = ({search , movies}) => {
  let btns = [
    { text: "All" },
    { text: "Best ever" },
    { text: "Newest" },
    { text: "Action" },
    { text: "Drama" },
    { text: "Si-Fi" },
    { text: "Fantasy" },
  ];

  return (
    <div className="mt-10 mx-8">
      <h1 className="text-center text-5xl font-bold">All Movies</h1>

      <div className="btns mt-8 flex justify-around items-center">
        {btns.map((item) => (
          <button>{item.text}</button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <input onChange={(e) => search(e.target.value)} type="text" placeholder="Search ...." style={{color:'black' , border:'1px solid #ccc' , padding :'10px' , width :'300px' , outline : '0' , borderRadius:'10px'}} />
      </div>
      <div className="movies-container mt-20 ">
        {movies.map((movie) => {
          return (
            <MovieCard
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
              director={movie.director}
              awards={movie.awards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoviesList;
