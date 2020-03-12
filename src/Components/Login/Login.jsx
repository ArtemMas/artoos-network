import React from 'react';
import LoginForm from "../AddForm/LoginForm";
import {logIn} from "../../Redux/auth-reducer";
import {connect} from "react-redux";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.login, formData.password, formData.rememberMe);
    };

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};


export default connect(null, {logIn} )(Login);