import React from "react";
import { shallow } from "enzyme";

import Projects from "../../../src/components/presentional/projects/Projects";
import SingleProject from "../../../src/components/presentional/projects/SingleProject";
import Header from "../../../src/components/presentional/ui/Header";

let wrapped;

describe("<Projects />", () => {
  beforeEach(() => {
    wrapped = shallow(<Projects />);
  });

  it("shows <Header> component", () => {
    expect(wrapped.find(Header).length).toEqual(1);
  });

  it("shows <Header> component with children prop", () => {
    expect(wrapped.find(Header).prop("children")).toEqual("PROJECTS");
  });

  it("shows 9 projects", () => {
    expect(wrapped.find(SingleProject).length).toEqual(9);
  });
});
