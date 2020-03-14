import React from 'react'; 
import {
    follow, unfollow, setCurrentPage,
    requestUsers
} from '../../Redux/search-reducer';
import {connect} from 'react-redux';
import SearchPage from './SearchPage';
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/search-selectors";

class SearchPageAPI extends React.Component {

   componentDidMount() {
       let {setCurrentPage, pageSize} = this.props;
       this.props.requestUsers(setCurrentPage, pageSize);
   };

   onPageChanged = (pageNumber) => {
       let pageSize = this.props;
       this.props.requestUsers(pageNumber, pageSize)
   };

    render () {

      return <div> 
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


let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {
        follow, unfollow,
        setCurrentPage, requestUsers})
)(SearchPageAPI)



