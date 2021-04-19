import {createSelector} from "reselect"

 const getUserSelector = (state) => {
    return state.usersPage.usersData;
}

export const getUser = createSelector(getUserSelector, (usersData) => {
    return usersData.filter(u => true)
})


export const getPageSize = (state) => {
    return  state.usersPage.pageSize
}

export const getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}