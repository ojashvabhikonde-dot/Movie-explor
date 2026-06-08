import React from "react";

const MovieCard = ({ movie, onFavorite }) => {
  return (
    <div className="bg-[#081120] rounded-2xl overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[350px] object-cover"
      />

      <div className="p-4">
        <h3 className="text-white font-semibold">
          {movie.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2">
          ⭐ {movie.vote_average}
        </p>

        <button
          onClick={() => onFavorite(movie)}
          className="mt-4 w-full bg-orange-500 py-2 rounded-xl text-black font-semibold"
        >
          Add To Favorites
        </button>
      </div>
    </div>
  );
};

export default MovieCard;