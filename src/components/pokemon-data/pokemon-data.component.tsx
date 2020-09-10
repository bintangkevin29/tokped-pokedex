import React, { useState } from "react";

import "./pokemon-data.style.scss";

const PokemonData: React.FC = () => {
  const [mode, setMode] = useState('about');
  const modes = ["about", "stats", "evolution", "moves"];

  return (
    <div className="pokemonData">
      <div className="pokemonData__nav">
        {modes.map((m) => (
          <span
            onClick={() => setMode(m)}
            className={`pokemonData__navItem ${m === mode ? "pokemonData__navItem--selected" : ""}`}
          >
            {m}
          </span>
        ))}
      </div>
      <div className="pokemonData__nav">
        {modes.map((m) => (
          <span
            onClick={() => setMode(m)}
            className={`pokemonData__navItem ${m === mode ? "pokemonData__navItem--selected" : ""}`}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonData;
