import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemonData(data))
  },[])
  
  const searchPokemon = (searchText) => {
    setSearchInput(searchText)
  }

  const addNewPokemon = (newPokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(res => res.json())
    .then(setPokemonData(
      [...pokemonData, newPokemon]
    ))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search searchPokemon={searchPokemon}/>
      <br />
      <PokemonCollection pokemonData={pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))}/>
    </Container>
  );
}

export default PokemonPage;
