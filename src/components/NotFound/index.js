import React from 'react';
import { NotFound } from './styles';

const NotFoundPage = () => {
    return (
        <NotFound>
            <h1>OOPS!!</h1> 
            The page you requested is not available.
            <h4>Click <a href="/">here</a> to get back to the home page.</h4>
        </NotFound>
    )
}

export default NotFoundPage