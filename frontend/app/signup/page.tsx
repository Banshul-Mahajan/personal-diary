"use client";

import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await axios.post('${API_URL}/auth/signup', formData);
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#FAE7D3] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-300">
        <div className="absolute inset-0 bg-[url('/lines.svg')] opacity-40"></div>
      </div>

      {/* Watermark Title */}
      <h1 className="absolute text-[80px] font-extrabold text-brown-700 opacity-10 tracking-widest top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Personal Diary
      </h1>

      {/* Signup Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-yellow-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
