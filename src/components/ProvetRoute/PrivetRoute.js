import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import DisplayLoading from '../DisplayLoading/DisplayLoading';

const PrivetRoute = ({children}) => {
    const{user,loading}= useContext(AuthContext)
    const location= useLocation()
    if(loading){
        return <DisplayLoading></DisplayLoading>
    }
    if(user){
        return children;
    }
    <Navigate to='/login' state={{from:location
    }} replace></Navigate>
};

export default PrivetRoute;