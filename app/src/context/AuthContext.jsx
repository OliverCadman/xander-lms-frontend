import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import { post } from "../api/request";

import { useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(
    "33a377f55fa5e5540a5f6dd7242445bfa95e96bf"
  );
  const [redirect, setRedirect] = useState(null);

  const ENDPOINT = "user/token";

  const navigate = useNavigate();

  const login = async (params) => {
    const auth = await post(ENDPOINT, params);
    setToken(auth.token);
    if (token) {
      setRedirect(true);
      navigate("/xander-learning/home");
    } else {
      navigate("/");
    }
  };

  const memoedValue = useMemo(
    () => ({
      login,
      token,
      redirect,
    }),
    [token, redirect]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
