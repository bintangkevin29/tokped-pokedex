import React from "react";

import BottomNav from "./components/bottom-nav";
import TopBanner from "./components/top-banner";

import "./styles/app.scss";
import { useSelector } from "react-redux";
import { selectModules } from "./redux/modules/modules.selector";
import { Route } from "react-router-dom";

function App() {
  const modules = useSelector(selectModules);

  return (
    <div className="App">
      <Route exact path={modules.map((module) => module.url)}>
        <TopBanner />
        {modules.map((module) => (
          <Route exact path={module.url} />
        ))}
        <BottomNav />
      </Route>
    </div>
  );
}

export default App;
