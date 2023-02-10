import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState
} from "react";

import { authenticate } from "../auth/auth";

import {useNavigate} from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({children, }) => {
    const [token, setToken] = useState('');

    const ENDPOINT = 'user/token';


    const navigate = useNavigate();

    const login = async (params) => {
        const auth = await authenticate(ENDPOINT, params);
        setToken(auth.token);
        if (token) {
            navigate("/home");
        } else {
            navigate("/")
        }
    }

    useEffect(() => {
        
    }, [token])

    const memoedValue = useMemo(() => ({
        login,
        token
    }), [token])
    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

