import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthMe, loginThunk,logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.loginThunk()
    }
    render() {
        return (<Header {...this.props} />)
    }
}
const mapStateToProps = (state) => ({

    isAuth: state.authMe.isAuth,
    login: state.authMe.login,
    email: state.authMe.email
})

export default connect(mapStateToProps, { setAuthMe, loginThunk, logout })(HeaderContainer);