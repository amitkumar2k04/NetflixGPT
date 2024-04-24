import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  // This hook is doing is Fetch data from TMDB API and update the store

  const dispatch = useDispatch();
      //menoirization
      const TopRatedMovies = useSelector(
        (store) => store.movies.TopRatedMovies
      );

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if(!TopRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
