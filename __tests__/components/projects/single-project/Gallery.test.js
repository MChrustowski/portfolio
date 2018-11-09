import React from "react";
import { shallow } from "enzyme";
import ImageGallery from "react-image-gallery";

import Gallery from "../../../../src/components/presentional/projects/single-project/Gallery";

describe("<Gallery />", () => {
  let wrapped;
  let projectGallery;
  beforeEach(() => {
    wrapped = shallow(<Gallery />);
    projectGallery = wrapped.find(ImageGallery);
  });

  it("renders <ImageGallery />", () => {
    expect(projectGallery.length).toEqual(1);
  });

  it("has proper props", () => {
    expect(projectGallery.prop("showFullscreenButton")).toBeFalsy();
    expect(projectGallery.prop("showPlayButton")).toBeFalsy();
    expect(projectGallery.prop("showThumbnails")).toBeFalsy();
  });
});
