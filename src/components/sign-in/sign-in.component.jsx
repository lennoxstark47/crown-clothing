import React, { Component } from 'react'

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = Event => {
        Event.PreventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = Event => {
        const {value, name} = Event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' handleChange={this.handleChange} value={this.state.email} label='email' required />

                    <FormInput
                    name='password' 
                    type='password' 
                    label='password'
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    required />


                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
