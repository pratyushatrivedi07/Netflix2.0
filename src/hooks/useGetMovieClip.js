import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieClip } from "../store/moviesSlice";

const useGetMovieClip = (movieId) => {
  const dispatch = useDispatch();

  const getMovieClip = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const clip = json.results.filter((video) => video.type === "Trailer")[1];

    dispatch(addMovieClip(clip));
  };

  useEffect(() => {
    getMovieClip();
  }, []);
};

export default useGetMovieClip;
