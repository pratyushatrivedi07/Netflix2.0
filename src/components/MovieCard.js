import { useSelector } from "react-redux";
import { DEFAULT_POSTER, POSTER_URL } from "../utils/constants";
import { useState } from "react";
import MovieModal from "./MovieModal";

const MovieCard = ({ id, poster, title }) => {
  const { showGptSearch } = useSelector((store) => store.gpt);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMovieClick = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="w-40 md:w-48 pr-4">
      <img
        src={poster ? POSTER_URL + poster : DEFAULT_POSTER}
        alt={title}
        className="cursor-pointer min-h-48 md:min-h-64 rounded-md hover:scale-95 delay-100 duration-150 ease-in-out"
        onClick={handleMovieClick}
      />
      {showGptSearch && (
        <p className="text-white font-medium mt-6 text-center">{title}</p>
      )}

      {isModalOpen && <MovieModal onClose={handleClose} movieId={id} />}
    </div>
  );
};

export default MovieCard;
