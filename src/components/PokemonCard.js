import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isFront, setIsFront] = useState(true);

  const flipCard = () => {
    setIsFront(!isFront)
  }
  return (
    <Card>
      <div onClick={flipCard}>
        <div className="image">
          <img alt={pokemon.name} src={isFront ? pokemon.sprites.front : pokemon.sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} HP
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
