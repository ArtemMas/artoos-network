import React from 'react';
import LoginForm from "../AddForm/LoginForm";
import {logIn} from "../../Redux/auth-reducer";
import {connect} from "react-redux";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.login, formData.password, formData.rememberMe, formData.captcha);
    };

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logIn} )(Login);