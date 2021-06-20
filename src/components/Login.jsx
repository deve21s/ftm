import "../App.css";
import {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import React from 'react'
import NavbarButton from "./NavbarButton";


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassward] = useState('')
    let history = useHistory()
    useEffect(()=> {
        
        if(localStorage.getItem('token')){
            history.push('/family')
        }
    })
   async function onSubmit(e){
        let item = {email, password}
        e.preventDefault()
        const loginvalue = {email,password}
        console.log(loginvalue)
        let result = await fetch('http://localhost:5000/login',{
            method : 'POST',
            headers : {
            "Content-Type" : "application/json"
            },
            body : JSON.stringify(item)
        })
         result = await result.json()
        localStorage.setItem('token', JSON.stringify(result))
        history.push('/family')
    }
   
return( 
<div className="w-full h-screen flex">
            <img src="http://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80" loading="lazy" alt="background" className="object-cover object-center h-screen w-6/12" />
    <div className="bg-white flex flex-col justify-center items-center w-6/12 shadow-lg">
        <NavbarButton />
            <form className="w-1/2">
                <input type="email" name="email"  placeholder="Email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" required/>
                <input type="password" name="password" placeholder="password" onChange={(e) => setPassward(e.target.value)} autoComplete="off" className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" required/>
                <button onClick={onSubmit} className="bg-blue-400 hover:bg-blue-700 hover:text-white text-left text-black px-3 py-1 rounded text-lg focus:outline-none shadow">Sign In</button>
            </form>
    </div>
</div>
  )

}

export default Login;
