import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        PopularMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // updating the store
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
})

// exporting actions
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;

// Now aab hame ish movieSlice ko .. appStore me add karna hai 