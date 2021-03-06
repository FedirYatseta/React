import React from 'react';
//import s from '../login/login.module.css';
import { loginForm } from '../../redux/authReducer'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { Input } from '../../utils/FormsControls';
import { required } from '../../utils/validators';
import { Redirect } from 'react-router';
import style from '../../utils/FormsControls.module.css'
const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={'email'}
          component={Input}
          validate={[required]} />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          type={'password'}
          validate={[required]} />
      </div>
      <div>
        <Field
          type={"checkbox"}
          name={"rememberMe"}
          component={Input}
          />
      </div>
      {props.error &&
        <div className={style.form_summary_error}>
          {props.error}
        </div>
      }
      <div>
        <button> Login</button>
      </div>
    </form>
  )
}


const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginForm(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.authMe.isAuth
})

export default connect(mapStateToProps, { loginForm })(Login)
