import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import About from "../about";
import Stats from "../stats";

import Evolution from "../evolution";

import "./pokemon-data.style.scss";

const PokemonData: React.FC = () => {
  const { name } = useParams();

  const [mode, setMode] = useState("about");
  const modes = ["about", "stats", "evolution"];

  useEffect(() => {
    setMode("about");
  }, [name]);

  return (
    <div className="pokemonData">
      <Container>
        <div className="pokemonData__nav">
          {modes.map((m, i) => (
            <span
              key={i}
              onClick={() => setMode(m)}
              className={`pokemonData__navItem ${
                m === mode ? "pokemonData__navItem--selected" : ""
              }`}
            >
              {m}
            </span>
          ))}
        </div>
        <div className="pokemonData__mainContent">
          {(() => {
            switch (mode) {
              case "about":
                return <About />;
              case "stats":
                return <Stats />;
              case "evolution":
                return <Evolution />;
              default:
            }
          })()}
        </div>
      </Container>
    </div>
  );
};

export default PokemonData;
