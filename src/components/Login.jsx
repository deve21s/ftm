import "../App.css";
import { useState } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import React from "react";
import NavbarButton from "./NavbarButton";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassward] = useState("");
  const history = useHistory();
  const { state } = useLocation();

  if (localStorage.getItem("token")) {
    return <Redirect to={state?.from.pathname || "/family"} />;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const item = { email, password };
    let result = await fetch("https://ftmbackend.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("token", result);
    history.push("/family");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-6xl items-stretch gap-6 p-4 sm:p-8 md:grid-cols-2">
        <div className="relative hidden overflow-hidden rounded-2xl md:block">
          <img
            src="http://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            loading="lazy"
            alt="background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>

        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <h1 className="mb-2 text-2xl font-semibold text-slate-900">Welcome back</h1>
            <p className="mb-6 text-sm text-slate-500">Sign in to manage your family tasks.</p>
            <NavbarButton />
            <form onSubmit={onSubmit} className="space-y-4">
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
                Sign In
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;
