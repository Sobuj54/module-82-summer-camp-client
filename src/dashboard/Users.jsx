import React from "react";
import { useOutletContext } from "react-router-dom";

const Users = () => {
  const [isCollapsed] = useOutletContext();
  return (
    <div
      className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
        isCollapsed ? `left-16` : ` left-56`
      }`}>
      users
    </div>
  );
};

export default Users;
