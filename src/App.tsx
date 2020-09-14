import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useLocation, useHistory } from "react-router-dom";

import { selectModules } from "./redux/modules/modules.selector";
import { selectPokedex } from "./redux/pokemons/pokemons.selector";
import { appendPokedexList } from "./redux/pokemons/pokemons.actions";
import { stopCatchMode, stopCatching } from "./redux/catch/catch.actions";
// import { selectRootState } from "./redux/root.selector";

import { baseUrl } from "./lib/constant";
import useFetch from "./lib/use-fetch";

import BottomNav from "./components/bottom-nav";
import TopBanner from "./components/top-banner";


import "./styles/app.scss";

function App() {
  // const rootState = useSelector(selectRootState);
  // console.log(JSON.stringify(rootState));

  const modules = useSelector(selectModules);
  const pokedexPokemons = useSelector(selectPokedex);

  const history = useHistory();

  const location = useLocation();

  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  const pokedexList = useFetch(`${baseUrl}/pokemon?limit=10&offset=${offset}`);

  const offsetAdd = () => {
    setOffset(offset + 10);
  };

  useEffect(() => {
    if (pokedexPokemons.length < 10 + offset && pokedexList.response) {
      console.log("jalan");
      dispatch(appendPokedexList(pokedexList.response.results));
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokedexList.response]);

  useEffect(() => {
    const whenScrolledToBottom = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        offsetAdd();
      }
    };

    if (!pokedexList.fetching && location.pathname === "/") {
      window.addEventListener("scroll", whenScrolledToBottom, { passive: true });
    }

    return () => window.removeEventListener("scroll", whenScrolledToBottom);
  });

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(stopCatchMode());
    dispatch(stopCatching());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className="App">
      <Route exact path={modules.main.map((module) => module.url)}>
        <TopBanner />
        {modules.main.map((module, i) => (
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
      {modules.others.map((module, i) => (
        <Route
          key={i}
          path={module.url}
          render={() => {
            const Component = module.component;
            return <Component />;
          }}
        />
      ))}
      <BottomNav />
    </div>
  );
}

export default App;
