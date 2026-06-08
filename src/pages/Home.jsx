import React, { useEffect, useState } from "react";
import {
  getTrendingMovies,
  getPopularMovies
} from "../service/movieApi";

import Moviecard from "./Moviecard"
import HeroSection from "./Herosection"

const Home = () => {

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {

    const loadMovies = async () => {

      const trendingMovies =
        await getTrendingMovies();

      const popularMovies =
        await getPopularMovies();

      setTrending(trendingMovies);
      setPopular(popularMovies);
    };

    loadMovies();

  }, []);

  const addToFavorites = (movie) => {

    const existing =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyExists =
      existing.find((m) => m.id === movie.id);

    if (!alreadyExists) {

      localStorage.setItem(
        "favorites",
        JSON.stringify([...existing, movie])
      );

      alert("Added To Favorites");
    }
  };

  return (
    <div className="bg-[#020617] min-h-screen">

      <HeroSection movie={trending[0]} />

      <div className="max-w-7xl mx-auto px-6 mt-12">

        <h2 className="text-3xl text-white mb-6">
          Trending This Week
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {trending.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavorite={addToFavorites}
            />
          ))}
        </div>

        <h2 className="text-3xl text-white mt-16 mb-6">
          Popular Picks
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {popular.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavorite={addToFavorites}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Home;