import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import { selectPokedex } from "../../redux/pokemons/pokemons.selector";

import PokemonList from "../../components/pokemon-list";

import "./pokedex-page.style.scss";

const PokedexPage: React.FC = () => {
  const pokedexPokemons = useSelector(selectPokedex);

  return (
    <section className="pokedex">
      <Container>
        <PokemonList pokemons={pokedexPokemons} />
      </Container>
    </section>
  );
};

export default PokedexPage;
