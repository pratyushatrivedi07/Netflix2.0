import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
