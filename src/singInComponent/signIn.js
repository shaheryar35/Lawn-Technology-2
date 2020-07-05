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
import styles from './signIn.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import leafLogo from '../assets/downloadF.png';


export class  signIn extends Component {
  
    constructor(props)
    {
        super(props);
        this.state={
            inputPassword:false
        };
        this.handleShowPassword = this.handleShowPassword.bind(this); 
        this.handleSubmit= this.handleSubmit.bind(this);
    };
   
    handleShowPassword(e){

        this.setState({inputPassword:true});
        // this updates the state as the user types into the input
        // which also causes a re-render of this component
        // with the newly update state
      }

      handleSubmit(){
        this.props.history.push("/home");


      }
    
      
  
  render() {
    
    
    return (
      <Container className={styles['container']} component="main" maxWidth="xs">
        <div className={styles['logo']}><img  src={leafLogo} />  
       </div>
       <div className={styles['logo-title']}> it's Quick and Easy! 
       </div>
      <Card>
        <CardContent>
      <div>
        
      <Typography component="h3" className={styles['title-text']}  variant="h9">
             Enter Email Address & Password
          
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
                onBlur={this.handleShowPassword}
      
              />
            </Grid>
            <br/>
            
            {
                this.state.inputPassword ?
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Enter Your Password"
                  type="password"
                  id="password"
                  
                  
                />
              </Grid> 
               :
               <div>
                   
               </div>

            }
                 
            
          
            
         
            
            <br/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
            
          >
            Next
          </Button>
          <br/>
          <Grid container justify="flex-end">
           
            <Grid item>
            <Link to='/signup' variant="body2">          
                  <br/>
                 Need to Sign Up ? Sign Up
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
export default withRouter(signIn);
