const MovieGenre = ({ genres }) => {
  console.log(genres);
  return (
    <div className="flex flex-wrap lg:justify-end text-gray-300 my-2">
      {genres.length > 0 ? (
        genres.map((genre, index) => (
          <span key={genre.id} className="flex items-center">
            {genre.name}
            {index < genres.length - 1 && (
              <span className="mx-1 text-gray-500">•</span>
            )}
          </span>
        ))
      ) : (
        <span>N/A</span>
      )}
    </div>
  );
};

export default MovieGenre;
