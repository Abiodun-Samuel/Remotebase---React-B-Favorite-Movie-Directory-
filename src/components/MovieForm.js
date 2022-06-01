import React, { useState } from "react";

const MovieForm = ({ addToMovieList, setDisplay }) => {
  const [error, setError] = useState(false);
  const [movieList, setMovieList] = useState({
    name: "",
    ratings: "",
    duration: "",
  });

  const handleChange = (e) => {
    setError(false);
    const { name, value } = e.target;
    setMovieList((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
   
    if (
      movieList.name.trim().length > 0 &&
      Number(movieList.ratings.trim()) <= 100 &&
      Number(movieList.ratings.trim()) >= 1
    ) {
      const res = movieList.duration.match(/^([0-9]+[.])*[0-9]+[mh]$/);
      if (!res) {
        setError(true);
      } else {
        var durStr = movieList.duration;
        var dur = durStr.split("").pop();
        var removeLastChar = durStr.slice(0, durStr.length - 1);
        let num;
        if (dur === "m") {
          num = Number(removeLastChar) / 60;
          num = num.toFixed(1);
          //   num = `${num} Hrs`;
          movieList.duration = num;
        } else if (dur === "h") {
          num = Number(removeLastChar);
          //   num = `${num} Hrs`;
          movieList.duration = num;
        }
        setDisplay("list");
        addToMovieList(movieList);
        setMovieList({
          name: "",
          ratings: "",
          duration: "",
        });
      }
    }
  };
  return (
    <div>
      <h4 className="text-primary font-weight-bold"> Movie Form</h4>
      <div className="mt-3">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter movie name"
              className="form-control my-3"
              name="name"
              value={movieList.name}
              onChange={handleChange}
            />
            <input
              type="number"
              className="form-control my-3"
              name="ratings"
              placeholder="Enter movie rating"
              value={movieList.ratings}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter movie duration"
              className="form-control my-3"
              name="duration"
              value={movieList.duration}
              onChange={handleChange}
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-block btn-primary my-3"
            >
              Add Movie
            </button>

            {error && (
              <div className="alert alert-danger">
                <span className="text-danger">Duration format is invalid</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
