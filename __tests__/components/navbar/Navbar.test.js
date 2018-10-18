import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../../src/components/navbar/Navbar";

it("renders without errors", () => {
  shallow(<Navbar />);
});
