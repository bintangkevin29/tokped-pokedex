import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { selectModules } from "./redux/modules/modules.selector";

import BottomNav from "./components/bottom-nav";
import TopBanner from "./components/top-banner";

import "./styles/app.scss";

function App() {
  const modules = useSelector(selectModules);

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
