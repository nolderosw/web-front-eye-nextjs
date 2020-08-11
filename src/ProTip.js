import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export default function ProTip() {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
      <img src="/logo.png" alt="Eye Logo" width="250" height="250" />
    </Typography>
  );
}
