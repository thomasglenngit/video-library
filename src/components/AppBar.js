import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import People from './PeopleIcon'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#28536B',
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
  }
}))

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#28536B',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
})

export default function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div >
      <div>
        <AppBar className={classes.root} position="static" >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <People />
            </IconButton>
            <Typography variant="h3" className={classes.title}>
              Forever Planet
          </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>

    </div>
  );
}
