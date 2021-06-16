import React from 'react'

function Tasklist({task}) {
    return (
        <div className="bg-gray-400 rounded-md space-x-1 space-y-1 mb-2 w-full p-2 grid grid-cols-2 grid-rows-2 grid-flow-row">
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">{task.title}</span>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">{task.dueDate}</span>
        <span className="sm:text-lg font-sarif font-semibold md:tracking-wider">{task.assign}</span>
        <span className="font-mono rounded-xl">{task.des}</span>
      </div>
    )
}

export default Tasklist
