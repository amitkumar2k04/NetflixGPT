import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //menoirization
  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );

  // fetch trailer video & updating store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if(!trailerVideo) getMovieVideos();
  }, []);
};
export default useMovieTrailer;
