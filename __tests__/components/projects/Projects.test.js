import React from "react";
import { mount } from "enzyme";

import Projects from "../../../src/components/presentional/projects/Projects";
import SingleProject, {
  Container,
} from "../../../src/components/presentional/projects/SingleProject";
import Header from "../../../src/components/presentional/ui/Header";
import Gallery from "../../../src/components/presentional/projects/single-project/Gallery";

let wrapped;

describe("<Projects />", () => {
  beforeEach(() => {
    wrapped = mount(<Projects />);
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
