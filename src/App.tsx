import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import { selectModules } from "./redux/modules/modules.selector";

import BottomNav from "./components/bottom-nav";
import TopBanner from "./components/top-banner";

import "./styles/app.scss";
import { selectPokedex } from "./redux/pokemons/pokemons.selector";
import useFetch from "./lib/use-fetch";
import { baseUrl } from "./lib/constant";
import { appendPokedexList } from "./redux/pokemons/pokemons.actions";

function App() {
  const modules = useSelector(selectModules);
  const pokedexPokemons = useSelector(selectPokedex);

  const dispatch = useDispatch();


  const [offset, setOffset] = useState(0);

  const pokedexList = useFetch(`${baseUrl}/pokemon?limit=20&offset=${offset}`);

  const offsetAdd = () => {
    setOffset(offset + 20);
  };

  useEffect(() => {
    if (pokedexPokemons.length < 20 + offset && pokedexList.response) {
      console.log("jalan");
      dispatch(appendPokedexList(pokedexList.response.results));
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokedexList.response]);

  useEffect(() => {
    const whenScrolledToBottom = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        offsetAdd();
      }
    };

    if (!pokedexList.fetching) {
      window.addEventListener("scroll", whenScrolledToBottom, { passive: true });
    }

    return () => window.removeEventListener("scroll", whenScrolledToBottom);
  });

  return (
    <div className="App">
      <Route exact path={modules.map((module) => module.url)}>
        <TopBanner />
        {modules.map((module, i) => (
          <Route
            key={i}
            exact
            path={module.url}
            render={() => {
              const Component = module.component;
              return <Component />;
            }}
          />
        ))}
      </Route>
      <BottomNav />
    </div>
  );
}

export default App;
