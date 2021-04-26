import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
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
    Typography: {
      fontFamily: 'roboto',
    },
    fontWeight: 'Bold',
  }
}))




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
            <Typography variant="h2" className={classes.title}>
              Forever Planet
          </Typography>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
      </div>

    </div>
  );
}
