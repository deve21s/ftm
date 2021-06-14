import React, { useState } from "react";

function Createmember(props) {
  const [email, setEmail] = useState("");

  const createmember = (e) => {
    e.preventDefault();
    const family = {
      email,
    };
    return props.addmember(family);
  };
  return (
    <>
      <form
        className="flex flex-col justify-center items-center w-full space-x-1 space-y-2"
        onSubmit={createmember}
      >
        <h1 className="sm:text-3xl mt-5 sm:m-0 tracking-wider rounded-sm bg-yellow-600 p-3 mb-5 font-mono">
          Add-Member
        </h1>
        <div className="flex justify-center">
          <div className="relative flex flex-wrap items-stretch mb-3">
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
            />
          </div>
          <div className="flex items-stretch mb-3 p-1 px-4 rounded-sm bg-blue-500 ml-5 font-extrabold text-xl">
            +
          </div>
        </div>
        <div className="">
          <input className="p-1 mb-5" type="submit" value="Save" />
        </div>
      </form>
    </>
  );
}

export default Createmember;
