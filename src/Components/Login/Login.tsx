import React, {SFC} from 'react'
import LoginForm from "../AddForm/LoginForm"
import {logIn} from "../../Redux/auth-reducer"
import {connect} from "react-redux"
import {AppState} from "../../Redux/redux-store"

type MapStateProps = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchProps = {
    logIn: (login: string, password: string, rememberMe: boolean | null, captcha: string) => void
}

type Props = MapStateProps & MapDispatchProps

export type LoginFormValuesType = {
    captcha: string
    rememberMe: boolean
    password: string
    login: string
}


const Login: SFC<Props> = ({captchaUrl, logIn}) => {
    const onSubmit = (formData: any) => {
        logIn(formData.login, formData.password, formData.rememberMe, formData.captcha);
    };

    return <div>
        <h1>Login</h1>

        <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
};

let mapStateToProps = (state: AppState): MapStateProps => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

// <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State>
//@ts-ignore
export default connect<MapStateProps, MapDispatchProps, null, AppState>(mapStateToProps, {logIn} )(Login);