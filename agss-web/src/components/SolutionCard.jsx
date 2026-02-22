// ไฟล์: src/components/SolutionCard.jsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SolutionCard({ title, desc, icon: Icon, highlight, color, theme, tags, slug }) {
  const themeColors = {
    cyan: "bg-cyan-50 text-cyan-700",
    rose: "bg-rose-50 text-rose-700",
    amber: "bg-amber-50 text-amber-700",
    emerald: "bg-emerald-50 text-emerald-700",
    indigo: "bg-indigo-50 text-indigo-700",
    sky: "bg-sky-50 text-sky-700",
    teal: "bg-teal-50 text-teal-700",
    violet: "bg-violet-50 text-violet-700",
  };
  
  const tagClass = themeColors[theme] || "bg-slate-50 text-slate-700";

  return (
    // เปลี่ยนจาก div นอกสุดเป็น Link และใช้ slug เพื่อระบุ URL
    <Link href={`/solutions/${slug}`} className="block h-full group">
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-slate-100 transition-colors"></div>
        
        {highlight && (
          <div className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 rounded-full shadow-md z-10">
            {highlight}
          </div>
        )}
        
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md bg-gradient-to-br ${color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={32} strokeWidth={2} />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors relative z-10">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {tags && tags.map((tag, i) => (
            <span key={i} className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded-md border border-transparent hover:border-current transition-colors ${tagClass}`}>
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-600 leading-relaxed text-sm flex-grow relative z-10">{desc}</p>
        
        <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-cyan-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 relative z-10">
          Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}