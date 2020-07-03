import React, { Component } from 'react';
import SimpleBottomNavigation from '../NavBarComponent/NavBar';
import {AddNewService} from './AddNewService';
import styles from './Service.module.css';

export class Services extends Component {
    render() {
        return (
            <>
                <SimpleBottomNavigation />
               <h2 className={styles['title']}> Add New service  </h2>
               <AddNewService />
            </>
        )
    }
}

export default Services
