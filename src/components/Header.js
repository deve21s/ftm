import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-center space-x-2 font-thin text-xl bg-white p-2 fixed z-10">
      <Link
        className="ring-2 px-2 ring-green-400 hover:bg-green-400"
        to="/family"
      >
        Family
      </Link>
      <Link
        className="ring-2 px-2 ring-green-400 hover:bg-green-400"
        to="/tasks"
      >
        Tasks
      </Link>
    </div>
  );
}

export default Header;
