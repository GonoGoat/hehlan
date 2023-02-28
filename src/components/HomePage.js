import * as React from 'react';

import {
  Button,
  Paper,
  Divider,
  Fade,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { Alert, AlertTitle } from '@material-ui/lab';

import Gallery from 'react-photo-gallery';

import FaqCard from './FaqCard';
import GameCard from './GameCard';
import SponsorCard from './SponsorCard';
import Header from './Header';
import MyDialog from './MyDialog';

import { games } from '../constants/games';
import { faqPosts } from '../constants/faqPosts';
import { sponsors } from '../constants/sponsors';
import { subtitle, title } from '../constants/header';
import { internalRules } from '../constants/internalRules';

import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  btnInscription: {
    marginTop: theme.spacing(4),
    display: 'block',
    width: `${theme.spacing(3)}em`,
    margin: '0 auto',
  },
  typo: {
    margin: '1em',
  },
  greySection: {
    padding: theme.spacing(4),
    backgroundColor: grey[100],
  },
  inscriptionStatus: {
    color: red[700],
  },
  rootInscription: {
    width: '100%',
    margin: '0 auto',
    marginBottom: `${theme.spacing(0.4)}em`,
    maxWidth: 360,
  },
  section1: {
    paddingTop: theme.spacing(2),
    margin: theme.spacing(3, 2),
  },
  section2: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(1, 1, 1),
  },
  title: {
    color: grey[900],
    fontWeight: 500,
  },
  whiteSection: {
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
  },
}));

function HomePage() {
  const [openChart, setOpenChart] = React.useState(false);

  const styles = useStyles();

  /*function getSteps() {
    return ["S'inscrire", 'Rejoindre une équipe', 'Payer'];
  };

  function handleChartOpen () {
    setOpenChart(true);
  };

  function handleChartClose () {
    setOpenChart(false);
  };

  function handleSignUpOpen() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe5J1fNpDI2XcVdMxUmV5H9hqnQbxlpx9b2NwNrNP_-UCJzJg/viewform';
  };*/

  return (
    <div className={styles.root}>
      <Alert severity="info">
        <AlertTitle>Inscriptions ouvertes !</AlertTitle>
        <div>
          Les inscriptions seront ouvertes du 1 février au 10 mars.
        </div>
      </Alert>
      {/*<MyDialog
        close={internalRules.close}
        content={internalRules.content}
        file="assets/charts/internalRules.pdf"
        onClose={handleChartClose}
        open={openChart}
        title={internalRules.title}
      />*/}
      <Header title={title} subtitle={subtitle} />
      <div className={styles.greySection}>
        <Typography
          align="center"
          className={styles.mainTitle}
          component="h1"
          gutterBottom
          variant="h4"
        >
          Quels sont les jeux proposés ?
        </Typography>
        <Grid container alignItems="center" justify="space-evenly">
          {games.map((game, index) => (
            <Fade in={true} key={game.title} timeout={(index + 1) * 1000}>
              <Grid item xs={12} sm={6} md={4}>
                <GameCard
                  description={game.description}
                  file={game.file}
                  picture={game.picture}
                  title={game.title}
                />
              </Grid>
            </Fade>
          ))}
        </Grid>
        <Typography align="center">
          Notez que chaque participant est soumis aux différentes chartes, au
          <a href="../assets/charts/ReglementOrdreInterieurHEHLan.pdf" target='_blank'>
            <Button color="secondary" className={styles.button}>
            règlement d'ordre intérieur
            </Button>
          </a>
          <br/>
          ainsi qu'à l'
          <a href="../assets/charts/Autorisation_parentale.pdf" target='_blank'>
            <Button color="secondary" className={styles.button}>
            autorisation parentale
            </Button>
          </a>
          si le participant est mineur.
        </Typography>
      </div>
      <div className={styles.whiteSection}>
        <Typography
          align="center"
          className={styles.mainTitle}
          component="h1"
          gutterBottom
          variant="h4"
        >
          S'inscrire
        </Typography>
        {/*<Typography align="center" gutterBottom variant="h6">
          Les inscriptions se font principalement en <strong>3 étapes</strong> :
          </Typography>*/}
        {/*<Stepper activeStep={0} alternativeLabel>
          {getSteps().map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>*/}
        <Paper className={styles.rootInscription}>
          <div className={styles.section1}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  Inscriptions
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6">
                  10 €
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2" gutterBottom>
              Les inscriptions étant ouvertes, vous avez l'opportunité de sélectionner le(s)
              tournoi(s) auquel(s) vous souhaitez vous inscrire et de choisir votre/vos équipe(s)
              </Typography>
            {/*<Typography color="textSecondary" variant="body2" gutterBottom>
              Les inscriptions sont fermées.
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Pour les joueurs désirant compléter une équipe,
              contactez-nous sur notre page Facebook !
            </Typography>*/}
            <br/>
            <Typography color="textSecondary">
              <strong>ATTENTION :</strong> Pas de paiement sur place !
            </Typography>
          </div>
          <Divider variant="middle" />
          {/*<div className={styles.section2}>
            <Typography variant="body1">
              Status : <strong className={styles.inscriptionStatus}>Fermées</strong>
            </Typography>
          </div>*/}
          <div className={styles.section3}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd82xwovRPRVZslOhu5ZGfiyVRv4CiVzuNA_fJUS73Ne_Fj8Q/viewform" target='_blank'>
            <Button size="large" color="secondary">
              S'inscrire
            </Button>
            </a>
          </div>
        </Paper>
        <Typography align="center" gutterBottom variant="h5">
          Les places sont limitées !
        </Typography>
      </div>
      <div className={styles.greySection}>
        <Typography
          align="center"
          className={styles.mainTitle}
          component="h1"
          gutterBottom
          variant="h4"
        >
          FAQ
        </Typography>
        <Grid container alignItems="center" justify="space-evenly">
          {faqPosts.map((faqPost, index) => (
            <Fade in={true} key={faqPost.title} timeout={(index + 1) * 1000}>
              <Grid item xs={12} sm={6} md={4}>
                <FaqCard title={faqPost.title} icon={faqPost.icon} content={faqPost.content} />
              </Grid>
            </Fade>
          ))}
        </Grid>
      </div>
      <div className={styles.whiteSection}>
        <Typography
          align="center"
          className={styles.mainTitle}
          component="h1"
          gutterBottom
          variant="h4"
        >
          Sponsors
        </Typography>
        <Typography align="center" gutterBottom variant="h6">
          <strong>Merci à nos sponsors</strong>, sans leur aide la HEH LAN ne serait pas possible :
        </Typography>
        {/*<Gallery photos={sponsors} />

          <Grid container alignItems="center" justify="space-evenly">
            {sponsors.map((sponsor: any, index: number) => (
            <Fade in={true} key={sponsor.name} timeout={(index + 1) * 1000}>
            <img src={sponsor.img} alt={sponsor.name} width="100" height="100" />
            </Fade>
            ))}
            </Grid>*/}
          <Grid container alignItems="center" justify="space-evenly">
          {sponsors.map((sponsor, index) => (
              <Fade in={true} key={sponsor.name} timeout={(index + 1) * 1000}>
              <Grid item xs={12} sm={6} md={4}>
                <SponsorCard
                  lien={sponsor.lien}
                  picture={sponsor.picture}
                />
              </Grid>
              </Fade>
          ))}
          </Grid>
      </div>
    </div>
  );
}

export default HomePage;
