import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './FormUser.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import leafLogo from '../assets/downloadF.png';

export class FormUserDetails extends Component {
  continue = e=>{
    e.preventDefault();
    this.props.nextstep();
  }
  render() {
    const {values,handleChange}= this.props;
    return (
      
      <Container className={styles['container']} component="main" maxWidth="xs">
      <div className={styles['logo']}><img  src={leafLogo} /> 
        </div>
        <div className={styles['logo-title']}> it's Quick and Easy! </div>
      <Card>
        <CardContent>
      <div>
        
    
        <Typography component="h3" className={styles['title-text']}  variant="h9">
             Type your name & email address
          
        </Typography>
        <br/>
        <form  noValidate>
         
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
                defaultValue={values.email}

              />
            </Grid>
            <br/>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="firstname"
                label="First Name"
                type="text"
                id="firstname"
                onChange={handleChange('firstname')}
                defaultValue={values.firstname}
                
              />
            </Grid>
            <br/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.continue}
          >
            Next
          </Button>
          <br/>
          <Grid container justify="flex-end">
           
            <Grid item>
            <Link to='/singin' variant="body2">          
                  <br/>
                Already have an account? Sign in
            </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </CardContent>
      </Card>
      <CssBaseline />
    
      
    </Container>
    )
  }
}

export default FormUserDetails
