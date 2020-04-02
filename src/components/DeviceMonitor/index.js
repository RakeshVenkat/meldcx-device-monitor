import { connect } from 'react-redux';
import DeviceMonitor from './DeviceMonitor';
import { logout, getActiveDevices, notify } from './DeviceMonitorActions';

const mapStateToProps = state => {
   const {
    isLoggedIn,
    noOfActiveDevices
   } = state.deviceMonitor

   const {
       token
   } = state.login

   return {
    isLoggedIn,
    noOfActiveDevices,
    token
   }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        getActiveDevices: () => dispatch(getActiveDevices())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceMonitor)