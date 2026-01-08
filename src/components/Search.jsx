import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onSearch } from "../features/searchingSlice";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center w-full h-15">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(onSearch(searchValue));
        }}
      >
        <input
          type="text"
          placeholder="Search News"
          className="bg-white text-black border-2 p-1 mx-1 border-black"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="text-white bg-gray-900 h-8 w-15" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
