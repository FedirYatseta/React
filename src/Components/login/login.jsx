import React from 'react';
import s from '../login/login.module.css';
import { loginForm } from '../../redux/authReducer'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"} />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={"input"} />
      </div>
      <div>
        <button> Login</button>
      </div>
    </form>
  )
}


let onLogin = (login, password, rememberMe) => {
  loginForm(login, password, rememberMe)
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} loginForm={props.loginForm} />
    </div>
  )
}
let mapStateToProps = (state) => ({
  loginForm: state.authMe.loginForm
})

let LoginContainer = connect(mapStateToProps, { loginForm })(Login)
export default LoginContainer;