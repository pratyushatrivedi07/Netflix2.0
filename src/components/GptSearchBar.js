import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.appConfig.lang);

  return (
    <div className="pt-[10%] bg-black flex justify-center bg-opacity-40">
      <form className="w-1/2">
        <div className="relative w-full">
          <button className="py-2.5 px-6 bg-red-600 text-white rounded-full cursor-pointer absolute right-1.5 top-1/2 -translate-y-1/2 hover:bg-red-700">
            {language[langKey].search}
          </button>
          <input
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
