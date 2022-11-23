import * as React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('sm')]: {
      minHeight: 300,
      margin: theme.spacing(2),
    },
  },
  title: {
    color: grey[900],
    fontWeight: 500,
    fontSize: 20,
  },
}));

function FaqCard(props) {
  const styles = useStyles();

  return (
    <Paper className={styles.card}>
      {props.icon}
      <div>
        <Typography className={styles.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        {props.content}
      </div>
    </Paper>
  );
}

export default FaqCard;
