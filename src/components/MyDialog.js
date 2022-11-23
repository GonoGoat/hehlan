import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    textTransform: 'uppercase',
  },
}));

function MyDialog(props) {
  const styles=useStyles();

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      scroll={'paper'}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="Dialog">{props.title}</DialogTitle>
      <DialogContent>
        {typeof props.content === 'string' ? (
          <DialogContentText>{props.content}</DialogContentText>
        ) : (
            <div>{props.content}</div>
          )}
      </DialogContent>
      <DialogActions>
        <Link to={props.file} target="_blank" download className={styles.link}>
          Télécharger
        </Link>
        <Button color="secondary" onClick={props.onClose}>
          {props.close}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
