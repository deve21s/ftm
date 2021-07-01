import React, { useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loader from "./Loader";

function Edittask(props) {
  const [title, setTitle] = useState("");
  const [description, setDes] = useState("");
  const [date, setDate] = useState("");
  const { taskid } = useParams();
  const { error, ispending, data } = useFetch(
    `https://ftmbackend.herokuapp.com/task/${taskid}`
  );
  const EditTask = (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
    };
    console.log(task);
    return props.addtask(task);
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
            value={data && data.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Task Title"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
          <span className="font-semibold">Description</span>
          <input
            type="text"
            value={data && data.des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="Enter your description"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>

        <div className="m-2 w-2/3">
          <span className="font-semibold">DueDate</span>
          <input
            type="date"
            value={data && data.dueDate}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
          <span className="font-semibold">Assign</span>
          <select
            value={data && data.assign}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          >
            <option value="mitesh">mitesh</option>
            <option value="hitesh">hitesh</option>
            <option value="ramesh">ramesh</option>
            <option value="suresh">suresh</option>
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
