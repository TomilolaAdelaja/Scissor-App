import { ReactNode, createContext, useContext, useState } from 'react'
// import Login from '../pages/Login';


type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    Children: ReactNode;
  };

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({Children}:AuthContextType) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setUser(user);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const value: AuthContextType = {
        isAuthenticated,
        login,
        logout,
        Children,
      };

  return (
    <AuthContext.Provider value={value}>

        {Children}
        </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
};