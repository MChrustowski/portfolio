import React from "react";
import { shallow } from "enzyme";

import Libraries, {
  Header,
  LibraryTag,
} from "../../../../src/components/presentional/projects/single-project/Libraries";

describe("<Libraries />", () => {
  let wrapped;
  const libraries = ["redux", "redux-persist"];
  beforeEach(() => {
    wrapped = shallow(<Libraries libraries={libraries} />);
  });

  it("shows header with proper text", () => {
    expect(wrapped.find(Header).length).toEqual(1);
    expect(wrapped.find(Header).prop("children")).toEqual(
      "Additional libraries"
    );
  });

  it("it shows libraries names", () => {
    wrapped.find(LibraryTag).forEach((node, i) => {
      expect(node.prop("children")).toEqual(libraries[i]);
    });
  });
});
