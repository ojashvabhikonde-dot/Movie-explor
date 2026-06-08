import React from "react";
import { Play, Heart } from "lucide-react";

const HeroSection = ({ movie, onFavorite }) => {
  if (!movie) return null;

  const imageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section className="pt-28 px-6">
      <div
        className="relative max-w-7xl mx-auto h-[600px] rounded-[40px] overflow-hidden"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
              <span className="text-orange-400 tracking-[4px] text-sm font-semibold">
                FEATURED
              </span>

              <span className="text-gray-300 text-sm tracking-[4px]">
                TOP TRENDING
              </span>
            </div>

            <h1 className="text-white text-6xl md:text-7xl font-black leading-none mb-6 uppercase">
              {movie.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {movie.overview?.slice(0, 180)}...
            </p>

            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition">
                <Play size={20} />
                Watch Trailer
              </button>

              <button
                onClick={() => onFavorite(movie)}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                <Heart size={20} />
                Add to Favorites
              </button>
            </div>

            <div className="flex gap-8 mt-10">
              <div>
                <p className="text-gray-400 text-sm">Rating</p>
                <p className="text-white font-bold text-xl">
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Release</p>
                <p className="text-white font-bold text-xl">
                  {movie.release_date}
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Language</p>
                <p className="text-white font-bold text-xl uppercase">
                  {movie.original_language}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;