import * as React from 'react';
import { Typography,Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
    container: {
        [theme.breakpoints.up('sm')]: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
    },
    footer: {
        borderTop: `1px solid ${grey[200]}`,
        padding: theme.spacing(4),
    },
    footerLink: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    footerText: {
        margin: `${theme.spacing(0.1)}em ${theme.spacing(0.25)}em`,
    },
    logo: {
    /* boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', */
    },
}));
function Footer(props) {
    const styles = useStyles();

    return (
        <footer className={styles.footer}>
          <Container maxWidth="sm" className={styles.container}>
            <div className={styles.footerText}>
              <Typography component="p" align="center" variant="h7">
                Copyright &copy; {new Date().getFullYear()} &mdash; <a href="#">HEH LAN</a>
              </Typography>
              {/*<Typography component="p" align="center" variant="h7">
                Contact via <a href="mailto:contact@hehlan.be">contact@hehlan.be</a>
              </Typography>*/}
            </div>
            <a href="https://www.heh.be/" rel="noreferrer" target="_blank" className={styles.footerLink}>
              <img
                src="assets/logos/heh-full.png"
                width="230"
                height="83"
                className={styles.logo}
                alt="logo"
              />
            </a>
          </Container>
        </footer>
      );
}
export default Footer;