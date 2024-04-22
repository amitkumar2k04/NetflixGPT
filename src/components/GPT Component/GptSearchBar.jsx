import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../../utils/openAI";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to GPT API to get movie results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me the names of 5 movies, comma seperated like the Exapmple Result given ahead. Example Result is: Gadar, life of pie, Border, The Ghazi Attack, 12th fail";

    const GptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(GptResults.choices);
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
