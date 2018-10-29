import React from "react";
import { shallow } from "enzyme";

import ShortInformations from "../../../src/components/presentional/about-me/ShortInformations";
import avatar from "../../../src/assets/images/avatar.jpg";
import Header from "../../../src/components/presentional/ui/Header";

let wrapped;

describe("<ShortInformations />", () => {
  beforeEach(() => {
    wrapped = shallow(<ShortInformations />);
  });

  it("shows header", () => {
    expect(wrapped.find(Header).length).toEqual(1);
    expect(wrapped.find(Header).prop("children")).toEqual("ABOUT ME");
  });

  it("shows author's photo", () => {
    expect(wrapped.find("img").length).toEqual(1);
    expect(wrapped.find("img").prop("src")).toEqual(avatar);
  });

  it("shows author informations", () => {
    expect(wrapped.find("p").length).toEqual(1);
  });
});
