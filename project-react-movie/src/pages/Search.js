import React from "react";
import { useLocation } from "react-router-dom";

function filterMovie(movieList, value) {
    if (value === "all genres" || value === "") return movieList;
    return movieList.filter((movieItem) => {
      return movieItem.nameMovie === value;
    });
  }


const Search = () => {
  const location = useLocation();
  console.log(location.search);
  return <div>Search</div>;
};

export default Search;
