import axios from 'axios';

const baseURL = 'http://35.201.2.209:8000'

/** Retreives the list of active devices  */
export const getListOfActiveDevices = async () => {
    const path = '/devices';
    try{
        const response = await axios.get(`${baseURL}${path}`);
        if(response.status == 200){
            return {noOfActiveDevices: response.data.devices.length}
        } else {
            return {noOfActiveDevices: -1}
        }
    } catch(error){
        return {noOfActiveDevices: -1}
    }
}

/** Authenticates the user */
export const authenticateUser = async (email, password) => {
    const path = '/login';
    const data = {
        email,
        password
    };

    try {
        let response = await axios.post(`${baseURL}${path}`, data)
        if(response.status == 200){
            return {token: response.data, message: ''}
        }
    } catch (error) {
        return {token: null, message: 'Invalid combination. Try again !!'}
    }   
    
}

/** Sends a notification message */
export const notifyTestCompletion = async (name, email, repoUrl, message, token) => {
    const path = '/notify';
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const data = {
        name, 
        email, 
        repoUrl, 
        message
    }; 

    try {
        let response = await axios.post(`${baseURL}${path}`, data, config);
        if (response.status == 200){
            console.log('Yay!! ', response.data)
        }
    } catch (error) {
        return {message: 'Could not post the message. Try again !!'}
    }  
}
