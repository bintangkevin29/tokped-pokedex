import React from "react";

import "./pokemon-list.style.scss";
import PokemonCard from "../pokemon-card";
import { PokemonList } from "../../redux/pokemons/pokemons";
import { Row, Col } from "react-bootstrap";

interface Props {
  pokemons: PokemonList[];
}

const PokemonLists: React.FC<Props> = ({ pokemons }) => {
  return (
    <div className="pokemonList">
      <Row>
        {pokemons.map((pokemon, i) => (
          <Col xs={12} md={6} xl={4} key={i}>
            <PokemonCard pokemonDetailUrl={pokemon.url} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PokemonLists;
