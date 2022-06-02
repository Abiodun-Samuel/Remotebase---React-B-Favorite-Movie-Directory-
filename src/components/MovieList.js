import React from "react";

const MovieList = ({ movieLists }) => {
  // sort movielist by duration in descending order
  movieLists.sort(function (a, b) {
    return b.duration - a.duration;
  });

  return (
    <div>
      <ul className="list-unstyled">
        {movieLists.map((movie, index) => (
          <li
            className="bg-secondary p-3 text-white my-2"
            key={movie.name + index}
          >
            <p>{movie.name}</p>
            <p>Ratings: {movie.ratings}/100</p>
            <p>{`${movie.duration} Hrs`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
