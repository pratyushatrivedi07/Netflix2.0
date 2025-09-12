import { useEffect } from "react";
import { API_OPTIONS, TRENDING_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../store/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(TRENDING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
