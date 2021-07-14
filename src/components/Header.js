import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";

function Header() {
  const token = localStorage.getItem("token");
  const logout = () => {
    localStorage.removeItem("token");
    return <Redirect to="/" />;
  };

  return (
    <div className="w-full space-x-2 flex justify-center md:justify-between px-8 font-thin text-xl bg-white p-2 fixed z-10">
      <div>
        <NavLink
          className="ring-2 px-2 ring-green-400 hover:bg-green-400"
          to="/family"
          activeClassName="bg-green-400"
        >
          Family
        </NavLink>
        <NavLink
          className="ring-2 px-2 ring-green-400 hover:bg-green-400"
          to="/tasks"
          activeClassName="bg-green-400"
        >
          Tasks
        </NavLink>
      </div>
      <div>
        {token && (
          <Link
            onClick={logout}
            className="ring-2 px-2 ring-green-400 hover:bg-green-400"
            to="/logout"
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
