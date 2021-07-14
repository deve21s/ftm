import React from "react";
import useFetch from "../useFetch";

function Tasklist({ task, taskdetail, deletetask, edittask, Completetask }) {
  const { data: members } = useFetch(
    "https://ftmbackend.herokuapp.com/memberlist"
  );
  return (
    <div
      className={
        task.isCompleted
          ? "bg-green-400 rounded-md flex flex-nowrap flex-row mb-2 w-full p-2 justify-between"
          : "bg-gray-400 rounded-md flex flex-nowrap flex-row mb-2 w-full p-2 justify-between"
      }
    >
      <div className="flex flex-col w-full" onClick={() => taskdetail(task)}>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
          {task.title}
        </span>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
          {task.dueDate}
        </span>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
          {members && members.find((a) => a._id === task.assign).name}
        </span>
        <span className="font-mono rounded-xl">{task.des}</span>
      </div>
      <div className="flex flex-col justify-center m-2">
        <button
          className="bg-gray-700 text-white p-2 mb-1 hover:bg-gray-800"
          onClick={() => deletetask(task._id)}
        >
          deleteTask
        </button>
        <button
          className="bg-gray-500 text-white p-2 mb-1 hover:bg-gray-700"
          onClick={() => edittask(task._id)}
        >
          editTask
        </button>
        <button
          disabled={task.isCompleted}
          className="bg-gray-700 text-white p-2 hover:bg-gray-700"
          onClick={() => Completetask(task)}
        >
          Complete
        </button>
      </div>
    </div>
  );
}

export default Tasklist;
