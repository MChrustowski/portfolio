import React from "react";
import { shallow } from "enzyme";

import ProjectButton, {
  Button,
} from "../../../../src/components/presentional/projects/single-project/ProjectButton";

describe("<ProjectButton />", () => {
  let wrapped;
  let button;
  const projectUrl = "https://github.com/MChrustowski/react_native_todo";
  beforeEach(() => {
    wrapped = shallow(<ProjectButton url={projectUrl} />);
    button = wrapped.find(Button);
  });

  it("shows <Button />", () => {
    expect(button.length).toEqual(1);
  });

  it("<Button /> has proper className", () => {
    expect(button.hasClass("btn btn-block")).toBeTruthy();
  });

  it("shows proper background color", () => {
    expect(button.prop("style").backgroundColor).toEqual("#363636");
  });

  it("contains link to the repository", () => {
    expect(button.find("a").prop("href")).toEqual(projectUrl);
    expect(button.find("a").prop("target")).toEqual("_blank");
  });

  it("shows proper <Button> text", () => {
    expect(button.find("a").prop("children")).toEqual("GitHub");
  });
});
