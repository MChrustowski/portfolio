import React from "react";
import { shallow } from "enzyme";

import Logo from "../../../src/components/navbar/Logo";
import logoImageSrc from "../../../src/assets/images/logo.png";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Logo />);
});

it("shows logo image", () => {
  expect(wrapped.find("img").length).toEqual(1);
  expect(wrapped.find("img").prop("src")).toEqual(logoImageSrc);
});
