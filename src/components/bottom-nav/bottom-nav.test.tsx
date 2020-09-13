import React from "react";
import { mount } from "enzyme";
import BottomNav from "./bottom-nav.component";
import { findByAttr, findByClassName } from "../../lib/test-utils";

import { MemoryRouter } from "react-router-dom";

jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({
    main: [
      {
        name: "Pokèdex",
        url: "/",
      },
      {
        name: "My Pokèmons",
        url: "/my-pokemons",
      },
    ],
    others: [
      {
        name: "Pokèmon Details",
        url: "/details/:name",
      },
    ],
  }),
}));

describe("Bottom Nav Component", () => {
  const testUrl = "/";
  const component = mount(
    <MemoryRouter initialEntries={[testUrl]}>
      <BottomNav />
    </MemoryRouter>
  );

  it("Should Render", () => {
    const wrapper = findByAttr(component, "bottomNav");
    expect(wrapper.hostNodes().length).toBe(1);
  });

  it("Should render menu items based on redux state.", () => {
    const wrapper = findByAttr(component, "bottomNav__menuItems");
    expect(wrapper.hostNodes().length).toBe(2);
  });

  it("Should modify a menu item based on url", () => {
    const wrapper = findByClassName(component, "bottomNav__menuItems--selected");
    expect(wrapper.hostNodes().text()).toEqual("Pokèdex");
  });
});
