import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

import { selectPokemonByName } from "../../redux/pokemons/pokemons.selector";

import "./about.style.scss";

const About: React.FC = () => {
  const { name } = useParams();
  const pokemon = useSelector(selectPokemonByName(name));

  const pokemonSpecies = pokemon?.species;
  const pokemonDetails = pokemon?.details;

  return (
    <div className="about" data-test="about">
      <span className="about__description">
        "{pokemonSpecies?.flavor_text_entries[0].flavor_text}"
      </span>

      <Table className="about__table" borderless>
        <tbody>
          <tr>
            <td className="about__dataName">Shape</td>
            <td className="about__dataDescription">{pokemonSpecies?.shape.name}</td>
          </tr>
          <tr>
            <td className="about__dataName">Height</td>
            <td className="about__dataDescription">
              {pokemonDetails && pokemonDetails?.height * 2.54} cm
            </td>
          </tr>
          <tr>
            <td className="about__dataName">Weight</td>
            <td className="about__dataDescription">
              {pokemonDetails && Math.floor(pokemonDetails?.weight * 0.453592)} kg
            </td>
          </tr>
          <tr>
            <td className="about__dataName">Abilities</td>
            <td className="about__dataDescription">
              {pokemonDetails?.abilities.map((ability) => ability.ability.name).join(", ")}
            </td>
          </tr>
        </tbody>
      </Table>

      <span className="about__header">Breeding</span>

      <Table className="about__table" borderless>
        <tbody>
          <tr>
            <td className="about__dataName">Gender</td>
            <td className="about__dataDescription">
              {pokemonSpecies && (
                <Fragment>
                  {(pokemonSpecies?.gender_rate / 8) * 100 + "%"}
                  <BiFemaleSign className="text-psychic" />
                  {", "}
                  {((8 - pokemonSpecies?.gender_rate) / 8) * 100 + "%"}
                  <BiMaleSign className="text-water" />
                </Fragment>
              )}
            </td>
          </tr>
          <tr>
            <td className="about__dataName">Egg Group</td>
            <td className="about__dataDescription">
              {pokemonSpecies?.egg_groups.map((egg) => egg.name).join(", ")}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default About;
