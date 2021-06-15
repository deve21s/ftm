import React, {useState} from 'react'

function Taskdetails() {
    const [task, setTask] = useState(null)
    return (
        <div>
            <h1>{task.title}</h1>
            <h1>{task.description}</h1>
            <h1>{task.duedate}</h1>
            <h1>{task.assign}</h1>            
        </div>
    )
}

export default Taskdetails
