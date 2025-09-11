import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BG_IMG} alt="bgImage" className="bg-cover" />
      </div>
      <GptSearchBar />
      <GptMovies />
    </div>
  );
};

export default GptSearchPage;
