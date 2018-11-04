import React from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

export default props => {
  const { screenshots } = props;
  return (
    <ImageGallery
      items={screenshots}
      showFullscreenButton={false}
      showPlayButton={false}
      showThumbnails={false}
    />
  );
};
