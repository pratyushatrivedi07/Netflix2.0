import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addMovieCastAndCrew } from "../store/moviesSlice";

const useGetMovieCast = (movieId) => {
  const dispatch = useDispatch();

  const getMovieCast = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const { cast, crew } = json;

    const director = crew.filter((c) => c.department === "Directing");

    dispatch(
      addMovieCastAndCrew({
        movieCast: cast,
        movieDirector: director,
      })
    );
  };

  useEffect(() => {
    getMovieCast();
  }, []);
};

export default useGetMovieCast;
