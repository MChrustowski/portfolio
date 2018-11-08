import React from "react";
import { shallow } from "enzyme";
import Description, {
  Title,
  Icons,
  Description as ProjectDescription,
} from "../../../../src/components/presentional/projects/single-project/Description";
import Libraries from "../../../../src/components/presentional/projects/single-project/Libraries";

describe("<Description />", () => {
  let wrapped;
  const project = {
    name: "Project name",
    description: "Project description",
    technologies: [
      {
        name: "HTML",
        icon: "devicon-html5-plain colored",
      },
      {
        name: "CSS",
        icon: "devicon-css3-plain colored",
      },
    ],
    libraries: ["redux", "redux-persist"],
  };
  beforeEach(() => {
    wrapped = shallow(<Description {...project} />);
  });

  it("shows project title", () => {
    expect(wrapped.find(Title).length).toEqual(1);
    expect(wrapped.find(Title).prop("children")).toEqual("Project name");
  });

  it("shows project description", () => {
    expect(wrapped.find(ProjectDescription).length).toEqual(1);
    expect(wrapped.find(ProjectDescription).prop("children")).toEqual(
      "Project description"
    );
  });

  it("shows technologies icons", () => {
    expect(wrapped.find(Icons).find("i").length).toEqual(2);
    wrapped
      .find(Icons)
      .find("i")
      .forEach((node, i) => {
        expect(node.hasClass(project.technologies[i].icon)).toEqual(true);
      });
  });

  it("shows <Libraries />", () => {
    expect(wrapped.find(Libraries).length).toEqual(1);
  });
});
