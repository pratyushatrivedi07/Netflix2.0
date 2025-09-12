import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[17%] px-20 absolute bg-gradient-to-r from-black text-white aspect-video w-screen">
      <h1 className="font-semibold text-5xl">{title}</h1>
      <p className="py-6 text-lg/tight w-2/5 text-justify">{description}</p>
      <div className="flex items-center my-2">
        <button className="bg-white text-black p-3 px-8 font-semibold text-lg rounded-md hover:bg-opacity-80 flex items-center gap-2">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-600 p-3 px-8 mx-4 font-semibold text-lg text-white rounded-md bg-opacity-70 hover:bg-opacity-40 flex items-center gap-2">
          <MdInfoOutline className="w-6 h-6" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
