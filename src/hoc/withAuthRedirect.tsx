import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppState} from "../Redux/redux-store";

type MapStateToProps = {
    isAuth: boolean
}

type OwnProps = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppState): MapStateToProps => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: React.Component<{}, {}, any>) => {
    class RedirectComponent extends React.Component<OwnProps> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />
            //@ts-ignore
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect<MapStateToProps, null, OwnProps, AppState>(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}
