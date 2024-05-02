import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import { useDispatch ,useSelector } from "react-redux";
import GPTSearchPage from "../GPT Component/GPTSearchPage";
import { clearMovieInfo } from "../../slice/movieSlice";
import OfflinePage from "./OfflinePage";
import NoMovies from "./NoMovies";


const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const onlineStatus = useSelector((store) => store.config.onlineStatus);
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const dispatch = useDispatch();
  dispatch(clearMovieInfo());

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {onlineStatus === "online" ? (
        showGptSearch ? (
          <GPTSearchPage />
        ) : (
          <>
          {movies ? (
            <>
            <MainContainer />
            <SecondaryContainer />
            </>
          ) : (
            <NoMovies/>
          )}
          </>
        )
      ) : (
        <OfflinePage />
      )}
    </div>
  );
};

export default Browser;
