import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_IMG}
          alt="bgImage"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar />
      <GptMovies />
    </div>
  );
};

export default GptSearchPage;
