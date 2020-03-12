import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile} from './../../Redux/profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, updateStatus} from "../../Redux/profile-reducer";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			let userId = this.props.autorizedUserId;
			if (!userId) {
				this.props.history.push('/login')
			} else {
				this.props.history.push(`/profile/${userId}`)
			}
			// if (!userId) {
			// 	this.props.history.push('/login');
			// } else {
			// 	<Redirect to={`/profile/${userId}`}/>
			// }
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
    }

	render () {

	   return (
	      <div>
	         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
	      </div>
	   );
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	autorizedUserId: state.auth.id,
	isAuth: state.auth.isAuth,
});

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
