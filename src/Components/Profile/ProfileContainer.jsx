import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { urlApi } from '../../redux/urlAPI/urlAPI';
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(urlApi + '/profile/2')
    .then(response =>{
      debugger;
      this.props.setUserProfile(response.data)
    })
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
 profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUserProfile} ) (ProfileContainer);