import React from "react";

function Search({ searchPokemon }) {
  return (
    <div className="ui search" onChange={(e) => searchPokemon(e.target.value)}>
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
