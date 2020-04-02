import { connect } from 'react-redux';
import Login from './Login'
import { login } from './LoginActions'

const mapStateToProps = (state) => {
  const {
    token,
    message
  } = state.login

  return {
    token,
    message
  }
}

const mapDispatchToProps = dispatch => {
  return {
      
    authenticateUser: (event) => {
      event.preventDefault();
      
      return dispatch(login(
        event.target.emailAddress.value,
        event.target.password.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);