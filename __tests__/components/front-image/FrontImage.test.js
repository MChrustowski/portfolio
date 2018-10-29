import React from "react";
import { shallow } from "enzyme";
import Particles from "react-particles-js";

import FrontImage from "../../../src/components/presentional/front-image/FrontImage";
import particlesConfiguration from "../../../src/components/presentional/front-image/particles-configuration";

let wrapped;

describe("<FrontImage />", () => {
  beforeEach(() => {
    wrapped = shallow(<FrontImage />);
  });

  it("contains background image with alt text", () => {
    expect(wrapped.find("img").length).toEqual(1);
    expect(wrapped.find("img").prop("alt")).toEqual("front image");
  });

  it("shows <Particles /> component", () => {
    expect(wrapped.find(Particles).length).toEqual(1);
  });

  it("<Particles /> component has proper params prop", () => {
    expect(wrapped.find(Particles).prop("params")).toEqual(
      particlesConfiguration
    );
  });
});
