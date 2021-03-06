import React from "react";
import { Row, Col } from "react-bootstrap";

import { MyPokemons } from "../../redux/my-pokemons/my-pokemons";

import PokemonCard from "../pokemon-card";

import "./pokemon-list.style.scss";
import { Link } from "react-router-dom";

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
        {pokemons.length === 0 && (
          <span className="pokemonList__warning">
            You Haven't Caught Any Pokemon Yet. Navigate to <Link to="/">Pokèdex</Link> now to catch
            some Pokèmons!
          </span>
        )}
      </Row>
    </div>
  );
};

export default PokemonLists;
