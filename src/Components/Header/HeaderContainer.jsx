import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthMe, logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    render() {
        return (<Header {...this.props} />)
    }
}
const mapStateToProps = (state) => ({

    isAuth: state.authMe.isAuth,
    login: state.authMe.login,
    email: state.authMe.email
})

export default connect(mapStateToProps, { setAuthMe, logout })(HeaderContainer);