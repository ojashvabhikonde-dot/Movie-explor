import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const Favorites = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setMovies(data);
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[rgb(5,8,22)] px-6 py-8 pt-30">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Top Banner */}
          <div className="flex flex-col md:flex-row items-center justify-between rounded-[32px] border border-white/10 bg-[rgb(2,6,23)] px-10 py-10 gap-6">
            <div>
              <p className="text-[13px] uppercase tracking-[6px] text-orange-400 mb-3">
                My Collection
              </p>

              <h1 className="text-3xl font-bold text-white mb-3">
                Your Favorites
              </h1>

              <p className="text-gray-400 text-md">
                A cinematic shelf of the movies you love.
              </p>
            </div>

            <button
              onClick={() => navigate("/")}
              className="cursor-pointer rounded-full bg-orange-500 px-8 py-2 text-md font-semibold text-black transition hover:bg-orange-400"
            >
              Discover More
            </button>
          </div>

          {/* Empty State */}
          {movies.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-[32px] border border-white/10 bg-[rgb(2,6,23)] py-20 text-center">
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Your list is empty.
              </h2>

              <p className="mb-8 max-w-xl text-lg text-gray-400">
                Browse trailers and add movies to Favorites so they are easy to
                revisit.
              </p>

              <button
                onClick={() => navigate("/")}
                className="rounded-full bg-orange-500 px-8 py-2 text-md cursor-pointer font-semibold text-black transition hover:bg-orange-400"
              >
                Explore Movies
              </button>
            </div>
          ) : (
            /* Favorites Grid */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-[rgb(2,6,23)] transition hover:scale-105"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="h-[350px] w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {movie.title}
                    </h3>

                    {movie.release_date && (
                      <p className="text-gray-400 text-sm mt-1">
                        {movie.release_date.slice(0, 4)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;