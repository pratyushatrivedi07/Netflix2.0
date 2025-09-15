// import MovieClip from "./MovieClip";
import { useDispatch } from "react-redux";
import MovieClip from "./MovieClip";
import MovieInformation from "./MovieInformation";
import { clearMovie } from "../store/moviesSlice";

const MovieModal = ({ onClose, movieId }) => {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(clearMovie());
    onClose();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm"
      onClick={handleOnClose}
    >
      <div
        className="relative bg-zinc-800 bg-opacity-90 rounded-xl w-2/3 max-h-[50vh] md:max-h-[100vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleOnClose}
          className="absolute top-4 right-4 text-white text-lg md:text-2xl bg-gray-800 rounded-full px-2 md:px-3 md:py-1 hover:bg-gray-700 cursor-pointer z-10"
        >
          &times;
        </button>

        <MovieClip id={movieId} />

        <div className="p-2 md:p-4">
          <MovieInformation id={movieId} />
        </div>
      </div>
    </div>
  );
};
export default MovieModal;
