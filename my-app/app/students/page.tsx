"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { students } from './lib/data'; // Assuming data is stored here

export default function StudentDashboard() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("Subject");

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) || 
                          student.interest.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = subject === "Subject" || student.subject === subject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="w-full px-6 py-10 min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div className="text-2xl font-bold text-slate-900">Mentora · Teacher</div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-slate-200 bg-white text-blue-600 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-all">
            Collaborate
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all">
            Schedule class
          </button>
        </div>
      </header>

      {/* Controls / Filters */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-sm">
        <input
          type="text"
          placeholder="Search students by name or interest..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:col-span-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <select 
          onChange={(e) => setSubject(e.target.value)}
          className="px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-600 outline-none"
        >
          <option>Subject</option>
          <option>Mathematics</option>
          <option>Computer Science</option>
          <option>Physics</option>
        </select>
        <select className="px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-600 outline-none">
          <option>Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <select className="px-4 py-3 border border-slate-200 rounded-xl bg-white text-slate-600 outline-none">
          <option>Availability</option>
          <option>Weekdays</option>
          <option>Weekends</option>
        </select>
      </section>

      {/* Student Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-[17px] font-semibold text-slate-900">{student.name}</div>
            <div className="text-sm text-slate-500">{student.interest}</div>
            
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs bg-slate-100 border border-slate-200 text-slate-600">{student.level}</span>
              <span className="px-3 py-1 rounded-full text-xs bg-slate-100 border border-slate-200 text-slate-600">{student.availability}</span>
            </div>

            <div className="text-[13px] text-slate-500 flex justify-between mt-2">
              <span>{student.role}</span>
              <span>{student.trait}</span>
            </div>

            <div className="mt-auto pt-4 flex gap-3">
              <Link 
                href={`/students/${student.id}`}
                className="flex-1 py-2.5 text-center rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 text-blue-600 hover:bg-slate-100 transition-colors"
              >
                View profile
              </Link>
              <button className="flex-1 py-2.5 text-center rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 text-blue-600 hover:bg-slate-100 transition-colors">
                Answer doubt
              </button>
            </div>
          </div>
        ))}
      </section>

      <footer className="mt-16 text-center text-sm text-slate-500">
        Helping educators find the right learners — faster.
      </footer>
    </div>
  );
}