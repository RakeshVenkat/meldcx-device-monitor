import { getListOfActiveDevices } from "../../API"

export const LOGOUT = 'LOGOUT'

export const GET_ACTIVE_DEVICES = 'GET_ACTIVE_DEVICES'

export const NOTIFY = 'NOTIFY'

export const logout = () => dispatch => {
    return dispatch({
        type: LOGOUT
    })
}

export const getActiveDevices = () => async dispatch => {
    const response = await getListOfActiveDevices();

    return dispatch({
        type: GET_ACTIVE_DEVICES, 
        body: response.noOfActiveDevices
    })
}
