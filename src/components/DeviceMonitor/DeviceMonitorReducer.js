import { LOGOUT, GET_ACTIVE_DEVICES } from "./DeviceMonitorActions";

const initialState = {
    noOfActiveDevices: 0
}

const logout = (state = initialState, action) => {
    const noOfActiveDevices = action.body ? action.body : 0
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case GET_ACTIVE_DEVICES:
            return {
                ...state,
                noOfActiveDevices
            }
        default:
            return state
    }
}

export default logout
