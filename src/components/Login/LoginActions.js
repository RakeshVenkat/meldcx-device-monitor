import {authenticateUser} from '../../API'

export const FETCH_LOGINTOKEN = 'FETCH_LOGINTOKEN'

export const AUTHENTICATING = 'AUTHENTICATING';

export const authenticating = () => { return ({type: AUTHENTICATING}) }

export const login = (email, password) => async dispatch => {
    dispatch(authenticating);

    let authenticationResponse =  await authenticateUser(email, password);
    return dispatch({
        type: FETCH_LOGINTOKEN,
        body: {
            token: authenticationResponse.token,
            message: authenticationResponse.message
        } 
    })
}
