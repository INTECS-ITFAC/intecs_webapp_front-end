import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Form} from "react-bootstrap";

import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import INTECSLOGO from "../../../assets/images/intecs_logo.png";

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
                        <div className="logo-container align-items-center">
                            <img
                                id="INTECS"
                                src={INTECSLOGO}
                                className="intecs-icon"
                                alt="INTECS"
                            />
                        </div>
                        <Form.Group controlId="login-email">
                            <div className="login-label">Email Address :
                                <FontAwesomeIcon className="ml-2 " icon={faEnvelope} />
                            </div>

                            <Form.Control type="email" onChange={this.onEmailChange} className="login-input" placeholder="Enter Email"/>
                        </Form.Group>

                        <Form.Group controlId="login-password">
                            <div className="login-label">Password :
                                <FontAwesomeIcon className="ml-2 " icon={faLock} />
                            </div>

                            <Form.Control type="password" onChange={this.onPasswordChange}  className="login-input mt-2" placeholder="Enter Password"/>
                        </Form.Group>
                        <Link to="/dashboard">
                            <Button variant="primary" onClick={this.onSubmitPressed} className="login-button" type="submit">
                                LOGIN
                            </Button>
                        </Link>
                        <p className="forgot-password ">
                            <Button href={"#"} variant="link">Forgot Password?</Button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
