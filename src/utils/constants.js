export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

  export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer "+ process.env.REACT_APP_TMDB_KEY,
    },
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BANNER_IMG_CDN_URL = "https://image.tmdb.org/t/p/original";

export const SUPPORTED_LANGUAGES = [
  { identifier: "EN", name: "English" },
  { identifier: "HI", name: "Hindi" },
  { identifier: "SP", name: "Spanish" },
  { identifier: "FR", name: "French" },
  { identifier: "RU", name: "Russian" },
  { identifier: "UR", name: "Urdu" },
];


export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY;