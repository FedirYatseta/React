import { usersAPI } from '../API/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    usersData: [],
    pageSize: 15,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, usersData: action.usersData }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUserCount: action.count }
        }

        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (usersData) => ({ type: SET_USERS, usersData });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUserCount = (count) => ({ type: SET_TOTAL_USER_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FETCHING, isFetching, userId });


export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount))
    }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}

export default UsersReducer;
