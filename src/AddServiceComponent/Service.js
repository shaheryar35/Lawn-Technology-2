import React, { Component } from 'react';
import SimpleBottomNavigation from '../NavBarComponent/NavBar';
import {AddNewService} from './AddNewService';
import {AddNewPackage} from './AddNewPackage';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import styles from './Service.module.css';

export class Services extends Component {
    constructor(props){
        super(props);
        this.state={
            value:'',
            addService:false,
            addPackage:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.showAddButtonService=this.showAddButtonService.bind(this);
        this.showAddButtonPackage=this.showAddButtonPackage.bind(this);
        
    };
     
     handleChange = (event, newValue) => {
        this.setState({
            value:newValue
        });
      };
      showAddButtonService= (e)=>{
          this.setState({
            addService:true,
            addPackage:false
          })
      }
      showAddButtonPackage=(e)=>{
          this.setState({
              addPackage:true,
              addService:false
          })
      }
    render() {
       
         
        return (
            <div className={styles['services']}>
         <SimpleBottomNavigation />
         <br/>
         <h2 className={styles['title']}> Choose Option Between Them!  </h2>
     
   
       
    <BottomNavigation 
            value={this.state.value}
             onChange={this.handleChange}
             showLabels
            
            >
                
                 <BottomNavigationAction label="New Service" icon={<PlaylistAddIcon />} onClick={this.showAddButtonService} />
                <BottomNavigationAction label="New Package" icon={<LocalOfferIcon />} onClick={this.showAddButtonPackage} />
                 
          
       
    </BottomNavigation>
    
    
      

       {
           this.state.addService ? 
           <AddNewService />
           :
           <div></div>
       }

        {
           this.state.addPackage ? 
           <AddNewPackage />
           :
           <div></div>
       }
        
   
            </div>
        )
    }
}

export default Services
