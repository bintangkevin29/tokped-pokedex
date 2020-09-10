import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import { selectPokedex } from "../../redux/pokemons/pokemons.selector";

import { baseUrl } from "../../lib/constant";
import useFetch from "../../lib/use-fetch";

import PokemonList from "../../components/pokemon-list";

import { appendPokedexList } from "../../redux/pokemons/pokemons.actions";

import "./pokedex-page.style.scss";
import CustomSpinner from "../../components/custom-spinner";

const PokedexPage: React.FC = () => {
  const dispatch = useDispatch();

  const pokedexPokemons = useSelector(selectPokedex);

  const [offset, setOffset] = useState(0);

  const pokedexList = useFetch(`${baseUrl}/pokemon?limit=10&offset=${offset}`);

  const offsetAdd = () => {
    setOffset(offset + 10);
  };

  useEffect(() => {
    if (pokedexPokemons.length < 10 + offset && pokedexList.response) {
      dispatch(appendPokedexList(pokedexList.response.results));
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokedexList.response]);

  useEffect(() => {
    const whenScrolledToBottom = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        offsetAdd();
        console.log("jalan");
      }
    };

    if (!pokedexList.fetching) {
      window.addEventListener("scroll", whenScrolledToBottom, { passive: true });
    }

    return () => window.removeEventListener("scroll", whenScrolledToBottom);
  });

  return (
    <section className="pokedex">
      <Container>
        <PokemonList pokemons={pokedexPokemons} />
        {pokedexList.fetching && <CustomSpinner />}
      </Container>
    </section>
  );
};

export default PokedexPage;
