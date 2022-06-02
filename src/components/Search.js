import React from "react";

const Search = ({
  movieLists,
  setSearchResults,
  setMovieLists,
  setDisplay,
}) => {
  const handleChange = (e) => {
    const search = e.target.value;
    if (search.length >= 2) {
      setDisplay("search");
      const results = movieLists.filter((movies) => {
        return movies.name.toLowerCase().startsWith(search.toLowerCase());
      });
      if (results.length === 0) {
        setSearchResults([]);
      } else {
        setSearchResults(results);
      }
    } else {
      setDisplay("list");
      setMovieLists(movieLists);
    }
  };
  return (
    <div>
      <h3 className="text-primary font-weight-bold"> Search </h3>
      <input
        type="text"
        placeholder="Search movie by name"
        className="form-control my-3"
        name="name"
        // value={movieList.name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
