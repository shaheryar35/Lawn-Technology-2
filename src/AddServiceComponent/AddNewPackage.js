import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import styles from './AddNewPackage.module.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class AddNewPackage extends Component {
    constructor(props){
        super(props);
        this.state ={
            showForm:false,
            active:false,
            actives_econd:false
        };
        this.handleToShowForm = this.handleToShowForm.bind(this);
        this.makeItActive = this.makeItActive.bind(this);
        this.makeItActive2 = this.makeItActive2.bind(this);
    };
    makeItActive=()=>{
      this.setState(prevState => ({
          active: !prevState.active
        }));
  }
  makeItActive2=()=>{
    this.setState(prevState => ({
      actives_econd: !prevState.actives_econd
      }));
}
    handleToShowForm(e){
      console.log("hy")

        this.setState({showForm:true});
        
      }

    render() {
      const style = this.state.active ? { border: '2px solid rgba(137, 43, 226, 0.931)' } : {};
      const style_second = this.state.actives_econd ? { border: '2px solid rgba(137, 43, 226, 0.931)' } : {};
        return (
            <>
           
        <Container className={styles['container']} component="main" maxWidth="xs">
        <h2 className={styles['title']}> Add New Package  </h2>
        <div onClick={this.handleToShowForm}>
         <Card>
             <CardActionArea>
                <CardContent>
                <div className={styles['button-text']}>
                 
                   <i class={`fa fa-plus fa-3x ${styles['plus']}`} aria-hidden="true">
                      </i>
                     
                    </div>   
                                 
                </CardContent>
             </CardActionArea>
         </Card>
         </div>
         </Container>
         { this.state.showForm ? 
        <Container className={styles['container-Form']} component="main" maxWidth="xs">
        <br/>
  <Card>
    <CardContent>
        <Typography variant="h6" className={styles['form-labels']} gutterBottom>
                <br/>
    Package Details
  </Typography>
  <Grid container spacing={3}>
    
    <Grid item xs={12}>
      <TextField
        required
        id="servicename"
        name="servicename"
        label="Package Name"
        fullWidth
       
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        id="address"
        name="address"
        label=" Optional Description"
        fullWidth
        multiline
        
      />
    </Grid>
    <Grid item xs={12}>
    <Typography className={styles['form-labels']} variant="h6" gutterBottom>
                
       Select Service
  </Typography>

    </Grid>   
    <Grid item xs={12} sm={6}>
    <Card className={styles['card']} onClick={this.makeItActive} style={style}>
                      <CardActionArea>
                          <CardContent>
                             <div className={styles['package-title']}>
                                LAWN TEK
                             </div>
                                <div className={styles['price']}>
                                $200.00/mo / 200 Sq. ft.
                                </div>
                                <hr />
                                <ul className={styles['list']}>
                                    <li>Fifth</li>
                                     <li>Fifth</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Third</li>
                                    <li>Third</li>
                                    <li>Third</li>
                                </ul>
                          </CardContent>
                      </CardActionArea>
                  </Card>




    </Grid>
    <Grid item xs={12} sm={6}>
    <Card className={styles['card']} onClick={this.makeItActive2} style={style_second}>
                      <CardActionArea>
                          <CardContent>
                             <div className={styles['package-title']}>
                                LAWN TEK
                             </div>
                                <div className={styles['price']}>
                                $200.00/mo / 200 Sq. ft.
                                </div>
                                <hr />
                                <ul className={styles['list']}>
                                    <li>Fifth</li>
                                     <li>Fifth</li>
                                    <li>Second</li>
                                    <li>Third</li>
                                    <li>Third</li>
                                    <li>Third</li>
                                    <li>Third</li>
                                </ul>
                          </CardContent>
                      </CardActionArea>
                  </Card>
    </Grid>


    <Grid item xs={12}>
    <Typography className={styles['form-labels']} variant="h6" gutterBottom>
                
       Set Your Prices
  </Typography>

    </Grid> 
    <Grid item xs={12} sm={6}>
      <TextField id="setprice" name="setprice" label="Minimum $:" fullWidth
    type="number"
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id="price_per_sequar"
        name="price_per_sequar"
        label="Price Per Sequar"
        fullWidth
        type="number"
      />
    </Grid>

  </Grid>
  <br/>
  <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
             Submit
          </Button>
  </CardContent>
  </Card>
        </Container>
        :
        <div></div> 
        
        
        
        }

             
            </>
        )
    }
}

export default AddNewPackage
