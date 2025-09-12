import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        {/* 
      Movies List of Horizontal Rows of N Cards
        - Popular
        - Trending
        - Now Playing
        - Genres
      */}
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Top Rated"} movies={movies.trendingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Coming Soon"} movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
