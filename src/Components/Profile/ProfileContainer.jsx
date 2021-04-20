import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setJobProfile, profilePage, getUserStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {

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
  render() {
    return (
      <div>
        <Profile {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
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
  connect(mapStateToProps, { setUserProfile, setJobProfile, profilePage, getUserStatus, updateStatus }),
  withRouter,
  withAuthRedirect)(ProfileContainer)

