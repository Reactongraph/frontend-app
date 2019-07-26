import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Validation from '../../utils/validation';
import InputField from '../../components/InputField/InputField';
import { INPUTFILED_DATA } from '../../utils/constants';

import './SignUp.scss';

const validation = new Validation();

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            email: null,
            referralCode: null,
            errors: {
                userName: '',
                password: '',
                email: '',
                referralCode: ''
            }
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        const errorsMessage = validation.authValidation(name, value);
        this.setState({ [name]: value, errors: errorsMessage });
        event.preventDefault();
    };

    // Form empty validation
    handleSubmit = event => {
        const { userName, password, email, referralCode, errors } = this.state;
        if (!userName) {
            errors.userName = 'UserName is empty!';
        } else if (!password) {
            errors.password = 'Password is empty!';
        } else if (!email) {
            errors.email = 'Email is empty!';
        } else if (!referralCode) {
            errors.referralCode = 'ReferralCode is empty!';
        } else {
            console.log('Form is valid');
        }
        this.setState({ errors });
        event.preventDefault();
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="signin-container">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {INPUTFILED_DATA.map((item, i) => {
                            return (
                                <InputField
                                    key={i}
                                    type={item.type}
                                    id={item.id}
                                    placeholder={item.placeholder}
                                    onChange={this.handleChange}
                                    name={item.name}
                                    error={errors[item.name]}
                                />
                            );
                        })}
                        <div>
                            <button
                                type="submit"
                                name="signIn"
                                className=" btn btn-info signup-btn"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <div className="signup-options-container">
                    <NavLink to="/signIn" className="signup-link">
                        Sign In
                    </NavLink>
                    <NavLink
                        to="/forgotpassword"
                        className="forgot-password-link"
                    >
                        Forgot
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default SignUp;
