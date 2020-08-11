import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../src/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="secondary" className={classes.title}>
            Welcome to Eye Simulator
          </Typography>
          <Button color="secondary">Sair</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
}
