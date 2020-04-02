import styled from 'styled-components'

export const LoginFormContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #263238;
    position: absolute;
    font-family: monospace, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
`

export const LoginForm = styled.form`
    width: 300px;
    padding: 8% 0 0;
    position: relative;
    top: 25vh;
    background: white;
    max-width: 360px;
    margin: auto;
    padding: 45px;
    text-align: center;
    border-radius: 4px;
    box-shadow:  5px 5px 1px 1px #171b1c;

    & h1 {
        font-weight: 500;
        color: #787878;
    }

    & button {
        text-transform: uppercase;
        outline: 0;
        background: #0277bd;
        width: 120px;
        border: 0;
        padding: 15px;
        margin-top: 20px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        border-radius: 2px;
      }
`

export const InputField = styled.div`
    background: #dfe1ff;
    border-radius: 4px;
    margin-bottom: 10px;

    & input {
        padding: 15px;
        background: #dfe1ff;
        outline: 0;
        width: 80%;
        border: 0;
        box-sizing: border-box;
        font-size: 15px;
    }

`

export const ErrorMessage = styled.div`
    color: red;
    padding: 20px 0;
    font-size: 0.75em;
`