import React from "react";
import useContextApi from "../Hooks/useContextApi";
import useFindRole from "../Hooks/useFindRole";
import { useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContextApi();
  const [userRole, adminIsLoading] = useFindRole();
  const location = useLocation();

  if (loading || adminIsLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <div
          className="inline-block text-cyan-500 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (user && userRole.role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
