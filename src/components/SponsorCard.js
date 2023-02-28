import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  makeStyles
} from '@material-ui/core';

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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  }));
  
  function SponsorCard(props) {
  
    const [open, setOpen] = React.useState(false);
    const styles = useStyles();

    return (
        <div>
          <Card className={styles.card}>
            <CardActionArea className={styles.actionArea} component={Link}>
                <CardMedia className={styles.media} image={props.picture} />
            </CardActionArea>
            <CardActions className={styles.cardActions}>
          <div>
            <a href={props.lien} target='_blank'>
                <Button className={styles.actions} color="secondary">
                Site WEB
                </Button>
            </a>
          </div>
            </CardActions>
          </Card>
        </div>
      );
    }
    
    export default SponsorCard;
    