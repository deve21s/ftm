import React, {useState} from 'react'

function Createtask({addtask}) {
  const [title, setTitle] = useState("");
  const [description, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const Createtask = async (e) => {
    e.preventDefault();
    const task = {
        title,
        description,
        date,
        assign
    };
    let result = await fetch('http://localhost:5000/addtask/60bcc6e83a0d25360c333171',{
            method : 'POST',
            headers : {
            "Content-Type" : "application/json"
            },
            body : JSON.stringify(task)
        })
        let data  = await result.json()
        addtask(data)
        
  };
    return (
        <>
        <form className="flex flex-col justify-center items-center w-full bg-gray-400 rounded-xl" onSubmit={Createtask} >
        <h1 className="sm:text-3xl md:mt-5 sm:m-0 tracking-wider rounded-b-xl bg-yellow-600 p-3 mb-8 font-mono mt-8">
          Add-Task
        </h1>
          <div className="m-2 w-2/3"> 
          <span className="font-semibold">Title</span> 
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Task Title"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
        <span className="font-semibold">Description</span>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your description"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
                
        <div className="m-2 w-2/3">
          <span className="font-semibold">DueDate</span>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
          />
        </div>
        <div className="m-2 w-2/3">
        <span className="font-semibold">Assign</span>
          <select className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10" onChange={(e) => setAssign(e.target.value)}>
            <option value="mitesh">mitesh</option>
            <option value="hitesh">hitesh</option>
            <option value="ramesh">ramesh</option>
            <option value="suresh">suresh</option>
          </select>
        </div>
        
        <input className="text-sm font-mono font-light p-2 m-1 rounded-lg hover:shadow-2xl transform transition cursor-pointer hover:ease-in-out bg-gradient-to-br border-green-700 hover:scale-105 border-solid space-x-1 border-2 tracking-widest" type="submit" value="Save" />
      </form>
        </>
    )
}

export default Createtask
