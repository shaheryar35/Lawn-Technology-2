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
import styles from './FormPassword.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';

export class FormPassword extends Component {
  continue = e=>{
    e.preventDefault();
    this.props.nextstep();
  }

  back = e=>{
    e.preventDefault();
    this.props.prevstep();
  }
  render() {
    const {values,handleChange}= this.props;
    return (
      <Container className={styles['container']} component="main" maxWidth="xs">
      <Card>
        <CardContent>
      <div>
        
        <Typography component="h1"  variant="h5">
        Now, create your password
          
        </Typography>
        <br/>
        <form  noValidate>
         
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Password"
                label="Type Your Password Here"
                name="Password"
                autoComplete="Password"
                onChange={handleChange('Password')}
                defaultValue={values.Password}

              />
            </Grid>
            <br/>
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={this.continue}
          >
             Create My New Account
          </Button>

            <br/>
          <Button
            type="submit"
            fullWidth
           
            color="success"
            onClick={this.back}
          >
              <br/>
             Back
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

export default FormPassword
