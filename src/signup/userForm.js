import React, { Component } from 'react';
import {FormUserDetails} from './FormUserDetails';
import {FormPassword} from './FormPassword';






export class UserForm extends Component {

    state={
        step:1,
        firstname:'',
        email:'',
        password:''
    }
    //proceed to next step
    nextstep=() =>{
        const {step}= this.state;
        this.setState({
            step: step+1
        });
    }
    //proceed to previous step
    prevstep=() =>{
        const {step}= this.state;
        this.setState({
            step: step-1
        });
    }

    //hendle field change
    handleChange = input => e =>{
        this.setState({
            [input]: e.target.value
        });
    }
    render() {
       
        const {step}= this.state;
        const {firstname, email, password}= this.state;
        const values= {firstname, email, password}
         switch(step)
         {
             case 1:
                 return(
                    
                   <FormUserDetails
                   nextstep={this.nextstep}
                   handleChange={this.handleChange}
                   values={values}
                   
                   />
                   
                     
                 )

            case 2:
                return(
                    <FormPassword
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                    values={values}  
                    />
                      
                  )
            case 3:
                return <h2>From Submitted SuccessFully</h2>
           
         }
    }
}

export default UserForm
