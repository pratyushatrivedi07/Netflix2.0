import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[17%] px-6 md:px-20 absolute bg-gradient-to-r from-black text-white aspect-video w-screen">
      <h1 className="font-semibold text-2xl md:text-5xl">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg/tight w-2/5 text-justify">
        {description}
      </p>
      <div className="flex items-center my-4">
        <button className="bg-white text-black py-1.5 md:py-3 px-3 md:px-8 font-semibold text-sm md:text-lg rounded-md hover:bg-opacity-80 flex items-center gap-2">
          <FaPlay className="w-3 h-3 md:w-4 md:h-4"/> Play
        </button>
        <button className="hidden bg-gray-600 py-3 px-8 mx-4 font-semibold text-sm md:text-lg text-white rounded-md bg-opacity-70 hover:bg-opacity-40 md:flex items-center gap-2">
          <MdInfoOutline className="w-5 h-5 md:w-6 md:h-6" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
