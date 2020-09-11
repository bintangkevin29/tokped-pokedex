import React, { Fragment } from "react";

import "./stats.style.scss";
import { Row, Col, ProgressBar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";

const Stats: React.FC = () => {
  const { name } = useParams();

  const pokemon = useSelector(selectPokemonByName(name));
  const pokemonDetails = pokemon?.details;

  return (
    <div className="stats">
      <Row className="stats__inner">
        {pokemonDetails?.stats.map((stat, i) => (
          <Fragment key={i}>
            <Col className="stats__name" xs={4}>
              {stat.stat.name.replace("special", "sp").replace("-", ". ")}
            </Col>
            <Col className="stats__name" xs={8}>
              <ProgressBar
                variant={stat.base_stat < 50 ? "primary" : "water"}
                now={stat.base_stat}
              />
            </Col>
          </Fragment>
        ))}
      </Row>
    </div>
  );
};

export default Stats;
