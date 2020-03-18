import React, {FC} from 'react'
import LoginForm from "../AddForm/LoginForm"
import {logIn} from "../../Redux/auth-reducer"
import {connect, DefaultRootState} from "react-redux"
import {AppState} from "../../Redux/redux-store"
import {FormDataType} from "../../Types/types";

type MapStateProps = {
    captchaUrl: string | null
    isAuth: boolean
}
type MapDispatchProps = {
    logIn: (login: string, password: string, rememberMe: boolean | null, captcha: string) => void
}


type Props = MapStateProps & MapDispatchProps

const Login: FC<Props> = ({captchaUrl, logIn}) => {
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
// @ts-ignore
export default connect<MapStateProps & MapDispatchProps & null & AppState>(mapStateToProps, {logIn} )(Login);