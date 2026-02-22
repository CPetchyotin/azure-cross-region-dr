"use client"
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Activity, Database, Lock, Globe, Server, Zap, Award, CheckSquare, Settings, Monitor, Save, Cloud, Network, CheckCircle } from 'lucide-react';
import SolutionCard from '@/components/SolutionCard';
import RoadmapStep from '@/components/RoadmapStep';
// 👇 บรรทัดนี้แหละครับที่หายไปตอนแรก (เพิ่ม solutionsData เข้ามาแล้ว)
import { partnerLogos, solutionsData } from '@/data/mockData';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-900 block">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Factory Floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left: Text Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Stability & Security <br />
                <span className="text-white">for Industry.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
                Engineered for 24/7 Manufacturing Operations.
              </p>
              <p className="text-slate-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                Transforming IT from a cost center into a strategic asset. 
                Backed by 20+ years of expertise as a subsidiary of C.S.I. Group.
              </p>
              <Link 
                href="/success-stories"
                className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 text-lg"
              >
                View Our Success Stories
              </Link>
            </div>
            
            {/* Right: Dashboard Visual */}
            <div className="w-full flex justify-center lg:justify-end lg:pr-8 xl:pr-12 mt-12 lg:mt-0">
               <div className="relative w-full max-w-sm sm:max-w-md">
                  <div className="bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700 transform rotate-y-6 rotate-x-6 perspective-1000">
                    <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 relative">
                       <div className="p-5 md:p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white h-[320px] flex flex-col">
                          <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-2">
                             <div className="text-xs font-bold text-slate-400">AGSS MONITORING</div>
                             <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             </div>
                          </div>
                          
                          {/* กล่องข้อมูลป้องกันข้อความล้น */}
                          <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4">
                             <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-slate-700 flex flex-col justify-center overflow-hidden">
                                <div className="text-slate-400 text-[10px] md:text-xs mb-1 font-semibold tracking-wide whitespace-nowrap">SYSTEM UPTIME</div>
                                <div className="text-2xl md:text-3xl font-bold text-cyan-400 truncate">99.99%</div>
                                <div className="w-full bg-slate-700 h-1.5 mt-2 md:mt-3 rounded-full overflow-hidden">
                                   <div className="bg-cyan-400 h-full w-[99%]"></div>
                                </div>
                             </div>
                             <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-slate-700 flex flex-col justify-center overflow-hidden">
                                <div className="text-slate-400 text-[10px] md:text-xs mb-1 font-semibold tracking-wide whitespace-nowrap">THREATS BLOCKED</div>
                                <div className="text-2xl md:text-3xl font-bold text-orange-500 truncate">2,405</div>
                                <div className="flex items-end gap-1 h-8 mt-2">
                                   {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                                      <div key={i} className="flex-1 bg-slate-600 rounded-t-sm hover:bg-orange-500 transition-colors" style={{height: `${h}%`}}></div>
                                   ))}
                                </div>
                             </div>
                          </div>
                          
                          <div className="mt-4 bg-slate-800/30 rounded-lg border border-slate-700 p-3 h-24 flex items-center justify-center relative">
                             <div className="absolute inset-0 flex items-center justify-between px-4 opacity-20">
                                <div className="h-full w-px bg-slate-500"></div>
                                <div className="h-full w-px bg-slate-500"></div>
                                <div className="h-full w-px bg-slate-500"></div>
                             </div>
                             <svg className="w-full h-full text-green-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0 15 Q 10 5 20 10 T 40 10 T 60 5 T 80 12 T 100 8" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M0 15 Q 10 5 20 10 T 40 10 T 60 5 T 80 12 T 100 8 V 20 H 0 Z" fill="currentColor" fillOpacity="0.2" />
                             </svg>
                          </div>
                       </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-6 md:-left-8 top-1/4 bg-white p-2 md:p-3 rounded-xl shadow-lg animate-bounce">
                    <ShieldCheck className="text-green-600" size={24} />
                  </div>
                  <div className="absolute -right-4 bottom-1/4 bg-white p-2 md:p-3 rounded-xl shadow-lg animate-pulse">
                    <Activity className="text-blue-600" size={24} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 -mt-12 lg:-mt-16 mb-20">
        <div className="bg-white rounded-2xl shadow-xl py-6 px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 border border-slate-100">
          <div className="flex-shrink-0 text-center lg:text-left">
             <p className="text-slate-500 text-sm font-medium leading-tight">
               Trusted by leading <br className="hidden lg:block"/>
               <span className="text-slate-800 font-bold text-lg">manufacturers in Thailand</span>
             </p>
          </div>
          <div className="hidden lg:block w-px h-12 bg-slate-100"></div>
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center">
             <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
               <ShieldCheck size={24} strokeWidth={1.5} />
             </div>
             <div>
               <h4 className="font-bold text-slate-800 whitespace-nowrap">PDPA</h4>
               <p className="text-xs text-slate-500 font-medium">Compliance</p>
             </div>
          </div>
          <div className="hidden lg:block w-px h-12 bg-slate-100"></div>
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center">
             <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
               <Server size={24} strokeWidth={1.5} />
             </div>
             <div>
               <h4 className="font-bold text-slate-800 whitespace-nowrap">Zero Downtime</h4>
               <p className="text-xs text-slate-500 font-medium">Focus</p>
             </div>
          </div>
          <div className="hidden lg:block w-px h-12 bg-slate-100"></div>
          <div className="flex items-center gap-4 w-full lg:w-auto justify-center">
             <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
               <Globe size={24} strokeWidth={1.5} />
             </div>
             <div>
               <h4 className="font-bold text-slate-800 whitespace-nowrap">Global Standards</h4>
               <p className="text-xs text-slate-500 font-medium">(NIST/CIS)</p>
             </div>
          </div>
        </div>
      </div>

      {/* Marquee Partner Logos */}
      <div className="bg-white pt-8 pb-12 overflow-hidden">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll w-[200%] hover:paused">
            {[...partnerLogos, ...partnerLogos].map((partner, i) => (
               <div key={i} className="flex-none w-[160px] md:w-[220px] h-24 flex items-center justify-center px-6 relative">
                  <img 
                    src={partner.url} 
                    alt={partner.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      if (e.target.nextElementSibling) {
                        e.target.nextElementSibling.style.display = 'block';
                      }
                    }}
                    className="max-h-16 w-full object-contain opacity-80 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                  />
                  <span className="hidden text-slate-400 font-bold text-lg whitespace-nowrap">{partner.name}</span>
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 relative">
               <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-10 mix-blend-multiply filter blur-xl"></div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full -z-10 mix-blend-multiply filter blur-xl"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" 
                    alt="AGSS Team" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center text-white p-12 text-center">
                     <h3 className="text-3xl font-bold mb-2">AGSS Team</h3>
                     <p className="text-cyan-200">Your Strategic Partner</p>
                  </div>
                  <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur p-6 flex justify-around border-t border-slate-100">
                    <div className="text-center">
                      <div className="text-3xl font-black text-slate-800">20+</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years</div>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-slate-800">30+</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Staff</div>
                    </div>
                    <div className="w-px bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-orange-500">1</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Goal</div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Who We Are</span>
              <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">More Than IT Support. <br/>We Are Your <span className="text-cyan-600">Strategic Partner</span>.</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                AGSS is a subsidiary of <strong>C.S.I. GROUP</strong>. For over two decades, we have specialized in IT network infrastructure and security solutions specifically for the manufacturing sector.
              </p>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
                 <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                   <Award size={20} className="text-orange-500" /> Our Expertise & Certifications
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {['Microsoft Azure Certified', 'Cisco CCNA/CCNP', 'ITIL v4 Foundation', 'VMware VCP', 'Fortinet NSE', 'PMP', 'ISO 27001 Lead Implementer'].map(cert => (
                     <span key={cert} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-full shadow-sm">
                       {cert}
                     </span>
                   ))}
                 </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Manufacturing IT Specialists',
                  'Factory Floor Constraints',
                  'Strategic Roadmap (Year 1-4)',
                  'Native Thai & English Support'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                    <span className="text-slate-700 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section (ใช้การดึงข้อมูลจาก solutionsData) */}
      <section id="solutions" className="py-24 bg-slate-50 relative scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Core Capabilities</span>
            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-6">Comprehensive IT Solutions</h2>
            <p className="text-lg text-slate-600">From the server room to the production line, we cover every aspect of your industrial IT needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {solutionsData?.map((solution, idx) => (
              <SolutionCard 
                key={idx}
                slug={solution.slug}
                title={solution.title} 
                desc={solution.desc}
                icon={solution.icon} 
                theme={solution.theme} 
                color={solution.color}
                tags={solution.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Our Approach: <span className="text-cyan-700">Sustainable Governance</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Maturity is not built in one quarter. We build through structured planning and disciplined execution over a 4-year roadmap.</p>
          </div>
          
          <div className="relative mt-20">
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-slate-200 via-cyan-200 to-slate-200"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <RoadmapStep 
                year="Year 1" title="Risk Identification" 
                desc="Assessment & Roadmap creation. Compliance Gap Analysis." 
                color="border-slate-400 bg-white text-slate-600" icon={CheckSquare}
              />
              <RoadmapStep 
                year="Year 2" title="Hardening" 
                desc="Firewall optimization, VPN security, and Legacy upgrades." 
                color="border-cyan-400 bg-cyan-50 text-cyan-700" icon={ShieldCheck}
              />
              <RoadmapStep 
                year="Year 3" title="Visibility" 
                desc="Centralized logs, vulnerability management, DLP implementation." 
                color="border-cyan-600 bg-cyan-600 text-white" icon={Zap}
              />
              <RoadmapStep 
                year="Year 4" title="Governance" 
                desc="Incident response, audit preparation, and strategic resilience." 
                color="border-slate-900 bg-slate-900 text-white" icon={Award}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Stop Worrying About Fines. <br/>Start Focusing on Growth.</h2>
          <Link 
            href="/contact"
            className="inline-block px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold rounded-lg shadow-xl transition-transform hover:scale-105"
          >
            Talk to an Expert Today
          </Link>
        </div>
      </section>
    </>
  );
}