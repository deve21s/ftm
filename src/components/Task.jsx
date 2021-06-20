import React, {useEffect, useState} from 'react'
import useFetch from '../useFetch'
import Tasklist from './Tasklist'
import Loader from './Loader'
import Header from './Header'
import Createtask from './Createtask'
import { useHistory } from 'react-router-dom'
function Task() {
  const [tasks, setTasks] = useState([])
  const history = useHistory()
  const {error, ispending, data} = useFetch("http://localhost:5000/tasks/60bcc6e83a0d25360c333171");

  useEffect(()=> {
    setTasks(data)
  },[])
 

  const taskdetail = (e) => {
    console.log(e._id)
    history.push(`/taskdetails/${e._id}`)
  }
  const addtask = (e) => { 
    console.log(e)
      setTasks(...data, e)
  }
  const deletetask = (e) => {
    data.Tasks.filter(task => task._id !== e._id)
  }
    
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
            {data &&
            data.map((task) => (
              <Tasklist task={task}  key={task._id} taskdetail={taskdetail} onClick={deletetask} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Task
