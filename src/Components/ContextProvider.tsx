import  { ReactNode, createContext, useContext, useState } from "react";

const AuthContext = createContext<Props|null>(null);


interface Props{
    user:string|null;
    login:(cb:()=>void)=>void
    logout:(cb:()=>void)=>void
    isAuthenticated:boolean
}

type AuthProps = {
    children:ReactNode; 
}
export const AuthProvider = ({children}:AuthProps) => {
	const [user, setUser] = useState<string|null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const login = () => {
		setUser(user);
		setIsAuthenticated(true);
	};
	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
	};
	return (
		<AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};