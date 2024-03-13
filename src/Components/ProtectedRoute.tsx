import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./ContextApi";

const ProtectRoute = ({ children }) => {
	// const navigate=useNavigate();
	const auth = useAuth();

	if (!auth.user) {
		<Navigate to="/login" />;
	}
	return children;
};

export default ProtectRoute;