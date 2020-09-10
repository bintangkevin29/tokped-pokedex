import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import { selectPokedex } from "../../redux/pokemons/pokemons.selector";

import { baseUrl } from "../../lib/constant";
import useFetch from "../../lib/use-fetch";

import PokemonList from "../../components/pokemon-list";

import "./pokedex-page.style.scss";
import { appendPokedexList } from "../../redux/pokemons/pokemons.actions";

const PokedexPage: React.FC = () => {
  const dispatch = useDispatch();

  const pokedexPokemons = useSelector(selectPokedex);

  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const pokedexList = useFetch(`${baseUrl}/pokemon?limit=${limit}&offset=${offset}`);

  useEffect(() => {
    if (pokedexPokemons.length < limit + offset && pokedexList.response) {
      dispatch(appendPokedexList(pokedexList.response.results));
    }
  });

  return (
    <section className="pokedex">
      <Container>
        <PokemonList pokemons={pokedexPokemons} />
      </Container>
    </section>
  );
};

export default PokedexPage;
