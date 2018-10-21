import React from "react";
import { shallow } from "enzyme";

import TechItem from "../../../src/components/presentional/about-me/TechItem";

let wrapped;

beforeEach(() => {
  wrapped = shallow(
    <TechItem
      name="JavaScript"
      icon="devicon-javascript-plain colored"
      rate="★★★★"
      lack="★"
    />
  );
});

it("shows item icon", () => {
  expect(
    wrapped
      .find('[id="icon"]')
      .find("i")
      .prop("className")
  ).toEqual("devicon-javascript-plain colored");
});

it("shows item name", () => {
  expect(wrapped.find('[id="name"]').text()).toEqual("JavaScript");
});

it("shows rating", () => {
  expect(wrapped.find('[id="rate"]').text()).toEqual("★★★★★");
});
