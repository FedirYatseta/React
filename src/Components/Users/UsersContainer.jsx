
import { connect } from 'react-redux';
import React from "react";
import { follow, unfollow,  setCurrentPage,   toggleFollowingProgress, getUsers } from '../../redux/usersReducer';
import Users from "./Users";
import {getUser, getCurrentPage, getFollowingInProgress,getTotalUserCount,getPageSize,getIsFetching} from '../../redux/userSelector'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize);
    }

    render() {
        return (
            <Users totalItemCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersData={this.props.usersData}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}
            />)
      
    }
}


let mapStateToProps = (state) => {
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