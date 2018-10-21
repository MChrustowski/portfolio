import React from "react";
import { shallow } from "enzyme";

import NavLink from "../../../src/components/presentional/navbar/NavLink";
import { LinkStyle } from "../../../src/components/presentional/navbar/NavLink";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<NavLink name="Projects" url="projects" />);
});

it("shows single link", () => {
  expect(wrapped.find(LinkStyle).length).toEqual(1);
});

it("contains proper name", () => {
  expect(
    wrapped
      .find(LinkStyle)
      .find("p")
      .text()
  ).toEqual("Projects");
});

it("contains proper url", () => {
  expect(wrapped.find(LinkStyle).prop("to")).toEqual("/#projects");
});
