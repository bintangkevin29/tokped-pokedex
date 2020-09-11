import React, { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import "./evolution.style.scss";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";
import { EvolutionChain, PokemonEvolutionNew } from "../../redux/pokemons/pokemons";

import Axios from "axios";
import { baseUrl } from "../../lib/constant";

const Evolution: React.FC = () => {
  const { name } = useParams();
  const pokemon = useSelector(selectPokemonByName(name));
  const pokemonEvolution = pokemon?.evolution;

  const [evolution, setEvolution] = useState<PokemonEvolutionNew[]>([]);

  const addToEvolutionArray = (
    name: string,
    evolutionChain: EvolutionChain,
    tempEvolution: PokemonEvolutionNew[] = []
  ) => {
    
    Axios(`${baseUrl}/pokemon/${evolutionChain.species.name}`).then((res) => {
      const newObject = {
        name: evolutionChain.species.name,
        sprites: `https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`,
        url: `/details/${evolutionChain.species.name}`,
        minLevel: evolutionChain.evolution_details[0]?.min_level,
      };

      tempEvolution = [...tempEvolution, newObject];

      if (evolutionChain.evolves_to.length > 0) {
        addToEvolutionArray(
          evolutionChain.evolves_to[0].species.name,
          evolutionChain.evolves_to[0],
          tempEvolution
        );
      } else {
        setEvolution(tempEvolution);
      }
    });
  };

  useEffect(() => {
    if (pokemonEvolution) {
      addToEvolutionArray(name, pokemonEvolution?.chain);
    }
  }, [pokemonEvolution]);

  // {evolution?.map((evo) => evo.name)}

  return (
    <div className="evolution">
      {evolution?.map((evo, i) => (
        <Link to={evo.url} key={i} className="evolution__pokemon">
          {evo.minLevel && (
            <div className="evolution__arrow">
              <AiOutlineArrowDown />
            </div>
          )}
          <div className="evolution__imageContainer">
            <img
              className={`evolution__spritesBackground ${
                evo.name === name && "evolution__spritesBackground--current"
              }`}
              src={require("../../assets/images/pokemon.svg")}
            />
            <img className="evolution__pokemonSprites" src={evo.sprites} alt="" />
          </div>
          <span className="evolution__level">Level {evo.minLevel ? evo.minLevel : "1"}</span>
          <div className="evolution__pokemonName">{evo.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Evolution;
