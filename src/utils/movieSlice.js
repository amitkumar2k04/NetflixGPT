import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        TopRatedMovies: null,
        UpcomingMovies : null,
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
    },
})

// exporting actions
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;

// Now aab hame ish movieSlice ko .. appStore me add karna hai 