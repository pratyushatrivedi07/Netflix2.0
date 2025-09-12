import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../store/moviesSlice";
import { useEffect } from "react";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    )[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
