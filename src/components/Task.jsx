import React from 'react'
import useFetch from '../useFetch'
import Tasklist from './Tasklist'
import Loader from './Loader'
import Createtask from './Createtask'
function Task() {
    const {error, ispending, data} = useFetch("http://localhost:5000/task/60bcc6e83a0d25360c333171");
    return (
        // <div className="flex w-full h-screen bg-gray-800 p-2">
        //     <div className="flex w-1/2 m-2">
        //         <Createtask />
        //     </div>
        //     <div className="flex w-1/2 m-2">
        //     <div>{ispanding && <Loader/>}</div>
        //     {data &&
        //     data.Tasks.map((task) => (
        //       <Tasklist task={task}  key={task._id} />
        //     ))}
        //     </div>
        // </div>
        //task
        <div>
        {error && <div>{error}</div>}
        {ispending && <Loader />}
        <div className="flex flex-col md:flex-row bg-gray-100 h-screen w-full">
          <div className="md:w-1/2 bg-gray-300 flex justify-center items-centers">
            <Createtask  />
          </div>
          <div className="flex flex-col  md:w-1/2 bg-gray-800 items-center rounded-t-xl md:rounded-t-none md:rounded-l-xl p-8 shadow-2xl">
            <h1 className="sm:text-3x1 md:tracking-wider rounded-sm bg-yellow-600 p-3 mb-5 font-mono">
              Tasklist
            </h1>
            {data &&
            data.Tasks.map((task) => (
              <Tasklist task={task}  key={task._id} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Task
