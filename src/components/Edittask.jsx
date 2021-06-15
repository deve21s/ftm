import React, {useState} from 'react'

function Edittask() {
    const [task, settask] = useState(null)
    
    return (
        <div className="flex flex-row justify-center items-center w-full h-screen bg-gray-500">
            <input type="text" value={task.title} />
            <input type="text" value={task.title} />
            <input type="date" value={task.title} />
            <input type="text" value={task.title} />
            <input type="text" value={task.title} />
              
        </div>
    )
}

export default Edittask
