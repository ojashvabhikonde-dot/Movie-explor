import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovies } from "../../services/movieApi";
import {
  getTrendingMovies,
  getPopularMovies,
  getMovieDetails,
} from "../../services/movieApi";

export const fetchTrendingMovies =
  createAsyncThunk(
    "movies/fetchTrending",
    async () => {
      return await getTrendingMovies();
    }
  );

export const fetchPopularMovies =
  createAsyncThunk(
    "movies/fetchPopular",
    async () => {
      return await getPopularMovies();
    }
  );

export const fetchMovieDetails =
  createAsyncThunk(
    "movies/fetchDetails",
    async (id) => {
      return await getMovieDetails(id);
    }
  );

  export const fetchSearchMovies =
  createAsyncThunk(
    "movies/search",
    async (query) => {
      return await searchMovies(query);
    }
  );

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    trendingMovies: [],
    popularMovies: [],
    selectedMovie: null,
    searchTerm: "",
    loading: false,
    error: null,
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

    .addCase(
  fetchSearchMovies.fulfilled,
  (state, action) => {
    state.searchResults =
      action.payload;
  }
)

      .addCase(
        fetchTrendingMovies.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        fetchTrendingMovies.fulfilled,
        (state, action) => {
          state.loading = false;
          state.trendingMovies =
            action.payload;
        }
      )

      .addCase(
        fetchPopularMovies.fulfilled,
        (state, action) => {
          state.popularMovies =
            action.payload;
        }
      )

      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action) => {
          state.selectedMovie =
            action.payload;
        }
      );
  },
});

export const { setSearchTerm } =
  movieSlice.actions;

export default movieSlice.reducer;