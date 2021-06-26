import React, { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

function Setpassword() {
  const [password, setPassword] = useState(null);
  const { token } = useParams();
  const history = useHistory();
  const submitmember = async () => {
    let result = await fetch(`http://localhost:5000/setpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, token }),
    });
    let data = await result.json();
    console.log(data);
    history.push("/");
  };
  return (
    <div className="bg-gray-300 w-full h-screen flex justify-center items-center flex-col md:justify-evenly md:flex-row">
      <div className="text-pink-700">
        <h1 className="text-xl mb-5 font-bold break-normal md:ml-5">
          SetPassword
        </h1>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-center">
        <input
          type="password"
          placeholder="Enter new password"
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md placeholder-indigo-300 p-2 w-4/5 md:w-1/3 outline-none"
        />
        <input
          type="submit"
          value="Save"
          onClick={submitmember}
          disabled={!password}
          className="rounded-md m-5 p-2 md:shadow-md hover:shadow-lg"
        />
      </div>
    </div>
  );
}

export default Setpassword;
