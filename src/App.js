import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {UserForm} from './signup/userForm';
import {signIn} from './singInComponent/signIn';
import SimpleBottomNavigation from './NavBarComponent/NavBar';
import {homeComp} from './HomeComponent/homeComp';
import {Services} from './AddServiceComponent/Service';
import {ServiceDetails} from './ServiceDetailsComponent/ServiceDetails';
import { createBrowserHistory } from "history";
export class App extends Component
 {
   constructor(props){
     super(props);
     this.state={
      history: createBrowserHistory()
     }
   }
   render(){
    return ( 
      <BrowserRouter>
      <Switch>
        
      <Route path='/signup'  component={UserForm} />
      <Route path='/navbar' component={SimpleBottomNavigation} />
      <Route path='/home' component={homeComp} />
      <Route path='/add_new_service' component={Services} />
      <Route path='/service_details' component={ServiceDetails} />
  
      <Route path='/' component={signIn}  />
     
     
   </Switch>
   
  </BrowserRouter>
  
      
    );
   }
  
}
export default App

