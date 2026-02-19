import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

function NavbarButton() {
  const baseClasses =
    "rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300";

  return (
    <div className="mb-6 grid w-full grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1">
      <NavLink
        exact
        to="/"
        className={baseClasses}
        activeClassName={cn(baseClasses, "bg-white text-slate-900 shadow")}
      >
        Sign In
      </NavLink>
      <NavLink
        to="/ragister"
        className={baseClasses}
        activeClassName={cn(baseClasses, "bg-white text-slate-900 shadow")}
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default NavbarButton;
