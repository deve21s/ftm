import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function Setpassword() {
    const [tokens, setToken] = useState(null)
    const { token } = useParams()
    useEffect(() => {
        setToken(token)
        
    }, [token])
    return (
        
        <div className="bg-gray-300 w-full h-screen flex justify-center items-center flex-col md:justify-evenly md:flex-row">
            <div className="text-pink-700">
            <h1 className="text-xl mb-5 font-bold break-normal md:ml-5">SetPassword</h1>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-center">
            <input type="password" placeholder="Enter new password" className="rounded-md placeholder-indigo-300 p-2 w-4/5 md:w-1/3 outline-none" />
            <input type="submit" value="Save" className="rounded-md m-5 p-2 md:shadow-md hover:shadow-lg" />
            </div>
        </div>
    )
}

export default Setpassword


