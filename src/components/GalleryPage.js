import * as React from 'react';
import _ from 'lodash';

import ImageGallery from './ImageGallery';

const photos = _.times(93, n => ({
  id: `${n}`,
  src: 'assets/img/pictures/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));

function GalleryPage() {
  return <ImageGallery images={photos} />;
}

export default GalleryPage;
