import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cardsToDisplay}) {
  return (
    <Card.Group itemsPerRow={6}>
      {cardsToDisplay.map(card => <PokemonCard key={card.id} card={card}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
