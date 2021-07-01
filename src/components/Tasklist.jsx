import React from "react";

function Tasklist({ task, taskdetail, deletetask, edittask }) {
  return (
    <div className="bg-gray-400 rounded-md flex flex-row mb-2 w-full p-2 justify-between">
      <div className="flex flex-col" onClick={() => taskdetail(task)}>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
          {task.title}
        </span>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
          {task.dueDate}
        </span>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">
          {task.assign}
        </span>
        <span className="font-mono rounded-xl">{task.des}</span>
      </div>
      <div className="flex flex-col justify-center m-2">
        <button
          className="bg-black text-white p-2 mb-1"
          onClick={() => deletetask(task._id)}
        >
          deleteTask
        </button>
        <button
          className="bg-black text-white p-2"
          onClick={() => edittask(task._id)}
        >
          editTask
        </button>
      </div>
    </div>
  );
}

export default Tasklist;
