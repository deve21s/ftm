import React from "react";
import { Link, NavLink } from "react-router-dom";
function NavbarButton() {
  return (
    <div className="m-2 flex flex-row  p-2 mb-5 space-x-5">
      <NavLink
        exact
        to="/"
        activeClassName="bg-blue-200"
        className=" hover:bg-blue-700 active:bg-pink-600 text-black px-3 py-1 rounded text-lg focus:outline-none "
      >
        Sign-In
      </NavLink>
      <NavLink
        to="/ragister"
        activeClassName="bg-blue-200"
        className=" hover:bg-blue-700 active:bg-pink-600 text-black  px-3 py-1 rounded text-lg focus:outline-none "
      >
        Sign-up
      </NavLink>
    </div>
  );
}

export default NavbarButton;
