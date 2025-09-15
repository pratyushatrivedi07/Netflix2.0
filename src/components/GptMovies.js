import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovies = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames && !movieResults)
    return <div className="bg-black h-screen bg-opacity-60"></div>;

  return (
    <div className="bg-black w-screen min-h-screen bg-opacity-60">
      <div className="px-2 md:px-6 pt-3 md:pt-8">
        <h1 className="text-white font-semibold px-2 md:px-6 text-lg md:text-xl py-6">
          Recommended Movies
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-black rounded-xl bg-opacity-70">
          {movieResults.map((movie) => (
            <div key={movie.id} className="px-6 py-7">
              <MovieCard
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptMovies;
