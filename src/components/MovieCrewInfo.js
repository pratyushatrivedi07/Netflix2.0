const MovieCrewInfo = ({ cast, director }) => {
  return (
    <div className="mt-6 mb-2">
      <div className="flex flex-wrap text-gray-300 my-3">
        <span className="text-zinc-400 mr-2">Cast:</span>
        {cast.length > 0 ? (
          cast.map((c, index) => (
            <span key={c.id} className="flex items-center">
              {c.name}
              {index < cast.length - 1 && (
                <span className="mx-1 text-gray-500">,</span>
              )}
            </span>
          ))
        ) : (
          <span>N/A</span>
        )}
      </div>
      <span className="text-zinc-400">
        Director:
        <span className="ml-1 text-gray-300">
          {director ? director.name : "N/A"}
        </span>
      </span>
    </div>
  );
};

export default MovieCrewInfo;
