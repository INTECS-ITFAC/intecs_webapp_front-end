import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

import "./Login.scss";

export class Login extends Component <
    {},
    {
        signInEmail: string,
        signInPassword: string,
    }>
{
    static propTypes = {};

    constructor(props: any) {
        super(props);
        this.state = {
            signInEmail : '',
            signInPassword : '',
        }
    }

    onEmailChange = (event: any) =>
    {
        this.setState({
            signInEmail : event.target.value,
        })
    };

    onPasswordChange = (event: any) =>
    {
        this.setState({
            signInPassword : event.target.value,
        })
    };

    onSubmitPressed = () =>
    {
        //====Accessing email and password====
        // console.log(this.state.signInEmail);
        // console.log(this.state.signInPassword);
    };

    render() {
        return (
            <div className="login-container d-flex flex-row justify-content-center text-center p-5">
                <div className="inner-card card">
                    <div className="login-form form d-flex flex-column justify-content-around">
                        <div className="login-header">LOGIN</div>
                        <Form.Group controlId="login-email">
                            <div className="login-label">Email Address :
                                <svg className="bi bi-person-fill" width="30px" height="30px" viewBox="0 0 16 16"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>

                            <Form.Control type="email" onChange={this.onEmailChange} className="login-input" placeholder="Enter Email"/>
                        </Form.Group>

                        <Form.Group controlId="login-password">
                            <div className="login-label">Password :
                                <svg className="bi bi-lock-fill" width="25px" height="25px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="11" height="9" x="2.5" y="7" rx="2"/>
                                    <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 117 0v3h-1V4a2.5 2.5 0 00-5 0v3h-1V4z" clip-rule="evenodd"/>
                                </svg>
                            </div>

                            <Form.Control type="password" onChange={this.onPasswordChange}  className="login-input mt-2" placeholder="Enter Password"/>
                        </Form.Group>
                        <Link to="/dashboard">
                            <Button variant="primary" onClick={this.onSubmitPressed} className="login-button" type="submit">
                                LOGIN
                            </Button>
                        </Link>
                        <p className="forgot-password ">
                            <a href="#" rel="noopener noreferrer">Forgot password?</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
