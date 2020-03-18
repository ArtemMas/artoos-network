import React from 'react'
import {
    follow, unfollow, requestUsers
} from '../../Redux/search-reducer'
import {connect} from 'react-redux'
import SearchPage from './SearchPage'
import Preloader from '../common/Preloader/Preloader'
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/search-selectors"
import {UserType} from "../../Types/types"
import {AppState} from "../../Redux/redux-store"

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type OwnPropsType = {
    pageTitle: string
}

type Props = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class SearchPageAPI extends React.Component<Props> {

   componentDidMount() {
       let {currentPage, pageSize} = this.props;
       this.props.requestUsers(currentPage, pageSize);
   };

   onPageChanged = (pageNumber: number) => {
       let {pageSize} = this.props;
       this.props.requestUsers(pageNumber, pageSize);
   };

    render () {

        return <div>
            <h2>{this.props.pageTitle}</h2>
            { this.props.isFetching ? <Preloader /> : null }
            <SearchPage totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           followingInProgress={this.props.followingInProgress}
                           /> 
      </div>
   }
}


let mapStateToProps = (state: AppState): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default compose(
    withAuthRedirect,
    // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppState>
    (mapStateToProps, {
        follow, unfollow,
        requestUsers})
)(SearchPageAPI)



