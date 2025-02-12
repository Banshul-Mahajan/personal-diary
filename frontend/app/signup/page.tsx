"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://personal-diary-bfww.onrender.com/auth/signup", formData);
      localStorage.setItem("token", response.data.token); // Save token after signup
      router.push("/"); // Redirect to home
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAE7D3]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
          <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
