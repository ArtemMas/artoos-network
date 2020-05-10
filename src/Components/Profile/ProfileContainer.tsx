import React, {ChangeEvent} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from '../../Redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, savePhoto, updateStatus, saveProfile} from "../../Redux/profile-reducer";
import {PhotosType,  ProfileType} from "../../Types/types";
import {AppState} from "../../Redux/redux-store";
import * as H from 'history'

type MapStateProps = {
    profile: ProfileType
    status: string
    autorizedUserId: number
    isAuth: boolean
}

type MapDispatchProps = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: PhotosType) => void
    saveProfile: (profile: ProfileType) => void
}

interface MatchParams {
    userId: number
}

interface OwnProps extends RouteComponentProps<MatchParams> { }

interface RouteComponentProps<P> {
    match: match<P>
    history: H.History
    savePhoto: (e: ChangeEvent<HTMLInputElement>) => void
}

interface match<P> {
    params: P
    isExact: boolean
    path: string
    url: string
}

type Props = MapStateProps & MapDispatchProps & OwnProps

class ProfileContainer extends React.Component<Props> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Props, prevState: AppState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
						 isOwner={!this.props.match.params.userId}
						 profile={this.props.profile}
						 status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}/>
            </div>
        );
    }
}

let mapStateToProps = (state: AppState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
}) as MapStateProps;

export default compose(
    connect<MapStateProps, MapDispatchProps, OwnProps, AppState>(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
