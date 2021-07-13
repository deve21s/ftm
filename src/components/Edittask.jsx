import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loader from "./Loader";

function Edittask(props) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [dueDate, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const { taskid } = useParams();
  const { error, ispending, data } = useFetch(
    `https://ftmbackend.herokuapp.com/task/${taskid}`
  );
  const { data: member } = useFetch(
    "https://ftmbackend.herokuapp.com/memberlist"
  );
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDes(data.des);
      setDate(data.dueDate);
      setAssign(data.assign);
    }
  }, [data]);
  const EditTask = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const task = {
      title,
      des,
      dueDate,
      assign,
    };
    const result = fetch(
      `https://ftmbackend.herokuapp.com/edittask/${taskid}?token=${token}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    result
      .then(() => {
        window.location.href = `/tasks`;
      })
      .catch(() => {
        console.log("Error");
      });
  };
  return (
    <>
      {ispending && <Loader />}
      {error}
      <Header />
      <form
        className="flex flex-col justify-center items-center w-full h-screen bg-gray-400 rounded-xl"
        onSubmit={EditTask}
      >
        <h1 className="sm:text-3xl md:mt-5 sm:m-0 tracking-wider rounded-b-xl bg-yellow-600 p-3 mb-8 font-mono">
          Edit-Task
        </h1>
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
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Enter your description"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>

        <div className="m-2 w-2/3">
          <span className="font-semibold">DueDate</span>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
          <span className="font-semibold">Assign</span>
          <select
            onChange={(e) => setAssign(e.target.value)}
            value={assign}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          >
            {member &&
              member.map((member) => {
                return (
                  <option value={member._id} key={member._id}>
                    {member.name}
                  </option>
                );
              })}
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

export default Edittask;
