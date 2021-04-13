import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activeInput = () => {
    this.setState({
      editMode: true,
    })

  }

  deActiveInput = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
   this.setState({
     status: e.currentTarget.value
   }) 
  }

  componentDidUpdate (prevProps, prevState) {

    if(prevProps.status !== this.props.status)
    this.setState({
      status: this.props.status
    })
  }
  render() {

    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activeInput} > {this.props.status || '---'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActiveInput} value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}
export default ProfileStatus;