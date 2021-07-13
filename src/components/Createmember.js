import React, { useState } from "react";

function Createmember(props) {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const token = localStorage.getItem("token");

  const createmember = async (e) => {
    e.preventDefault();
    const family = {
      email,
      name: "deven",
    };
    let result = await fetch(
      `https://ftmbackend.herokuapp.com/addmember?token=${token}`,
      {
        method: "POST",
        nocors: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(family),
      }
    );
    let data = await result.json();
    setMessage(data);
    setEmail("");
  };
  const deleteMessage = () => {
    setMessage("");
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
        {message && (
          <div className="text-lg bg-red-400">
            <span className="text-lg">{message}</span>
            <span
              className="bg-red-700 ml-1 px-2 cursor-pointer"
              onClick={deleteMessage}
            >
              X
            </span>
          </div>
        )}
        <div className="flex justify-center">
          <div className="relative flex flex-wrap items-stretch mb-3 mr-5">
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
            />
          </div>
          <div className="relative flex flex-wrap items-stretch mb-3 mr-5">
            <input
              type="button"
              value="+"
              className=" bg-blue-500 rounded border border-Gray-300 text-xl outline-none focus:outline-none focus:ring w-full px-4 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <input
            className="p-1 mb-5 cursor-pointer"
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </>
  );
}

export default Createmember;
