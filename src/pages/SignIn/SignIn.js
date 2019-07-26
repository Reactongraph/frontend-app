import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchToken } from '../../actions/signInActions';
import { NavLink } from 'react-router-dom';
import Validation from '../../utils/validation';
import InputField from '../../components/InputField/InputField';

import './SignIn.scss';

const validation = new Validation();

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            errors: {
                userName: '',
                password: ''
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
        const { userName, password, errors } = this.state;
        if (!userName) {
            errors.userName = 'UserName is empty!';
        } else if (!password) {
            errors.password = 'Password is empty!';
        } else {
            this.props.history.push('/dashboard')
            console.log("this", this)
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
                        <InputField
                            type="text"
                            id="userName"
                            placeholder="Username"
                            onChange={this.handleChange}
                            name="userName"
                            error={errors.userName}
                        />
                        <InputField
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                            name="password"
                            error={errors.password}
                        />
                        <div>
                            <button
                                type="submit"
                                name="signIn"
                                className="btn btn-info signin-btn"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="signup-options-container">
                    <NavLink to="/signup" className="signup-link">
                        Sign Up
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

function mapStateToProps(state) {
    return {
        UserStore: state.UserStore
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchToken
            },
            dispatch
        )
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
