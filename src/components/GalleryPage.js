import * as React from 'react';
import _ from 'lodash';

import ImageGallery from './ImageGallery';

import {
    Typography,
} from '@material-ui/core';

import grey from '@material-ui/core/colors/grey';
import { red } from '@material-ui/core/colors';

/*const photos = _.times(93, n => ({
  id: `${n}`,
  src: '/assets/img/pictures/' + `${n + 1}).jpg`,
  width: 4,
  height: 3,
}));*/

function GalleryPage() {

  {/*return <ImageGallery images={photos} />;*/}

    return(
      <div>
        <br/>
        <Typography variant="h5" align="center">
            <a href='gallery2022'>HEHLAN 2022</a><br/>
            <a href='gallery/2019'>HEHLAN 2019</a><br/>
            <a href='gallery/2018'>HEHLAN 2018</a><br/>
            <a href='gallery/2015'>HEHLAN 2015</a><br/>
            <a href='gallery/2013'>HEHLAN 2013</a><br/>
            <a href='gallery/2012'>HEHLAN 2012</a><br/>
            <a href='gallery8'>HEHLAN 8</a><br/>
            <a href='gallery7'>HEHLAN 7</a><br/>
            <a href='gallery5'>HEHLAN 5</a><br/>
            <a href='gallery/3'>HEHLAN 3</a><br/>
        </Typography>
      </div>
    )

}

export default GalleryPage;