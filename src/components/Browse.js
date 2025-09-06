import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* 
      Main Container
        - Video Background
        - Video Title
      Secondary Container
        - Movie List * n
          - Cards * n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
