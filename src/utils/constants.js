export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png";

export const USER_AVTAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg";

export const BANNER_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer "+ process.env.REACT_APP_TMDB_KEY,
    },
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "EN", name: "English" },
  { identifier: "HI", name: "Hindi" },
  { identifier: "SP", name: "Spanish" },
  { identifier: "FR", name: "French" },
  { identifier: "RU", name: "Russian" },
  { identifier: "UR", name: "Urdu" },
];


export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY;