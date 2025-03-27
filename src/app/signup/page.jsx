"use client";

import Link from "next/link";
import { useState } from "react";

import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    window.alert("Submitted!");

    const res = await axios.get("/api/login");
    console.log(res.data);
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
        <form action="#" className="w-full sm:w-[40%] md:w-[35%] p-4">
          <div className="w-full mb-3">
            <input
              type="text"
              className="w-full rounded-sm bg-gray-50 px-3 py-2"
              placeholder="Full Name e.g John Doe"
              value={user.fullname}
              name="fullname"
              onChange={handleChange}
            />
          </div>
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
          <div className="w-full mb-3">
            <input
              type="password"
              className="w-full rounded-sm bg-gray-50 px-3 py-2"
              placeholder="Confirm Password"
              value={user.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-sm bg-blue-600 text-white font-semibold px-3 py-2 mt-6"
            >
              Signup
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
