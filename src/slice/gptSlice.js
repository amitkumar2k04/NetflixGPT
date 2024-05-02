import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        searchBtnClicked: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        clearMovieResults: (state, action) => {
            state.movieNames = null;
            state.movieResults = null;
        },
        setSearchBtnClicked: (state, action) => {
            state.searchBtnClicked = action.payload;
        },
        addGptMovieResult:(state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        setHomePage: (state) => {
            state.showGptSearch = false;
        },
    },
});

export const { toggleGptSearchView, addGptMovieResult, clearMovieResults, setSearchBtnClicked, setHomePage} = gptSlice.actions;
export default gptSlice.reducer;