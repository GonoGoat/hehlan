import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';

import MyDialog from './MyDialog';

const useStyles = makeStyles((theme) => ({
  actionArea: {
    width: '100%',
  },
  actions: {
    display: 'flex',
  },
  card: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    },
    margin: theme.spacing(2, 0),
  },
  description: {
    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function GameCard(props) {

  const [open, setOpen] = React.useState(false);
  const styles = useStyles();

  function handleClose () {
    setOpen(false);
  };

  function handleOpen () {
    setOpen(true);
  };

  return (
    <div>
      <Card className={styles.card}>
        <CardActionArea className={styles.actionArea} component={Link} to={`/`}>
          <CardMedia className={styles.media} image={props.picture} />
          <CardContent className={styles.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography component="p" className={styles.description}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider light />
        <CardActions className={styles.cardActions}>
          <div>
            <a href="../assets/charts/ReglementTournois.pdf" target='_blank'>
            <Button className={styles.actions} color="secondary">
            Lire le règlement des tournois
            </Button>
            </a>
          </div>
        </CardActions>
      </Card>
      {/*<MyDialog
        open={open}
        file={props.file}
        onClose={handleClose}
        title={props.chartTitle}
        content={props.chart}
        close={'Fermer'}
      />*/}
    </div>
  );
}

export default GameCard;
