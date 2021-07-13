import "../App.css";
import { useState } from "react";
import React from "react";
import NavbarButton from "./NavbarButton";
import { useHistory } from "react-router-dom";

function Ragister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassward] = useState("");

  const [message, setMessage] = useState("");
  const history = useHistory();
  async function onSubmit(e) {
    e.preventDefault();
    const ragisterdetails = { username, email, password };
    let result = await fetch(`https://ftmbackend.herokuapp.com/ragister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ragisterdetails),
    });
    let data = await result.json();
    if (result.status === 200) {
      localStorage.setItem("token", data);
      history.push("/");
    }

    setMessage(data);
  }
  return (
    <div className="w-full h-screen flex">
      <img
        src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="background"
        className="object-cover object-center h-screen hidden md:block md:w-6/12"
      />
      <div className="bg-white flex flex-col justify-center items-center w-full md:w-6/12 shadow-lg">
        <NavbarButton />
        {message && <span>{message}</span>}
        <div className="w-4/5 md:w-1/2">
          <input
            type="text"
            name="username"
            placeholder="userName"
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassward(e.target.value)}
            autoComplete="off"
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded"
          />
          <button
            onClick={onSubmit}
            className="bg-blue-400 hover:bg-blue-700 hover:text-white text-left text-black px-3 py-1 rounded text-lg focus:outline-none shadow"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ragister;
