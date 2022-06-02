import { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Search from "./components/Search";

function App() {
  const [movieLists, setMovieLists] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [display, setDisplay] = useState(false);

  const addToMovieList = (movies) => {
    setMovieLists((prev) => {
      return [...prev, movies];
    });
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 my-3">
          <MovieForm addToMovieList={addToMovieList} setDisplay={setDisplay} />
        </div>

        <div className="col-lg-6 col-md-6 my-3">
          <Search
            movieLists={movieLists}
            setSearchResults={setSearchResults}
            setMovieLists={setMovieLists}
            setDisplay={setDisplay}
          />
          {display === "list" ? (
            <MovieList movieLists={movieLists} />
          ) : display === "search" ? (
            searchResults.length > 0 ? (
              <MovieList movieLists={searchResults} />
            ) : (
              <h4 className="text-danger mt-4">No Search Results</h4>
            )
          ) : null}
          {/* {display && display === "list" && (
            <MovieList movieLists={movieLists} />
          )}
          {display && display === "search" && (
            <MovieList movieLists={searchResults} />
          )} */}
          {/* <MovieList
            movieLists={
              searchResults.length <= 0 || notFound ? movieLists : searchResults
            }
          /> */}
          {/* {notFound && <h4 className="text-danger mt-4">No Search Results</h4>} */}
        </div>
      </div>

      <div className="row mt-5">
        <p>
          Developed by{" "}
          <a target="_blank" href="https://abiodunsamuel.com/">
            Abiodun Samuel
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
