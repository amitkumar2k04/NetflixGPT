import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../slice/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // This hook is doing is Fetch data from TMDB API and update the store

  const dispatch = useDispatch();

    //menoirization
    const popularMovies = useSelector(
      (store) => store.movies.popularMovies
    );
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if(!popularMovies) getPopularMovies();
  }, []);
  
};

export default usePopularMovies;
