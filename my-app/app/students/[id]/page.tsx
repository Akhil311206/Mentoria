import { students } from '../lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function StudentProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) return notFound();

  return (
    <div className="full-screen-wrapper">
      <Link href="/students" className="text-sm text-blue-600 hover:underline mb-10 inline-block font-semibold">
        ← Back to Dashboard
      </Link>

      <div className="profile-card-wide">
        <header className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
              {student.name}
            </h1>
            <p className="text-2xl text-blue-600 font-medium">{student.interest}</p>
          </div>
          <span className="px-6 py-2 bg-green-50 text-green-700 border border-green-100 rounded-full text-sm font-bold">
            Active Now
          </span>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12 border-y border-slate-100">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Current Level</h4>
            <p className="text-slate-900 text-xl font-semibold">{student.level}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Preferred Time</h4>
            <p className="text-slate-900 text-xl font-semibold">{student.availability}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Student Status</h4>
            <p className="text-slate-900 text-xl font-semibold">{student.role}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Engagement</h4>
            <p className="text-slate-900 text-xl font-semibold">{student.trait}</p>
          </div>
        </section>

        <footer className="mt-12 flex gap-6">
          <button className="flex-1 bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
            Schedule 1:1 Session
          </button>
          <button className="flex-1 bg-white border border-slate-200 text-slate-700 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
            Message Student
          </button>
        </footer>
      </div>
    </div>
  );
}