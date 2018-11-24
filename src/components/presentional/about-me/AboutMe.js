import React from "react";

import ShortInformations from "./ShortInformations";
import Technologies from "./Technologies";

export default props => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-8">
          <ShortInformations />
        </div>
        <div className="col-lg-4">
          <Technologies />
        </div>
      </div>
    </div>
  );
};
