import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  API_OPTIONS  from "../utils/movieSlice";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  //fetch trailer video & updating store with trailer video data

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movie_id]);
};
export default useMovieTrailer;
