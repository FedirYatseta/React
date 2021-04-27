import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setJobProfile, profilePage, getUserStatus, updateStatus,savePhoto } from '../../redux/profileReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
   
      userId = this.props.loginUserId
      if (!userId) {
        this.props.history.push("./login");
      }
    }
    this.props.profilePage(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
   this.refreshProfile();
  
  }

componentDidUpdate(prevProps, prevStatus, snapshot){
  if(this.props.match.params.userId!= prevProps.match.params.userId)
  this.refreshProfile();
}

  render() {
    return (
      <div>
        <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
        />
      </div>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loginUserId: state.authMe.userId,
  isAuth: state.authMe.isAuth
})

export default compose(
  connect(mapStateToProps, { setUserProfile, setJobProfile, profilePage, getUserStatus, updateStatus,savePhoto }),
  withRouter,
  withAuthRedirect)(ProfileContainer)

