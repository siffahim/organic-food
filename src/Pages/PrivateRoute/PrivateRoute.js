import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />

};

export default PrivateRoute;