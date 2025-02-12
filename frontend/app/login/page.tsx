"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://personal-diary-bfww.onrender.com/auth/login", formData);
      localStorage.setItem("token", response.data.token); // Store token
      router.push("/"); // Redirect to home after login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAE7D3]">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
          <button type="submit" className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
