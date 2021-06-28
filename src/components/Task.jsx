import React, { useEffect, useState } from "react";
import useFetch from "../useFetch";
import Tasklist from "./Tasklist";
import Loader from "./Loader";
import Header from "./Header";
import Createtask from "./Createtask";
import { useHistory } from "react-router-dom";
function Task() {
  const [tasks, setTasks] = useState([]);
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
  const edittask = (e) => {
    console.log(e._id);
    history.push(`/edittask/${e._id}`);
  };

  return (
    <div>
      <Header />
      {error && <div>{error}</div>}
      {ispending && <Loader />}
      <div className="flex flex-col md:flex-row bg-gray-100 h-screen w-full">
        <div className="md:w-1/2 bg-gray-300 flex justify-center items-centers">
          <Createtask addtask={addtask} />
        </div>
        <div className="flex flex-col  md:w-1/2 bg-gray-800 items-center rounded-t-xl md:rounded-t-none md:rounded-l-xl md:overflow-y-auto p-8 shadow-2xl">
          <h1 className="sm:text-3x1 md:tracking-wider rounded-sm bg-yellow-600 p-3 mb-5 font-mono mt-5">
            Tasklist
          </h1>
          {tasks &&
            tasks.map((task) => (
              <Tasklist
                task={task}
                key={task._id}
                taskdetail={taskdetail}
                edittask={edittask}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Task;
