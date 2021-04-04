import React from 'react';
import s from '../Header/Header.module.css';
import Header from './Header';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { urlApi } from '../../redux/urlAPI/urlAPI';
import { setAuthMe } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(urlApi + '/auth/me', { withCredentials: true })
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    let { email ,id, login  } = response.data.data;
                    this.props.setAuthMe( id, email, login )
                }
            })
    }

    render() {
        debugger
        return (<Header {...this.props} />)
    }
}
debugger;
const mapStateToProps = (state) => ({

    isAuth: state.authMe.isAuth,
    login: state.authMe.login,
    email: state.authMe.email
})

export default connect(mapStateToProps, { setAuthMe })(HeaderContainer);