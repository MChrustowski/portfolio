import React from "react";
import { shallow } from "enzyme";

import Technologies from "../../../src/components/presentional/about-me/Technologies";
import TechItem from "../../../src/components/presentional/about-me/TechItem";
import Header from "../../../src/components/presentional/ui/Header";

let wrapped;

describe("<Technologies />", () => {
  beforeEach(() => {
    wrapped = shallow(<Technologies />);
  });

  it("shows header", () => {
    expect(wrapped.find(Header).length).toEqual(1);
    expect(wrapped.find(Header).prop("children")).toEqual("TECHNOLOGIES");
  });

  it("shows table with items", () => {
    expect(wrapped.find("table").length).toEqual(1);
    expect(wrapped.find(TechItem).length).toEqual(8);
  });
});
