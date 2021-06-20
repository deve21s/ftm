import React from "react";
import { Link } from "react-router-dom";
function NavbarButton() {
  return (
    <div className="m-2 flex flex-row  p-2 mb-5 space-x-5">
      <Link
        to="/"
        className=" hover:bg-blue-700 active:bg-pink-600 text-black px-3 py-1 rounded text-lg focus:outline-none "
      >
        Sign-In
      </Link>
      <Link
        to="/ragister"
        className=" hover:bg-blue-700 active:bg-pink-600 text-black  px-3 py-1 rounded text-lg focus:outline-none "
      >
        Sign-up
      </Link>
    </div>
  );
}

export default NavbarButton;
