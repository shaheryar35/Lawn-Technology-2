import React, { Component } from 'react';
import SimpleBottomNavigation from '../NavBarComponent/NavBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import styles from './Service_Details.module.css';
import {ShowPackagesDetails} from './ShowPackagesDetails';
export class ServiceDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
            showPackage:false
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.showPackagehandle = this.showPackagehandle.bind(this);
        
    };
     
     handleChange = (event, newValue) => {
        this.setState({
            value:newValue
        });
      };
      showPackagehandle=()=>{
          this.setState({showPackage:true})
      }
    render() {
        return (
            <div className={styles['service']}>
                <SimpleBottomNavigation />
                <br/>
              
              <BottomNavigation
            value={this.state.value}
             onChange={this.handleChange}
             showLabels
      
            >
          <BottomNavigationAction label="Packages" icon={<PlaylistAddIcon />} onClick={this.showPackagehandle}  />
          <BottomNavigationAction label="All Products" icon={<LocalOfferIcon />}  />
       
    </BottomNavigation>

    {    this.state.showPackage ? 
          <ShowPackagesDetails />
          :
          <div></div>

        }
            
            </div>
        )
    }
}

export default ServiceDetails
