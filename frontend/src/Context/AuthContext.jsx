import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const getUserFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  };

  const getTokenFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem("token")) || null;
    } catch (error) {
      console.error("Failed to parse token from localStorage:", error);
      return null;
    }
  };

  const [user, setUserState] = useState(getUserFromLocalStorage());
  const [token, setTokenState] = useState(getTokenFromLocalStorage());

  const setToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token));
    setTokenState(token);
  };

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUserState(user);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setUserState(null);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setTokenState(null);
  };

  const data = {
    user,
    token,
    setUser,
    removeUser,
    setToken,
    removeToken,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
