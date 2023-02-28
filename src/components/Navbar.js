import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Hidden,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: grey[100],
  },
  brand: {
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(2),
      margin: 0,
    },
    height: '100%',
  },
  divider: {
    color: theme.palette.primary.dark,
    margin: `auto ${theme.spacing(0.1)}em`,
    [theme.breakpoints.down('xs')]: {
      margin: `auto 0`,
    },
  },
  itemLink: {
    display: 'flex',
    height: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
      margin: 0,
    },
  },
  navigation: {
    display: 'flex',
  },
}));

function Navbar(props) {
  const styles = useStyles();

  return (
    <AppBar position="relative" className={styles.appBar} elevation={1}>
      <Toolbar>
        <Hidden xsDown>
          <a href="#" className={styles.brand}>
            <img src="assets/logos/hehlan.png" height="80" alt="logo" />
          </a>
        </Hidden>
        <nav
          role="navigation"
          id="navigation"
          className={styles.navigation}
          style={{ textTransform: 'uppercase' }}
        >
          <Link to="/" className={styles.itemLink}>
            Accueil
          </Link>
          {/*<a target='_blank' rel="noreferrer" href="https://docs.google.com/spreadsheets/d/1XUrxXMh2QxRR81ZXRCZXn8Cl1lQ5iNtWk_6lL2J5g7o/edit#gid=0" className={styles.itemLink}>
            Planning
          </a>*/}
          <Link to="/gallery" className={styles.itemLink}>
            Galerie
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd82xwovRPRVZslOhu5ZGfiyVRv4CiVzuNA_fJUS73Ne_Fj8Q/viewform" target='_blank' rel="noreferrer">
            <Button size="medium" color="secondary">
              S'inscrire
            </Button>
          </a>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
