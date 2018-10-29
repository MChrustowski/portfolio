import React from "react";
import { shallow } from "enzyme";

import Header, { H2 } from "../../../src/components/presentional/ui/Header";

const wrapped = shallow(<Header>Projects</Header>);

it("shows h2", () => {
  expect(wrapped.find(H2).length).toEqual(1);
});

it("shows passed children prop", () => {
  expect(wrapped.find(H2).prop("children")).toEqual("Projects");
});
