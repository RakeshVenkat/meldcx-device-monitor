import { FETCH_LOGINTOKEN } from './LoginActions'

const initialState = {
    isLoggedIn: false,
    token: null,
    message: ''
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LOGINTOKEN:
            const { token, message } = action.body
            if (!token) {
                return {
                    ...state,
                    isLoggedIn: false,
                    token: null,
                    message
                }
            } else {
                return {
                    ...state,
                    isLoggedIn: true,
                    token,
                    message
                }
            }
        default:
            return state
    }
}

export default login
