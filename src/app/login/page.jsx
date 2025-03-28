"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleChange(e) {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    window.alert("Submitted!");
  }
  return (
    <>
      {/* Header */}
      <header className="w-full fixed top-0 bg-[#fdfdfd] z-50 flex px-3 py-3  justify-between items-center">
        <Link href="/">
          <p className="font-bold">Climax AI</p>
        </Link>
      </header>
      {/* form */}
      <section className="px-2 sm:px-4 py-4 w-full my-[7rem] sm:my-[10rem] flex justify-center items-center">
        <form
          action="#"
          className="w-full sm:w-[40%] md:w-[33%] p-4 sm:shadow-lg rounded-md"
        >
          <p className="font-bold text-xl mb-4">Login</p>
          <div className="w-full mb-3">
            <input
              type="email"
              className="w-full rounded-full bg-white px-3 py-2"
              placeholder="Email e.g johndoe@gmail.com"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-1">
            <input
              type="password"
              className="w-full rounded-full bg-white px-3 py-2"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <p className="text-[.85rem] w-full text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline text-blue-500">
              Signup
            </Link>
          </p>
          <div className="w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-full bg-gray-950 text-white font-semibold px-3 py-2 mt-6"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
