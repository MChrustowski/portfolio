import React from "react";
import { shallow } from "enzyme";

import AboutMe from "../../../src/components/presentional/about-me/AboutMe";
import ShortInformations from "../../../src/components/presentional/about-me/ShortInformations";
import Technologies from "../../../src/components/presentional/about-me/Technologies";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<AboutMe />);
});

it("contains ShortInformations component", () => {
  expect(wrapped.find(ShortInformations).length).toEqual(1);
});

it("contains Technologies component", () => {
  expect(wrapped.find(Technologies).length).toEqual(1);
});
