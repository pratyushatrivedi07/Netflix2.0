import { useState } from "react";
import {
  BsHandThumbsUp,
  BsHandThumbsDown,
  BsHandThumbsUpFill,
  BsHandThumbsDownFill,
} from "react-icons/bs";

const LikeDislikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked && disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (!disliked && liked) setLiked(false);
  };
  return (
    <div>
      <button
        className="mx-2 rounded-full bg-zinc-800/90 p-1 md:p-2.5 border border-zinc-400"
        onClick={handleLike}
      >
        {liked ? (
          <BsHandThumbsUpFill className="w-5 h-5 md:w-6 md:h-6 fill-white" />
        ) : (
          <BsHandThumbsUp className="text-white w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
      <button
        className="mx-1 rounded-full bg-zinc-800/90 p-1 md:p-2.5 border border-zinc-400"
        onClick={handleDislike}
      >
        {disliked ? (
          <BsHandThumbsDownFill className="fill-white w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <BsHandThumbsDown className="text-white w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>
    </div>
  );
};

export default LikeDislikeButton;
