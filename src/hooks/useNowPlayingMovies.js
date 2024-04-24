import { useDispatch,useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // This hook is doing is Fetch data from TMDB API and update the store

  const dispatch = useDispatch();

    //menoirization
    const nowPlayingMovies = useSelector(
      (store) => store.movies.nowPlayingMovies
    );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   if(!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
