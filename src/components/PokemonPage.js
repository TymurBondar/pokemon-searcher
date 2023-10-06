import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [searchedName, setSearchedName] = useState("");
  const [cardsToDisplay, setcardsToDisplay] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemons => setcardsToDisplay(pokemons));
  }, []);

  function filterByName(event){
    setSearchedName(event.target.value);
  };
 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchedName={searchedName} filterByName={filterByName}/>
      <br />
      <PokemonCollection cardsToDisplay={cardsToDisplay.filter(card => card.name.includes(searchedName))} />
    </Container>
  );
}

export default PokemonPage;
