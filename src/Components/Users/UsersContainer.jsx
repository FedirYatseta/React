
import { connect } from 'react-redux';
import React from "react";
import { followAC, unfollowAC, setUsersAC,setCurrentPageAC,setTotalUserCountAC,setIsFetchingAC } from '../../redux/usersReducer';
import * as axios from 'axios';
import { urlApi } from '../../redux/urlAPI/urlAPI';
import Users from "./Users";
import Preloader from "../Preloader/Preloader"


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(urlApi + `/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalPage(response.data.totalCount);
            });
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p);
        axios.get(urlApi + `/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
        });
    }

    
    render() {
        return <> {this.props.isFetching ? <Preloader />: null}
        <Users 
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        usersData={this.props.usersData}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        />
        </>
    }
}



let mapStateToProps = (state) => {
    console.log(state.usersPage.usersData)
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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
        },
        setCurrentPage(pageNumber){
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalPage(totalCount){
            dispatch(setTotalUserCountAC(totalCount))
        },
        toggleIsFetching(isFetching){
            dispatch(setIsFetchingAC(isFetching))
        },


        
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);