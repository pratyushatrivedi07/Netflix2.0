import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
import MovieModal from "./MovieModal";

const VideoTitle = ({ title, description, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <div className="pt-[17%] px-6 md:px-10 lg:px-20 absolute bg-gradient-to-r from-black text-white aspect-video w-screen">
      <h1 className="font-semibold text-2xl lg:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg/tight w-3/4 lg:w-2/5 text-justify">
        {description}
      </p>
      <div className="flex items-center my-4">
        <button className="bg-white text-black py-1.5 md:py-3 px-3 md:px-8 font-semibold text-sm md:text-lg rounded-md hover:bg-opacity-80 flex items-center gap-2">
          <FaPlay className="w-3 h-3 md:w-4 md:h-4" /> Play
        </button>
        <button
          className="hidden bg-gray-600 py-3 px-8 mx-4 font-semibold text-sm md:text-lg text-white rounded-md bg-opacity-70 hover:bg-opacity-40 md:flex items-center gap-2"
          onClick={handleInfoClick}
        >
          <MdInfoOutline className="w-5 h-5 md:w-6 md:h-6" /> More Info
        </button>
      </div>
      {isModalOpen && <MovieModal onClose={handleClose} movieId={id} />}
    </div>
  );
};

export default VideoTitle;
