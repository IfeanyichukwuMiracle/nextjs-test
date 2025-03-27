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
      <header className="w-full py-2 px-2 sm:px-4">
        <Link href="/" className="font-semibold text-[.93rem] ">
          Funds AI
        </Link>
      </header>
      {/* form */}
      <section className="px-2 sm:px-4 py-4 w-full my-[7rem] sm:my-[10rem] flex justify-center items-center">
        <form action="#" className="w-full sm:w-[40%] md:w-[33%] p-4">
          <div className="w-full mb-3">
            <input
              type="email"
              className="w-full rounded-sm bg-gray-50 px-3 py-2"
              placeholder="Email e.g johndoe@gmail.com"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-3">
            <input
              type="password"
              className="w-full rounded-sm bg-gray-50 px-3 py-2"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-sm bg-blue-600 text-white font-semibold px-3 py-2 mt-6"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
