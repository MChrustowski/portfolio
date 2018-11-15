import React, { Fragment } from "react";
import ImageGallery from "react-image-gallery";

import CloseButton from "../../../presentional/ui/CloseButton";

import "react-image-gallery/styles/css/image-gallery.css";

export default props => {
  const { screenshots } = props;
  return (
    <Fragment>
      <CloseButton closeModal={props.closeModal} />
      <ImageGallery
        items={screenshots}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
      />
    </Fragment>
  );
};
