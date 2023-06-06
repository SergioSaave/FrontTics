import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

export const AuthContext = createContext();

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = ({ email = "" }) => {
    const user = {
      email
    };

    const action = {
        type: "[AUTH] Login",
        payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action)
  };

  const logout = () => {
    const action = {
        type: "[AUTH] Logout",
    };

    localStorage.removeItem('user');
    dispatch(action);
  };

  return(
    <AuthContext.Provider value={{...authState, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
};
