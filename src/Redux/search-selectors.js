import {createSelector} from "reselect";


const getUsersSelector = (state) => {
    return state.searchPage.users;
};

export const getUsers = createSelector( getUsersSelector, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.searchPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.searchPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.searchPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.searchPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.searchPage.followingInProgress;
};
