import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

import grey from '@material-ui/core/colors/grey';
import '../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

const useStyles = makeStyles((theme) => ({
  gallery: {
    display: 'flex',
    alignItems: 'center',
    justify: 'center',
    maxHeight: '1080px',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
    },
  },
  main: {
    marginTop: '5vh',
    marginBottom: theme.spacing(4),
  },
  subtitle: {
    color: grey[700],
  },
}));

const images = [
  /* {
   *   original: require('./../assets/img/header.jpg'),
   * },
   * {
   *   original: require('./../assets/img/header-games.jpg'),
   * }, */
  /* {
   *   original: require('./../assets/img/header-lol.jpg'),
   * },
   * {
   *   original: require('./../assets/img/header-rocketleague.jpg'),
   * }, */
  /* {
   *   original: require('./../assets/img/header-cancel.jpg'),
   * }, */
  {
    original: "assets/img/banner.png",
  },
];

function Header(props) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Container maxWidth="md" className={styles.main}>
        <Typography variant="h5" className={styles.subtitle}>
          {props.subtitle}
        </Typography>
      </Container>
      <ImageGallery
        lazyLoad={true}
        items={images}
        className={styles.gallery}
        slideInterval={5000}
        slideDuration={1000}
        autoPlay={true}
        showPlayButton={false}
        showThumbnails={false}
        showFullscreenButton={false}
      />
    </div>
  );
}

export default Header;
