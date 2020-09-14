import React, { Children } from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Middleware } from "redux";
import mockState from "./mockState";
import { Route } from "react-router-dom";

export const MockProvider: React.FC = ({ children }) => {
  const middlewares: Middleware | [] = [];
  const configMockStore = configureStore(middlewares);
  const mockStore = configMockStore(mockState);
  return <Provider store={mockStore}>{children}</Provider>;
};

export const PokemonDetailsRoute: React.FC = ({ children }) => {
  return <Route path="/details/:name">{children}</Route>;
};
