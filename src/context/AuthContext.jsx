import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    createRef
} from "react";

import { authenticate } from "../auth/auth";

import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children, }) => {
    const [token, setToken] = useState('123');
    const [redirect, setRedirect] = useState(null);

    const ENDPOINT = 'user/token';


    const navigate = useNavigate();

    const login = async (params) => {
        const auth = await authenticate(ENDPOINT, params);
        setToken(auth.token);
        if (token) {
            setRedirect(true);
            navigate("/xander-learning/home");
        } else {
            navigate("/")
        }
    }

    const memoedValue = useMemo(() => ({
        login,
        token,
        redirect
    }), [token, redirect])

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

