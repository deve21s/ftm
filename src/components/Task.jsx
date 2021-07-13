import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import Tasklist from "./Tasklist";
import Loader from "./Loader";
import Header from "./Header";
import Createtask from "./Createtask";
import { useHistory } from "react-router-dom";
const jwt = require("jsonwebtoken");
function Task() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { error, ispending, data } = useFetch(
    "https://ftmbackend.herokuapp.com/tasks"
  );

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  const addtask = (e) => {
    console.log(e);
    setTasks([e, ...tasks]);
  };
  const taskdetail = (e) => {
    console.log(e._id);
    history.push(`/taskdetails/${e._id}`);
  };
  const edittask = (id) => {
    console.log(id);
    history.push(`/edittask/${id}`);
  };
  const deletetask = async (e) => {
    const token = localStorage.getItem("token");
    const decode = jwt.decode(token);
    console.log(decode);
    if (decode.role === "admin") {
      setTasks(tasks.filter((task) => task._id !== e));
      await fetch(`http://localhost:5000/task/${e}/delete?token=${token}`);
    } else {
      setMessage("you don't have parmission to delete task");
    }
  };
  const deletemessage = () => {
    setMessage("");
  };

  return (
    <div>
      <Header />
      {ispending && <Loader />}
      {error && <div>{error}</div>}
      <div className="flex flex-col md:flex-row bg-gray-100 h-screen w-full">
        <div className="md:w-1/2 bg-gray-300 flex justify-center items-centers">
          <Createtask addtask={addtask} />
        </div>
        <div className="flex flex-col  md:w-1/2 bg-gray-800 items-center rounded-t-xl md:rounded-t-none md:rounded-l-xl md:overflow-y-auto p-8 shadow-2xl">
          <h1 className="sm:text-3x1 md:tracking-wider rounded-sm bg-yellow-600 p-3 mb-5 font-mono mt-5">
            Tasklist
          </h1>
          {message && (
            <div className="py-2">
              <span className="bg-red-500">{message}</span>
              <button onClick={deletemessage} className="bg-red-800 ">
                X
              </button>
            </div>
          )}
          {tasks && (tasks.length > 0 || tasks == null) ? (
            tasks.map((task) => (
              <Tasklist
                task={task}
                key={task._id}
                taskdetail={taskdetail}
                edittask={edittask}
                deletetask={deletetask}
              />
            ))
          ) : (
            <h1 className="flex flex-col items-center justify-center text-xl text-red-400">
              No Task to show...
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
