"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { users } from "../students/lib/SignupData"; // Adjust path as needed

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Find user by email
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (user) {
      // Redirect based on the 'type' field
      if (user.type === "teacher") {
        router.push("/discover"); // Teachers go to discover
      } else {
        router.push("/students"); // Students go to students list
      }
    } else {
      // Logic if user is not found
      setError("User not found. Please check your email or sign up.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4">
      <div className="w-full max-w-[400px] p-8 bg-white rounded-2xl shadow-xl border border-slate-100">
        <h1 className="text-2xl font-bold text-slate-900 text-center mb-2">Sign In</h1>
        <p className="text-center text-slate-500 text-sm mb-8">Access your Mentora dashboard</p>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-tight ml-1">Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..." 
              className="p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50/30" 
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-tight ml-1">Password</label>
            <input 
              type="password" 
              required 
              placeholder="••••••••" 
              className="p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50/30" 
            />
          </div>

          {error && <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>}

          <button 
            type="submit" 
            className="mt-4 p-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 cursor-pointer shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <p className="text-sm text-slate-600 font-medium">
            Test account? Try <br/>
            <span className="text-xs text-slate-400 italic">alice@example.com (Student)</span> or <br/>
            <span className="text-xs text-slate-400 italic">robert@mentora.com (Teacher)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;