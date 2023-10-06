import React from "react";

function Search({searchedName, filterByName }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={filterByName} value={searchedName} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
