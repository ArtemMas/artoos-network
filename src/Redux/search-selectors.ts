import {createSelector} from "reselect";
import {AppState} from "./redux-store";


const getUsersSelector = (state: AppState) => {
    return state.searchPage.users;
};

export const getUsers = createSelector( getUsersSelector, (users) => {
    // @ts-ignore
    return users.filter(u => true);
});

export const getPageSize = (state: AppState) => {
    return state.searchPage.pageSize;
};

export const getTotalUsersCount = (state: AppState) => {
    return state.searchPage.totalUsersCount;
};

export const getCurrentPage = (state: AppState) => {
    return state.searchPage.currentPage;
};

export const getIsFetching = (state: AppState) => {
    return state.searchPage.isFetching;
};

export const getFollowingInProgress = (state: AppState) => {
    return state.searchPage.followingInProgress;
};
