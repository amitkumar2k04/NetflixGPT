import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openAI";
import { GEMINI_API_KEY, API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // this function is doing that search movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to Gemini API to get movie results:

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
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
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-l-full outline-none text-center text-sm sm:text-base"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 px-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
