import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({children, authentication = true}) => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const user = useSelector(state => state.auth.status);

    useEffect(() => {
        if (authentication && user !== authentication) {
            navigate('/login');
        } else if (!authentication && user !== authentication) {
            navigate('/');
        }
        setLoader(false);
    }, [user, navigate, authentication]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthLayout;
