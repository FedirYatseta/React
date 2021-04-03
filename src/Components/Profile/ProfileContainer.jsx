import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { urlApi } from '../../redux/urlAPI/urlAPI';
import { connect } from 'react-redux';
import {setUserProfile , setJobProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

  componentDidMount() {
    
   let userId= this.props.match.params.userId;
   if(!userId){
     userId=2
   }
    this.props.setJobProfile(false)
    axios.get(urlApi + '/profile/' + userId)
    .then(response =>{
      debugger;
      this.props.setJobProfile(true)
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

let ProfileUrlDataContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, setJobProfile} ) (ProfileUrlDataContainer);