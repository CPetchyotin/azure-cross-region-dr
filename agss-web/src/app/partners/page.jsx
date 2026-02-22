import React from 'react';
import { partnerLogos } from '@/data/mockData';

export default function PartnersPage() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Our Strategic Ecosystem</h1>
          <p className="text-xl text-slate-600 font-light">
            We collaborate with world-class technology providers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partnerLogos.map((partner, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center h-48">
               <img 
                 src={partner.url} 
                 alt={`${partner.name} Logo`} 
                 className="max-h-20 max-w-[80%] object-contain transition-all duration-300" 
               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}