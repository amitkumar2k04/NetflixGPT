import React from 'react'
import MovieList from './MovieList';
import { useSelector } from "react-redux"

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-[20%]  md:pl-12 relative z-[5]'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated Movies"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      </div>
    </div>
  );
};

export default SecondaryContainer;