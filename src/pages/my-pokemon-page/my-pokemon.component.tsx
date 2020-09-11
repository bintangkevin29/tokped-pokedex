import React from "react";
import { Container } from "react-bootstrap";
import PokemonLists from "../../components/pokemon-list";
import { useSelector } from "react-redux";
import { selectMyPokemons } from "../../redux/my-pokemons/my-pokemons.selector";

const MyPokemonPage: React.FC = () => {
  const myPokemons = useSelector(selectMyPokemons);
  return (
    <div className="myPokemon">
      <Container>
        <PokemonLists pokemons={myPokemons} />
      </Container>
    </div>
  );
};

export default MyPokemonPage;
