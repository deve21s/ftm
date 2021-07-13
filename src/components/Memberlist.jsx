import React from "react";

function memberlist({ member }) {
  return (
    <div className="bg-gray-400 rounded-md space-x-1 space-y-1 mb-2 w-full p-2  flex flex-col md:flex-row md:justify-between">
      {/* <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
        {member.email}
      </span> */}
      <span className="font-bold font-mono">{member.name}</span>
      <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
        {member.email}
      </span>
      <span className="bg-green-600 font-mono rounded-xl flex flex-wrap flex-initial p-2 sm:font-semibold md:items-baseline sm:shadow-lg">
        {member.role.toUpperCase()}
      </span>
    </div>
  );
}
export default memberlist;
