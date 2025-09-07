import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster, title }) => {
  return (
    <div className="w-44 pr-5">
      <img
        src={POSTER_URL + poster}
        alt={title}
        className="cursor-pointer rounded-md hover:scale-95 delay-100 duration-150 ease-in-out"
      />
    </div>
  );
};

export default MovieCard;
