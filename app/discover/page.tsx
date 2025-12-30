"use client";

import React, { useState } from 'react';
import { cards } from './data'; // Your updated data file
import Link from 'next/link';

const DiscoverPage = () => {
  const [activeType, setActiveType] = useState<string>("all");
  const [search, setSearch] = useState("");

  // Filter Logic: Handles both the "Type" (Free/Paid/My Courses) and the Search bar
  const filteredCards = cards.filter((card) => {
    const matchesType = activeType === "all" || card.type === activeType;
    const matchesSearch = card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.teacher.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  const filterOptions = [
    { label: "All Classes", value: "all" },
    { label: "Free", value: "free" },
    { label: "Paid", value: "paid" },
    { label: "My Courses", value: "my courses" },
  ];

  return (
    <div className="w-full px-6 py-10 min-h-screen bg-[#f8fafc]">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Discover Classes</h1>
        <p className="text-slate-500 mt-2">Find the best mentors for your learning journey.</p>
      </header>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between text-black">

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by course or teacher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:max-w-sm p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />

        {/* Type Filter (Segmented Control) */}
        <div className="flex bg-slate-100 p-1 rounded-xl w-full md:w-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveType(opt.value)}
              className={`flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${activeType === opt.value
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card) => (
          <div key={card.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${card.type === 'my courses' ? 'bg-green-100 text-green-700' :
                  card.type === 'paid' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                }`}>
                {card.type}
              </span>
              <div className="text-amber-500 font-bold text-sm">★ {card.rating}</div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
            <p className="text-sm text-slate-500 mb-4">{card.teacher}</p>
            <p className="text-sm text-slate-600 line-clamp-2 mb-6">{card.description}</p>

            <Link href={`/discover/course/${card.id}`} className="mt-auto w-full">
              <button className="w-full py-3 rounded-xl bg-slate-50 text-blue-600 font-bold text-sm border border-slate-200 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                {card.type === 'my courses' ? 'Go to Classroom' : 'View Details'}
              </button>
            </Link>
          </div>
        ))}

        {filteredCards.length === 0 && (
          <div className="col-span-full text-center py-20 text-slate-400">
            No courses found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;