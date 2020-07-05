import React, { Component } from 'react';
import SimpleBottomNavigation from '../NavBarComponent/NavBar';
import styles from './home.module.css';

export class homeComp extends Component {
    
    render() {
        return (
            <div className={styles['home']}>
                <SimpleBottomNavigation />
                <h1>Home Component</h1>
     
      
                
            </div>
        )
    }
}
export default  homeComp;

