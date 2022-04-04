import React from "react";

function MovieCard({ movie }) {
  const { Year, Poster, Type, Title } = movie;
  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>
      <div>
        <span>{Type}</span> <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
