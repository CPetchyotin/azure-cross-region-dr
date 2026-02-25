"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  Activity,
  Target,
  BarChart,
  Cloud,
  ShieldCheck,
  Monitor,
  FileText,
  Ban,
  Mail,
  Server,
  AlertTriangle,
  X,
} from "lucide-react";
import { cases } from "@/data/mockData";

export default function SuccessStoriesPage() {
  const [selectedCase, setSelectedCase] = useState(null);

  // ป้องกันการ Scroll หน้าเว็บตอนเปิด Modal
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCase]);

  // ฟังก์ชันสำหรับวาด Diagram ของแต่ละเคส (เก็บโค้ดเดิมของคุณไว้ 100%)
  const renderDiagram = (id) => {
    if (id === 1) {
      return (
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60 mt-6 shadow-inner">
          <div className="font-bold text-slate-500 mb-8 text-xs uppercase tracking-widest text-center">
            Secure Network Architecture
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 transition-transform hover:scale-105">
                <Cloud size={32} className="text-slate-400" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                Internet
              </span>
            </div>
            <ArrowRight
              className="text-slate-300 hidden md:block"
              strokeWidth={1.5}
            />
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 z-10 relative transition-transform hover:scale-105">
                <ShieldCheck
                  size={36}
                  className="text-white"
                  strokeWidth={1.5}
                />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm ring-2 ring-white">
                  BLOCK
                </div>
              </div>
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                Next-Gen Firewall
              </span>
            </div>
            <ArrowRight
              className="text-slate-300 hidden md:block"
              strokeWidth={1.5}
            />
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md border border-slate-100 relative transition-transform hover:scale-105">
                <Monitor
                  size={32}
                  className="text-green-500"
                  strokeWidth={1.5}
                />
                <Activity
                  size={14}
                  className="text-green-400 absolute top-2 right-2 animate-pulse"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                Endpoints
              </span>
            </div>
          </div>
        </div>
      );
    } else if (id === 2) {
      return (
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60 mt-6 overflow-hidden relative shadow-inner">
          <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-[10px] px-4 py-1.5 font-bold rounded-bl-xl tracking-wider">
            DLP ACTIVE
          </div>
          <div className="font-bold text-slate-500 mb-8 text-xs uppercase tracking-widest text-center">
            Microsoft Purview Protection
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 w-24 relative transition-transform hover:scale-105">
                <FileText
                  size={32}
                  className="text-slate-400 mb-3 mx-auto"
                  strokeWidth={1.5}
                />
                <div className="bg-amber-100 text-amber-700 text-[8px] font-bold px-1.5 py-0.5 rounded text-center mb-2 uppercase tracking-wide">
                  Confidential
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full"></div>
                <div className="h-1 w-2/3 bg-slate-100 rounded-full mt-1.5"></div>
              </div>
              <span className="text-[11px] font-bold text-slate-500 mt-3 uppercase tracking-wide">
                Sensitive Doc
              </span>
            </div>

            <div className="flex flex-col items-center text-red-500">
              <ArrowRight
                size={24}
                className="mb-2 text-slate-300"
                strokeWidth={1.5}
              />
              <Ban size={28} strokeWidth={2} />
              <span className="text-[10px] font-bold mt-1.5 tracking-wider">
                BLOCKED
              </span>
            </div>

            <div className="flex flex-col items-center opacity-40 grayscale">
              <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm">
                <Mail size={32} className="text-slate-400" strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-bold text-slate-500 mt-3 uppercase tracking-wide">
                External Email
              </span>
            </div>
          </div>
        </div>
      );
    } else if (id === 3) {
      return (
        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60 mt-6 shadow-inner relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
          <div className="font-bold text-slate-500 mb-8 text-xs uppercase tracking-widest text-center">
            Zero-Downtime Migration Flow
          </div>
          <div className="flex justify-around items-center">
            <div className="text-center group">
              <div className="w-16 h-20 bg-slate-200 rounded-lg mx-auto flex items-end justify-center pb-3 relative border-b-4 border-slate-300 shadow-sm">
                <Server
                  size={28}
                  className="text-slate-400"
                  strokeWidth={1.5}
                />
                <div className="absolute top-2 right-2">
                  <AlertTriangle
                    size={14}
                    className="text-amber-500"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div className="text-[11px] mt-3 font-bold text-slate-500 uppercase tracking-wide">
                Legacy Server
              </div>
            </div>

            <div className="flex flex-col items-center flex-1 px-6">
              <div className="w-full h-1.5 bg-slate-200 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 text-cyan-600 font-bold text-[9px] uppercase tracking-wider whitespace-nowrap border border-cyan-100 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Activity size={10} className="animate-pulse" /> Replicating
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-cyan-500 mt-2"
                strokeWidth={2}
              />
            </div>

            <div className="text-center">
              <div className="flex gap-1 justify-center relative">
                <div className="w-12 h-16 bg-white rounded-lg border border-blue-100 flex items-center justify-center shadow-lg z-10 transition-transform hover:-translate-y-1">
                  <Server
                    size={24}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="w-12 h-16 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center shadow-sm -ml-6 mt-2 z-0 opacity-80">
                  <Server
                    size={24}
                    className="text-slate-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <div className="text-[11px] mt-3 font-bold text-blue-700 uppercase tracking-wide">
                HCI Cluster
              </div>
              <div className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest mt-1">
                Ready
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  // --- Modal View ---
  if (selectedCase) {
    const data = cases.find((c) => c.id === selectedCase);
    return (
      <div className="pt-24 md:pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <button
            onClick={() => setSelectedCase(null)}
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 font-semibold mb-8 transition-colors group"
          >
            <ChevronLeft
              size={20}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            Back to Case Studies
          </button>

          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-300">
            <div className="h-72 md:h-96 w-full relative">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-3xl">
                  {data.title}
                </h1>
              </div>
            </div>

            <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <div className="flex items-center gap-4 mb-5 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0">
                      <Activity size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {data.challenge}
                  </p>
                </section>

                <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100/60">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                      <Target size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-light mb-2">
                    {data.solution}
                  </p>
                  {renderDiagram(data.id)}
                </section>

                <section>
                  <div className="flex items-center gap-4 mb-5 border-b border-slate-100 pb-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <BarChart size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      The Result
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    {data.result}
                  </p>
                </section>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-lg sticky top-32">
                  <h4 className="font-bold text-slate-900 mb-6 text-xl">
                    Case Overview
                  </h4>
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${data.bg} ${data.color}`}
                      >
                        <data.icon size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                          Service Area
                        </div>
                        <div className="font-bold text-slate-800 leading-tight">
                          {data.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 text-slate-500 shrink-0">
                        <Target size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">
                          Industry Focus
                        </div>
                        <div className="font-bold text-slate-800 leading-tight">
                          Manufacturing
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg mt-2 transition-all group"
                    >
                      Achieve Similar Results
                      <ArrowRight
                        size={18}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Grid View (Bento Grid) ---
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative overflow-hidden flex flex-col justify-center">
      {/* Decorative background element */}
      <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-slate-200/50 to-transparent -z-10"></div>

      {/* CSS Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
      `,
        }}
      />

      <div className="container mx-auto px-6 md:px-8 max-w-[1400px]">
        {/* Compact Header to save vertical space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 animate-fade-up">
          <div className="max-w-2xl">
            <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-2 block">
              Proven Track Record
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Success Stories
            </h1>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm mt-4 md:mt-0 font-medium">
            Discover how we transform IT from an operational risk into a
            strategic asset.
          </p>
        </div>

        {/* Bento Grid Layout (Fits 7 items perfectly in 2 rows on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[250px] md:auto-rows-[280px]">
          {cases.map((item, index) => {
            const delayClass = `stagger-${index + 1}`;

            // Logic for Bento Grid:
            // Index 0 spans 2 columns (Making it the hero card)
            // The rest span 1 column.
            // Total 7 items:
            // Row 1: [Hero 2x] [Item 1] [Item 2]  -> Takes 4 columns
            // Row 2: [Item 3] [Item 4] [Item 5] [Item 6] -> Takes 4 columns
            const spanClass = index === 0 ? "sm:col-span-2" : "col-span-1";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedCase(item.id)}
                className={`animate-fade-up ${delayClass} ${spanClass} relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 bg-slate-900`}
              >
                {/* Image Background */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out"
                />

                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                {/* Floating Icon Top Right */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md bg-white/10 text-white border border-white/20 transform group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={20} />
                </div>

                {/* Content aligned to bottom */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Category / Subtitle */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}
                  >
                    {item.subtitle}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-bold text-white leading-tight drop-shadow-md transition-all duration-300 ${index === 0 ? "text-2xl md:text-3xl mb-2" : "text-xl mb-0 group-hover:mb-2"}`}
                  >
                    {item.title}
                  </h3>

                  {/* Summary (Slides up on hover for smaller cards, always visible on big card) */}
                  <p
                    className={`text-slate-300 text-sm font-light leading-relaxed line-clamp-2 transition-all duration-500 ${index === 0 ? "opacity-100" : "opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 mt-1"}`}
                  >
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
