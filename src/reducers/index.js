import { combineReducers } from 'redux'
import login from '../components/Login/LoginReducer'
import deviceMonitor from '../components/DeviceMonitor/DeviceMonitorReducer'

export default combineReducers({
    login,
    deviceMonitor
})