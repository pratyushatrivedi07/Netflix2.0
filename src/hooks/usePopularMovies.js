import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
