import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setJobProfile,profilePage } from '../../redux/profileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    this.props.profilePage(userId)
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.authMe.isAuth
})

let ProfileUrlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, { setUserProfile, setJobProfile, profilePage })(ProfileUrlDataContainer);