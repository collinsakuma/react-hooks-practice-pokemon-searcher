import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {
  const renderPokemonCards = pokemonData.map(pokemon => (
      <PokemonCard key={pokemon.id}  pokemon={pokemon}/>
  ))
  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
