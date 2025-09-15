import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    movieDetails: {
      movieClip: null,
      movieInfo: null,
      movieCast: null,
      movieDirector: null,
    },
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieClip: (state, action) => {
      state.movieDetails.movieClip = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieDetails.movieInfo = action.payload;
    },
    addMovieCastAndCrew: (state, action) => {
      const { movieCast, movieDirector } = action.payload;
      state.movieDetails.movieCast = movieCast;
      state.movieDetails.movieDirector = movieDirector;
    },
    clearMovie: (state) => {
      state.movieDetails = {
        movieClip: null,
        movieInfo: null,
        movieCast: null,
        movieDirector: null,
      };
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
  addTrailer,
  addMovieClip,
  clearMovie,
  addMovieInfo,
  addMovieCastAndCrew,
} = moviesSlice.actions;

export default moviesSlice.reducer;
