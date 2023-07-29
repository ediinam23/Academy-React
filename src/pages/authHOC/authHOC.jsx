import React from 'react';
import { Navigate } from "react-router-dom";
import {useUserData} from "../../context/UserContext.jsx";

const withAuth = (Component) => {
    return (props) => {
        const {userData} = useUserData();

        return true ?
            <Component {...props}/>
            :
            <Navigate to="/login" replace={true} />
    }
}

export default withAuth;