import { Navigate, 
    // Route, RouteProps 
} from "react-router-dom";
import  { useAuth }from "../Components/ContextProvider"
import { ReactNode } from "react";
interface ProtectedProps 
// extends RouteProps
{
children:ReactNode
}

const ProtectRoute:React.FC<ProtectedProps> = ({ children}) => {
	
	const auth = useAuth();
	if (!auth?.user === null) {
		<Navigate to="/signup" />;
	}
    // return<Route {...rest}/>
	return children;
};

export default ProtectRoute;