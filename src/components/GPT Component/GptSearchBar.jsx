import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GEMINI_API_KEY, API_OPTIONS } from "../../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  addGptMovieResult,
  clearMovieResults,
  setSearchBtnClicked,
} from "../../slice/gptSlice";
import { toast } from "react-toastify";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const dispatch = useDispatch();
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to Gemini API to get movie results:
    try {
      dispatch(clearMovieResults());
      dispatch(setSearchBtnClicked(true));
      // console.log(search.current.value);
      const searchText = search.current.value;

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt =
        "Act as a movie recommendation system and suggest some movies for the query" +
        searchText +
        ".only give me names of movies,comma separated like example result given ahead.Example result:Gadar, life of pie, Border, The Ghazi Attack, 12th fail.";

      const result = await model.generateContent(prompt);
      const gptResults = await result.response;
      // console.log(gptResults);
      const gptMovies =
        gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
      // console.log(gptMovies);

      // For each movie I will search TMDB API and findout the results of the movie(for all 5 movies)
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      // console.log(tmdbResults);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      // console.error(error);
      toast.error("Limit Exceeded: Please try again after 20s");
    }
  };

  // Search movie from TMDB
  const searchMovieTMDB = async (movie) => {
    try {
      const data=await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1"
        ,API_OPTIONS
      );
      console.log(data);
      const json = await data.json();
      return json.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="pt-[15%] w-full md:w-1/2 grid grid-cols-12 gap-4 p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search}
          type="text"
          className="p-4 col-span-9 md:col-span-10 rounded"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 text-white font-bold col-span-3 p-4 md:col-span-2 rounded"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
