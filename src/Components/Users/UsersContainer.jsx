
import { connect } from 'react-redux';
import React from "react";
import { follow, unfollow,  setCurrentPage,   toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from "./Users";
import Preloader from "../Preloader/Preloader"
import {getUser, getCurrentPage, getFollowingInProgress,getTotalUserCount,getPageSize,getIsFetching} from '../../redux/userSelector'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        return <> {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersData={this.props.usersData}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



// let mapStateToProps = (state) => {
//     //console.log(state.usersPage.usersData)
//     return {
//         usersData: state.usersPage.usersData,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }


let mapStateToProps = (state) => {
    //console.log(state.usersPage.usersData)
    return {
        usersData: getUser(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})(UsersContainer);