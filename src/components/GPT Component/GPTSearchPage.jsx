import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BANNER_IMG } from "../../utils/constants";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen md:w-screen object-cover"
          src={BANNER_IMG}
          alt="banner"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;
