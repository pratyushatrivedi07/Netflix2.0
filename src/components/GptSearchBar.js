import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.appConfig.lang);
  const searchText = useRef(null);

  const searchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation System and suggest top and best 10 movies for the query ${searchText.current.value}, comma seperated like the example given ahead. Example: Padosan, Sholay, Golmaal, Dhamaal, Koi Mil Gaya, Kuch Kuch Hota Hai.`;

    // Make an API call to GPT API and get results (from npm i openai)
    const gptResult = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    // Extracting Movies to Array
    const gptMovieList = gptResult.choices?.[0]?.message?.content.split(",");

    // For each movie, search TMDB API
    const data = gptMovieList.map(async (movie) => {
      const result = await searchMovie(movie);

      return result.filter(
        (res) => res.title.toLowerCase() === movie.trim().toLowerCase()
      );
    }); // this returns array of Promises

    const searchResults = await Promise.all(data);
    console.log(searchResults.flat());
    dispatch(
      addGptMoviesResult({
        movieNames: gptMovieList,
        movieResults: searchResults.flat(),
      })
    );
  };

  return (
    <div className="md:pt-[18%] lg:pt-[10%] pt-[40%] bg-black flex justify-center bg-opacity-60">
      <form className="lg:w-1/2 md:w-3/4 w-full" onSubmit={(e) => e.preventDefault()}>
        <div className="relative w-full">
          <button
            className="py-2.5 px-6 bg-red-600 text-white rounded-full cursor-pointer absolute right-1.5 top-1/2 -translate-y-1/2 hover:bg-red-700"
            onClick={handleGptSearchClick}
          >
            {language[langKey].search}
          </button>
          <input
            ref={searchText}
            className="p-4 pl-6 pr-28 rounded-full w-full bg-black text-white border border-white outline-none"
            type="text"
            placeholder={language[langKey].searchPlaceholder}
          />
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
