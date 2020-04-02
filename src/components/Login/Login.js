import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

import { LoginFormContainer, LoginForm, InputField, ErrorMessage } from './styles'

const Login = ({message, authenticateUser}) => {
  return (
    <LoginFormContainer>
      <LoginForm onSubmit={authenticateUser}>
        <h1>Login</h1>
        <InputField>
            <FaEnvelope/>
            <input type="text" name="emailAddress" placeholder="Email Address" autoComplete="off"/>
        </InputField>
        <InputField>
            <FaExclamationCircle/>
            <input type="password" name="password" placeholder="Password"/>
        </InputField>
        <button>Log In</button>
        {message && 
            <ErrorMessage>
                {message}
            </ErrorMessage>}
      </LoginForm>
  </LoginFormContainer>
  );
};

export default Login;