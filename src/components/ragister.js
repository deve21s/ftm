import "../App.css";
import { useState } from "react";
import React from "react";
import NavbarButton from "./NavbarButton";
import { useHistory } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

function Ragister() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassward] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function onSubmit(e) {
    e.preventDefault();
    const ragisterdetails = { username, email, password };
    let result = await fetch("https://ftmbackend.herokuapp.com/ragister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ragisterdetails),
    });
    const data = await result.json();
    if (result.status === 200) {
      localStorage.setItem("token", data);
      history.push("/");
    }

    setMessage(data);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-6xl items-stretch gap-6 p-4 sm:p-8 md:grid-cols-2">
        <div className="relative hidden overflow-hidden rounded-2xl md:block">
          <img
            src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>

        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <h1 className="mb-2 text-2xl font-semibold text-slate-900">Create account</h1>
            <p className="mb-6 text-sm text-slate-500">Set up your family workspace in minutes.</p>
            <NavbarButton />
            {message && <p className="mb-4 text-sm text-rose-600">{message}</p>}
            <form onSubmit={onSubmit} className="space-y-4">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassward(e.target.value)}
                autoComplete="off"
                required
              />
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Ragister;
