import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BottomNavigation } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    
  },
}));

export default function Copyright() {
  const classes = useStyles();
  return (
    
    <Typography color="textSecondary" align="center">
      {'Copyright © '}
        Eye Tecnologia Criativa.
    </Typography>
  );
}
