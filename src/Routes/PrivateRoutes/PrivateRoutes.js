import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Loading/Loading';

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    

    if(loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>;
    }

    return children;
};

export default PrivateRoutes;
