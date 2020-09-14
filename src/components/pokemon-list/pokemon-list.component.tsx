import React from "react";
import { Row, Col } from "react-bootstrap";

import { MyPokemons } from "../../redux/my-pokemons/my-pokemons";

import PokemonCard from "../pokemon-card";

import "./pokemon-list.style.scss";

interface Props {
  pokemons: MyPokemons[];
}

const PokemonLists: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="pokemonList" data-test="pokemonList">
      <Row>
        {pokemons.map((pokemon, i) => (
          <Col xs={12} key={i}>
            <PokemonCard pokemonData={pokemon} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokemonLists;
