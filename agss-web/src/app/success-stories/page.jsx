"use client";
import React, { useState } from "react";
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
} from "lucide-react";
import { cases } from "@/data/mockData";

export default function SuccessStoriesPage() {
  const [selectedCase, setSelectedCase] = useState(null);

  const renderDiagram = (id) => {
    if (id === 1) {
      // Cybersecurity
      return (
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-4">
          <div className="font-bold text-slate-500 mb-6 text-xs uppercase tracking-wider text-center">
            Secure Network Architecture
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200">
                <Cloud size={32} className="text-slate-400" />
              </div>
              <span className="text-xs font-bold text-slate-600">Internet</span>
            </div>
            <ArrowRight className="text-slate-300 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 z-10 relative">
                <ShieldCheck size={40} className="text-white" />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  BLOCK
                </div>
              </div>
              <span className="text-xs font-bold text-blue-700">
                Next-Gen Firewall
              </span>
            </div>
            <ArrowRight className="text-slate-300 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-200 relative">
                <Monitor size={32} className="text-green-600" />
                <Activity
                  size={16}
                  className="text-green-500 absolute top-0 right-0 animate-pulse"
                />
              </div>
              <span className="text-xs font-bold text-slate-600">
                Endpoints (24/7)
              </span>
            </div>
          </div>
        </div>
      );
    } else if (id === 2) {
      // PDPA
      return (
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 mt-4 overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-red-100 text-red-600 text-[10px] px-3 py-1 font-bold rounded-bl-lg">
            DLP ACTIVE
          </div>
          <div className="font-bold text-slate-500 mb-6 text-xs uppercase tracking-wider text-center">
            Microsoft Purview Protection
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 w-24 relative">
                <FileText size={32} className="text-slate-600 mb-2 mx-auto" />
                <div className="bg-yellow-100 text-yellow-700 text-[8px] px-1 rounded text-center mb-1">
                  Confidential
                </div>
                <div className="h-1 w-full bg-slate-200 rounded"></div>
                <div className="h-1 w-2/3 bg-slate-200 rounded mt-1"></div>
              </div>
              <span className="text-xs mt-2 text-slate-500">Sensitive Doc</span>
            </div>

            <div className="flex flex-col items-center text-red-500">
              <ArrowRight size={24} className="mb-1 text-slate-300" />
              <Ban size={32} />
              <span className="text-[10px] font-bold mt-1">BLOCKED</span>
            </div>

            <div className="flex flex-col items-center opacity-50">
              <div className="bg-slate-200 p-4 rounded-full">
                <Mail size={32} className="text-slate-500" />
              </div>
              <span className="text-xs mt-2 text-slate-500">
                External Email
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      // Zero Downtime
      return (
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-4">
          <div className="font-bold text-slate-500 mb-6 text-xs uppercase tracking-wider text-center">
            Zero-Downtime Migration Flow
          </div>
          <div className="flex justify-around items-center">
            <div className="text-center group">
              <div className="w-16 h-20 bg-slate-300 rounded mx-auto flex items-end justify-center pb-2 relative border-b-4 border-slate-400">
                <Server size={32} className="text-slate-500" />
                <div className="absolute top-2 right-2">
                  <AlertTriangle size={14} className="text-yellow-600" />
                </div>
              </div>
              <div className="text-xs mt-2 font-bold text-slate-500">
                Legacy Server
              </div>
            </div>

            <div className="flex flex-col items-center flex-1 px-4">
              <div className="w-full h-1 bg-gradient-to-r from-slate-300 to-blue-500 rounded relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-cyan-600 font-bold text-[10px] whitespace-nowrap border border-cyan-100 rounded-full flex items-center gap-1">
                  <Activity size={12} className="animate-pulse" /> Replicating
                </div>
              </div>
              <ArrowRight size={16} className="text-blue-500 mt-1" />
            </div>

            <div className="text-center">
              <div className="flex gap-1 justify-center relative">
                <div className="w-12 h-16 bg-white rounded border border-blue-200 flex items-center justify-center shadow-lg z-10">
                  <Server size={24} className="text-blue-600" />
                </div>
                <div className="w-12 h-16 bg-white rounded border border-blue-200 flex items-center justify-center shadow-lg -ml-4 mt-2 z-0 opacity-80">
                  <Server size={24} className="text-blue-600" />
                </div>
              </div>
              <div className="text-xs mt-2 font-bold text-blue-700">
                HCI Cluster
              </div>
              <div className="text-[9px] text-green-600 font-bold uppercase">
                Ready to Switch
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  if (selectedCase) {
    const data = cases.find((c) => c.id === selectedCase);
    return (
      <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          <button
            onClick={() => setSelectedCase(null)}
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 font-bold mb-8 transition-colors"
          >
            <ChevronLeft size={20} /> Back to Success Stories
          </button>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-300">
            <div className="h-64 md:h-80 w-full relative">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                <div className="flex gap-3 mb-3">
                  {data.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
                  {data.title}
                </h1>
              </div>
            </div>

            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                    <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                      <Activity size={24} />
                    </div>
                    The Challenge
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {data.challenge}
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      <Target size={24} />
                    </div>
                    The Solution
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    {data.solution}
                  </p>

                  {renderDiagram(data.id)}
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-3">
                    <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                      <BarChart size={24} />
                    </div>
                    The Result
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {data.result}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 sticky top-32">
                  <h4 className="font-bold text-slate-900 mb-6 text-xl">
                    Key Metrics
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-full ${data.bg} ${data.color}`}
                      >
                        <data.icon size={32} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase font-bold">
                          Industry Focus
                        </div>
                        <div className="font-bold text-slate-800 text-lg">
                          Manufacturing
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-200"></div>
                    <Link
                      href="/contact"
                      className="block text-center w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg mt-4 transition-all text-lg"
                    >
                      Achieve Similar Results
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

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">
            Case Studies
          </span>
          <h1 className="text-5xl font-black text-slate-900 mt-4 mb-6">
            Proven Results
          </h1>
          <p className="text-xl text-slate-600 font-light">
            Helping factories transform IT from a risk to a strategic asset.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {cases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-300 h-auto md:h-64"
            >
              <div className="md:w-1/3 relative overflow-hidden h-48 md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-lg ${item.bg} ${item.color}`}>
                    <item.icon size={18} />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide ${item.color}`}
                  >
                    {item.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 truncate">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-3 text-sm line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedCase(item.id)}
                    className="flex items-center gap-2 text-slate-900 text-sm font-bold hover:text-cyan-600 transition-colors group/btn"
                  >
                    Read Case Study{" "}
                    <ArrowRight
                      size={16}
                      className="transform group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-lg transition-all"
          >
            Consult with Our Engineers
          </Link>
        </div>
      </div>
    </div>
  );
}
