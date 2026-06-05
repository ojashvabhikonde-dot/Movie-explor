import axios from "axios";

const API_KEY = "YOUR_TMDB_API_KEY";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});



export const getTrendingMovies = async () => {
  const res = await api.get("/trending/movie/week");
  return res.data.results;
};

export const getPopularMovies = async () => {
  const res = await api.get("/movie/popular");
  return res.data.results;
};

export const getMovieDetails = async (id) => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};

export const searchMovies = async (query) => {
  const res = await api.get("/search/movie", {
    params: {
      query,
      include_adult: false,
    },
  });

  return res.data.results;
};

export default api;