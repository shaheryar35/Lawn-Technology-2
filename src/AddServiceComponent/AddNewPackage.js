import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import styles from "./AddNewPackage.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import ServiceCard from "./ServiceCard";

export class AddNewPackage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      
    };
    this.handleToShowForm = this.handleToShowForm.bind(this);
  }

  handleToShowForm(e) {
    console.log("hy");

    this.setState({ showForm: true });
  }

  render() {
    return (
      <>
      {!this.state.showForm ?
        <Container
        className={styles["container"]}
        component="main"
        maxWidth="xs"
      >
        <h2 className={styles["title"]}> Add New Package </h2>
        <div onClick={this.handleToShowForm}>
          <Card>
            <CardActionArea>
              <CardContent>
                <div className={styles["button-text"]}>
                  <i
                    class={`fa fa-plus fa-3x ${styles["plus"]}`}
                    aria-hidden="true"
                  ></i>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Container> : null
    }
        
        {this.state.showForm ? (
          <Container
            // className={styles["container-Form"]}
            component="main"
            maxWidth="md"
          >
            <br />
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  className={styles["form-labels"]}
                  gutterBottom
                >
                  <br />
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
                    <Typography
                      className={styles["form-labels"]}
                      variant="h6"
                      gutterBottom
                    >
                      Add which services are in the package
                    </Typography>
                  </Grid>

                  
                    {[1,2,3].map(item => <ServiceCard />)}
                    
                  {/* </Grid> */}
                </Grid>
                <br />
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
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

export default AddNewPackage;
