import React, { useState } from "react";

import About from "../about";

import "./pokemon-data.style.scss";
import { Container } from "react-bootstrap";

const PokemonData: React.FC = () => {
  const [mode, setMode] = useState("about");
  const modes = ["about", "stats", "evolution", "moves"];

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
              default:
            }
          })()}
        </div>
      </Container>
    </div>
  );
};

export default PokemonData;
