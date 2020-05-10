import React from 'react'
import Header from "./Header"
import {connect} from "react-redux"
import {logOut} from "../../Redux/auth-reducer"
import {AppState} from "../../Redux/redux-store"

type MapStatePropsType = {
    login: null | string
    isAuth: boolean
}

type MapDispatchPropsType = {
    logOut: () => void
}



type Props = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<Props> {

    render() {

        return <Header {...this.props} />
    };
}

const mapStateToProps = (state: AppState): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppState>(mapStateToProps, {logOut})(HeaderContainer);
