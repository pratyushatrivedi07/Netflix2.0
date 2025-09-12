import GptSearchBar from "./GptSearchBar";
import GptMovies from "./GptMovies";
import { BG_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_IMG} alt="bgImage" className="h-screen object-cover" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovies />
      </div>
    </>
  );
};

export default GptSearchPage;
