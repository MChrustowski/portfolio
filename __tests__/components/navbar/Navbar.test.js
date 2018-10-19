import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../../src/components/navbar/Navbar";
import Logo from "../../../src/components/navbar/Logo";
import NavLink from "../../../src/components/navbar/NavLink";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Navbar />);
});

it("shows a Logo component", () => {
  expect(wrapped.find(Logo).length).toEqual(1);
});

it("shows 4 NavLink components", () => {
  expect(wrapped.find(NavLink).length).toEqual(4);
});
