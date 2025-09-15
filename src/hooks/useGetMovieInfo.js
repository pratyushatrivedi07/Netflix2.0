import { useDispatch } from "react-redux";
import { addMovieInfo } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useGetMovieInfo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addMovieInfo(json));
  };

  useEffect(() => {
    getMovieInfo();
  }, []);
};
export default useGetMovieInfo;
