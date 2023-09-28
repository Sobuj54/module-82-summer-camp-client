import {
  faCartShopping,
  faChevronLeft,
  faCubes,
  faHouse,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-56 border-2">
      <div className="flex items-center justify-end my-6 mr-2">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>

      <div className="border w-full border-black/50 mb-5" />
      <ul className="ml-4 space-y-5">
        <li className="text-lg font-sans">
          <FontAwesomeIcon icon={faHouse} className="mr-5" /> Home
        </li>
        <li className="text-lg font-sans">
          <FontAwesomeIcon icon={faCubes} className="mr-5" /> Dashboard
        </li>
        <li className="text-lg font-sans">
          <FontAwesomeIcon icon={faCartShopping} className="mr-5" /> Orders
        </li>
        <li className="text-lg font-sans">
          <FontAwesomeIcon icon={faUsers} className="mr-5" /> Users
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
