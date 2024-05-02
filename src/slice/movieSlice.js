import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies: null,
    movieInfo: null,
    castInfo: null,
    movieVideos: null,
    castMovies: null,
  },
  reducers: {
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      // updating the store
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    clearMovieInfo: (state, action) => {
      state.movieInfo = null;
    },
    addCastInfo: (state, action) => {
      state.castInfo = action.payload;
    },
    addMovieVideos: (state, action) => {
      state.movieVideos = action.payload;
    },
    addCastMovies: (state, action) => {
      state.castMovies = action.payload;
    },
    clearCastMovies: (state, action) => {
      state.castMovies = null;
    },
  },
});

// exporting actions
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addMovieInfo,
  clearMovieInfo,
  addCastInfo,
  addMovieVideos,
  addCastMovies,
  clearCastMovies,
} = movieSlice.actions;

export default movieSlice.reducer;

// Now aab hame ish movieSlice ko .. appStore me add karna hai
