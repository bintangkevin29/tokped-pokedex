import React from "react";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { selectMyPokemons } from "../../redux/my-pokemons/my-pokemons.selector";

import PokemonLists from "../../components/pokemon-list";

const MyPokemonPage: React.FC = () => {
  const myPokemons = useSelector(selectMyPokemons);
  return (
    <div className="myPokemon">
      <Helmet>
        <title>My Pokèmons</title>
      </Helmet>
      <Container>
        <PokemonLists pokemons={myPokemons} />
      </Container>
    </div>
  );
};

export default MyPokemonPage;
