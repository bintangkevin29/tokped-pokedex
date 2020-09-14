import React from "react";
import { ReactWrapper, mount } from "enzyme";
import Evolution from "./evolution.component";
import { findByAttr } from "../../lib/test-utils";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { MemoryRouter, Route } from "react-router-dom";

describe("Evolution Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[testUrl]}>
          <Route path="/details/:name">
            <Evolution />
          </Route>
        </MemoryRouter>
      </Provider>
    );
  });
  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "evolution");
    expect(wrapper.hostNodes().length).toBe(1);
  });
});
