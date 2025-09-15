import { useSelector } from "react-redux";
import { TRAILER_URL } from "../utils/constants";
import useGetMovieClip from "../hooks/useGetMovieClip";

const MovieClip = ({ id }) => {
  const movieClip = useSelector(
    (store) => store.movies?.movieDetails?.movieClip
  );

  useGetMovieClip(id);

  return (
    <div className="w-full">
      <iframe
        className="-mt-20 w-full aspect-video rounded-t-xl"
        src={TRAILER_URL + movieClip?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieClip;
