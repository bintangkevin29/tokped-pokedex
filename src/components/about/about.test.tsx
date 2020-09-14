import React from "react";
import { mount, ReactWrapper } from "enzyme";
import About from "./about.component";
import { findByAttr } from "../../lib/test-utils";
import { MemoryRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("About Component", () => {
  const pokemonName = "bulbasaur";
  const testUrl = `/details/${pokemonName}`;

  let component: ReactWrapper;
  beforeEach(() => {
    component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[testUrl]}>
          <Route path="/details/:name">
            <About />
          </Route>
        </MemoryRouter>
      </Provider>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  it("Should Render", () => {
    const wrapper = findByAttr(component, "about");
    expect(wrapper.hostNodes().length).toBe(1);
  });
});
