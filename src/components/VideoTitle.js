const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] px-20 absolute bg-gradient-to-r from-black text-white aspect-video w-screen">
      <h1 className="font-semibold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-2/5 text-justify">{description}</p>
      <div>
        <button className="bg-white text-black p-2.5 px-10 font-semibold text-lg rounded-md hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-600 p-2.5 px-10 mx-4 font-semibold text-lg text-white rounded-md bg-opacity-70 hover:bg-opacity-40">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
