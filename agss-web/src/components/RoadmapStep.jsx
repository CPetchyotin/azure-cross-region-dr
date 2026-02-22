import React from 'react';

export default function RoadmapStep({ year, title, desc, color, icon: Icon }) {
  return (
    <div className="relative z-10 text-center group">
      <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-lg border-4 transition-all duration-500 transform group-hover:scale-110 mb-6 bg-white ${color.replace('text-', 'border-').split(' ')[0]}`}>
         <div className={`w-full h-full rounded-full flex items-center justify-center ${color}`}>
           <div className="flex flex-col items-center">
             <Icon size={20} className="mb-1 opacity-80" />
             <span className="font-bold text-xs uppercase tracking-tighter">{year}</span>
           </div>
         </div>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full group-hover:border-cyan-200 group-hover:shadow-md transition-all">
        <h4 className="font-bold text-slate-900 mb-2 text-lg">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
