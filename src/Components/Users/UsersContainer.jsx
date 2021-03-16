
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users'

let mapStateToProps = (state) => {
    console.log(state.usersPage.usersData)
    return {
        usersData: state.usersPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (usersData) => {
            dispatch(setUsersAC(usersData))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Users);