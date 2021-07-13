import React, { useState } from "react";
import useFetch from "../useFetch";

function Createtask({ addtask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  let todayis = yyyy + "-" + mm + "-" + dd;

  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  const { data } = useFetch("https://ftmbackend.herokuapp.com/memberlist");

  const Createtask = async (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      assign,
    };
    let result = await fetch(
      `https://ftmbackend.herokuapp.com/addtask?token=${token}`,
      {
        method: "POST",
        nocors: true,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    let data = await result.json();
    setMessage("task added");
    addtask(data);
    setTitle("");
    setDescription("");
    setDate("");
    setAssign("");
  };
  return (
    <>
      <form
        className="flex flex-col justify-center items-center w-full bg-gray-400 rounded-xl"
        onSubmit={Createtask}
      >
        <h1 className="sm:text-3xl md:mt-5 sm:m-0 tracking-wider rounded-b-xl bg-yellow-600 p-3 mb-8 font-mono mt-8">
          Add-Task
        </h1>
        {message && (
          <div className="flex mt-3">
            <h1 className="text-lg bg-red-300">{message}</h1>
            <span
              className="px-2 bg-red-400 cursor-pointer"
              onClick={() => setMessage("")}
            >
              X
            </span>
          </div>
        )}
        <div className="m-2 w-2/3">
          <span className="font-semibold">Title</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Task Title"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
          <span className="font-semibold">Description</span>
          <input
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your description"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>

        <div className="m-2 w-2/3">
          <span className="font-semibold">DueDate</span>
          <input
            type="date"
            value={date}
            min={todayis}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
          <span className="font-semibold">Assign</span>
          <select
            value={assign}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
            onChange={(e) => setAssign(e.target.value)}
          >
            <option value="">Assign task</option>
            {data &&
              data.map((member) => (
                <option key={member._id} value={member._id}>
                  {member.name}
                </option>
              ))}
          </select>
        </div>

        <input
          className="text-sm font-mono font-light p-2 m-1 rounded-lg hover:shadow-2xl transform transition cursor-pointer hover:ease-in-out bg-gradient-to-br border-green-700 hover:scale-105 border-solid space-x-1 border-2 tracking-widest"
          type="submit"
          value="Save"
        />
      </form>
    </>
  );
}

export default Createtask;
