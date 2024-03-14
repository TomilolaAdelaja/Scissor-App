import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./ContextProvider";

type ProtectedRoute = {
    children: ReactNode;
}

const ProtectRoute = ({ children }: ProtectedRoute) => {
	// const navigate=useNavigate();
	const auth = useAuth();

	if (!auth.user) {
		<Navigate to="/signup" />;
	}
	return children;
};

export default ProtectRoute;