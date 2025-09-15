import useGetMovieCast from "../hooks/useGetMovieCast";
import useGetMovieInfo from "../hooks/useGetMovieInfo";
import { useSelector } from "react-redux";
import { calculateRuntime, extractYear } from "../utils/commons";
import { FaPlay } from "react-icons/fa";
import LikeDislikeButton from "./LikeDislikeButton";
import MovieGenre from "./MovieGenre";
import MovieCrewInfo from "./MovieCrewInfo";

const MovieInformation = ({ id }) => {
  const { movieInfo, movieCast, movieDirector } = useSelector(
    (store) => store.movies?.movieDetails
  );

  useGetMovieInfo(id);
  useGetMovieCast(id);

  if (!movieInfo || !movieCast || !movieDirector) return null;
  const { genres, overview, release_date, runtime, title } = movieInfo;

  const releaseYear = extractYear(release_date);
  const runtimeHours = calculateRuntime(runtime);
  const director = movieDirector[0];
  const cast = movieCast.slice(0, 6);
  console.log(cast);

  return (
    <div className="px-6 text-white">
      <div className="left-6 flex items-center gap-3 z-10 -mt-[15%]">
        <button className="flex items-center gap-2 bg-white text-black py-1.5 md:py-2 px-4 md:px-6 font-semibold text-sm md:text-lg rounded-md hover:bg-opacity-80">
          <FaPlay className="w-4 h-4" /> Play
        </button>
        <LikeDislikeButton />
      </div>

      <div className="flex justify-between gap-8 mt-28">
        <div className="w-2/3">
          <h1 className="text-3xl font-semibold mb-4">{title}</h1>
          <p className="text-base font-light leading-relaxed">{overview}</p>
        </div>

        <div className="text-right text-zinc-400 w-1/3">
          <div className="flex justify-end gap-4 mb-4">
            <span>{releaseYear}</span>
            <span>{runtimeHours}</span>
          </div>
          <MovieGenre genres={genres} />
        </div>
      </div>

      <MovieCrewInfo cast={cast} director={director} />
    </div>
  );
};
export default MovieInformation;
