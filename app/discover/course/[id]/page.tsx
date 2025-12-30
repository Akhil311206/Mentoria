"use client";

import { useParams, useRouter } from "next/navigation";
import { cards } from "../../data";

export default function CoursePage() {
  const router = useRouter();
  const params = useParams();
  const courseId = Number(params.id);

  const course = cards.find(c => c.id === courseId);

  // Check if the user is already enrolled
  const isEnrolled = course?.type === "my courses";

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500 font-medium">
        Course not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-black transition-all cursor-pointer shadow-sm active:scale-95"
      >
        ← Back to Discover
      </button>

      {/* Course Card */}
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-white/50 flex flex-col gap-6">
        
        {/* Badge for Enrolled status */}
        {isEnrolled && (
          <span className="w-fit px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-wider">
            Already Enrolled
          </span>
        )}

        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{course.title}</h1>
          <p className="text-lg text-indigo-600 font-medium">{course.teacher}</p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <p className="text-slate-600 leading-relaxed italic">"{course.description}"</p>
        </div>

        <div className="flex gap-4 text-sm text-slate-500">
           <div className="flex items-center gap-1">
             <span className="font-bold text-slate-700">Type:</span> 
             <span className="capitalize">{course.type}</span>
           </div>
           <div className="flex items-center gap-1">
             <span className="font-bold text-slate-700">Rating:</span> 
             <span className="text-amber-500">★ {course.rating}</span>
           </div>
        </div>

        {/* Schedule Section */}
        <div className="mt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            📅 Class Schedule
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {course.classes.map((c, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center px-5 py-4 border border-slate-100 bg-white rounded-2xl text-slate-700 hover:border-indigo-200 hover:shadow-sm transition-all group"
              >
                <span className="font-bold text-slate-900 group-hover:text-indigo-600">{c.day}</span>
                <span className="text-slate-500 font-medium">{c.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Action Button */}
        <button 
          className={`mt-6 w-full py-4 rounded-2xl font-bold text-sm transition-all cursor-pointer shadow-lg active:scale-[0.98] ${
            isEnrolled 
              ? "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200" 
              : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-100"
          }`}
        >
          {isEnrolled ? "Schedule Class" : "Join / Book Class"}
        </button>

        {isEnrolled && (
          <p className="text-center text-xs text-slate-400">
            You are currently enrolled in this course. You can schedule your next session above.
          </p>
        )}
      </div>
    </main>
  );
}