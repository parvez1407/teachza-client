import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
    return (
        <div className='d-flex w-100 vh-100 align-align-items-center justify-content-center mt-5'>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default LoadingSpinner;