import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export type USER = {
    email: string;
    password: string | number;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: USER;
    setUser: Dispatch<SetStateAction<USER>>;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: { email: '', password: '' },
    setUser: () => {},
    login: () => {},
    logout: () => {},
});

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  
    const [user, setUser] = useState<USER>({ email: '', password: '' });

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

 
    const login = () => {
        // setIsAuthenticated(true);
        setUser(user)
    };


    const logout = () => {
        // setIsAuthenticated(false);
        setUser(user)
    };

    const contextValue: AuthContextType = {
        isAuthenticated,
        user,
        setUser,
        login,
        logout,
    };

  
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};