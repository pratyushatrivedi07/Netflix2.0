import { useSelector } from "react-redux";
import { DEFAULT_POSTER, POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster, title }) => {
  const { showGptSearch } = useSelector((store) => store.gpt);
  return (
    <div className="w-44 pr-5">
      <img
        src={poster ? POSTER_URL + poster : DEFAULT_POSTER}
        alt={title}
        className="cursor-pointer min-h-60 rounded-md hover:scale-95 delay-100 duration-150 ease-in-out"
      />
      {showGptSearch && (
        <p className="text-white font-medium p-2 text-center my-2">{title}</p>
      )}
    </div>
  );
};

export default MovieCard;
