"use client";

import React, { useState } from "react";
import Link from "next/link";

type UserRole = "student" | "teacher";

const SignupPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>("student");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Collection logic for all fields would go here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] px-4 py-12">
      <div className="w-full max-w-[750px] p-10 bg-white rounded-3xl shadow-xl border border-slate-100">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Create Account</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">
            Join Mentora to start your journey
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex mb-8 gap-2 bg-slate-100/50 p-1.5 rounded-2xl">
          {(["student", "teacher"] as UserRole[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer capitalize ${
                role === r 
                  ? "bg-white text-blue-600 shadow-md ring-1 ring-slate-200" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Section: Profile Picture (Optional) */}
          <div className="flex flex-col items-center gap-3 pb-4">
             <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-[10px] text-center p-2 uppercase font-bold">
                Photo
             </div>
             <input type="file" className="text-xs text-slate-500 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
          </div>

          {/* REQUIRED SECTION: Identity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Full Name <span className="text-red-500">*</span></label>
              <input type="text" required placeholder="Jane Doe" className="p-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50/30 text-slate-900" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Age <span className="text-red-500">*</span></label>
              <input type="number" required placeholder="21" className="p-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50/30 text-slate-900" />
            </div>
          </div>

          {/* REQUIRED SECTION: Contact & Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Email <span className="text-red-500">*</span></label>
              <input type="email" required placeholder="jane@example.com" className="p-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50/30 text-slate-900" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Password <span className="text-red-500">*</span></label>
              <input type="password" required placeholder="••••••••" className="p-3.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-slate-50/30 text-slate-900" />
            </div>
          </div>

          {/* OPTIONAL SECTION: Academic & Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                {role === "student" ? "What are you studying?" : "What do you teach?"}
              </label>
              <input type="text" placeholder="e.g. Computer Science" className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">LinkedIn URL</label>
              <input type="url" placeholder="linkedin.com/in/..." className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" />
            </div>
          </div>

          {/* OPTIONAL SECTION: Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
              <input type="tel" placeholder="+1 234 567 890" className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Address / City</label>
              <input type="text" placeholder="New York, USA" className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" />
            </div>
          </div>

          {/* OPTIONAL SECTION: Skills & Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Skills / Interests</label>
              <input type="text" placeholder="Python, UX Design, Guitar" className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Weekly Availability</label>
              <input type="text" placeholder="e.g. 5-10 hours" className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-900" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Bio</label>
            <textarea rows={2} placeholder="Tell us a little about yourself..." className="p-3.5 rounded-xl border border-slate-100 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none text-slate-900" />
          </div>

          {/* REQUIRED: Terms */}
          <div className="flex items-start gap-3 py-2">
            <input type="checkbox" required className="mt-1 w-4 h-4 cursor-pointer accent-blue-600" id="terms" />
            <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
              I agree to the <span className="text-blue-600 font-semibold hover:underline">Terms of Service</span>. <span className="text-red-500">*</span>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full p-4 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 active:scale-[0.99] transition-all cursor-pointer shadow-xl shadow-blue-100"
          >
            Create {role.charAt(0).toUpperCase() + role.slice(1)} Profile
          </button>
        </form>

        <div className="mt-10 text-center border-t border-slate-100 pt-8">
          <p className="text-sm text-slate-600">
            Already have an account? 
            <Link href="/login" className="ml-2 text-blue-600 font-bold hover:underline cursor-pointer">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;