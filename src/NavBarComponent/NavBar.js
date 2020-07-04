import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import HomeIcon from '@material-ui/icons/Home';
import styles from './NavBar.module.css';
import {Link, withRouter} from 'react-router-dom';
import logo from '../assets/download.png';
import {homeComp} from '../HomeComponent/homeComp'

const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    borderRadius:'4px',
    backgroundColor:'rgba(255, 228, 196, 0.37)',
    marginTop:'-5px',
  },
});

 function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
   
       <BottomNavigation 
    
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
      
    }}
    showLabels
    className={classes.root}
  >
    <Link to="/"><div className={styles['logo']}><img  className={styles.logo} alt='app Logo' /></div></Link>
    <BottomNavigationAction  label="Home" icon={<HomeIcon />} component={Link} to='/home' /> 
    <BottomNavigationAction label="Add Service/Package" icon={<AddToQueueIcon />} component={Link} to='/add_new_service' />
    <BottomNavigationAction label="Add Package" icon={<AddBoxIcon/>} component={Link} to='/add_new_package' />
    
    
     </BottomNavigation>
    
   
  );
}
export default withRouter(SimpleBottomNavigation);
