import React from 'react';
import { ChevronLeft, CheckCircle, ArrowRight, Database, Lock, Settings, Monitor, Save, Cloud, Network, Activity } from 'lucide-react';

// นำข้อมูล solutionsData มาไว้ในไฟล์นี้โดยตรง เพื่อหลีกเลี่ยงปัญหาการ Import ในบาง Environment
const solutionsData = [
  {
    slug: 'infrastructure',
    title: 'Infrastructure Modernization',
    desc: 'Modernize legacy systems with robust virtualization ensuring continuity.',
    icon: Database,
    theme: 'cyan',
    color: 'from-blue-500 to-cyan-400',
    tags: ['Implementer', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
    fullDesc: 'We upgrade outdated physical servers into highly efficient, virtualized environments (HCI). This reduces physical footprint, lowers energy consumption, and provides a foundation for seamless disaster recovery. Tailored specifically for factory floors where space and uptime are critical.',
    features: ['Hyper-Converged Infrastructure (HCI)', 'Server Consolidation', 'High Availability (HA) Clustering', 'Hardware Lifecycle Management']
  },
  {
    slug: 'cybersecurity',
    title: 'Industrial Cybersecurity',
    desc: 'NIST/CIS aligned security. Firewall optimization and vulnerability management.',
    icon: Lock,
    theme: 'rose',
    color: 'from-rose-500 to-pink-500',
    tags: ['NIST/CIS', 'Consultant'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    fullDesc: 'Manufacturing is the #1 target for ransomware. We secure your IT and OT networks by aligning with global standards (NIST/CIS). From Next-Gen Firewalls to Endpoint Detection and Response (EDR), we ensure your production lines never stop due to a cyber attack.',
    features: ['Next-Gen Firewall (NGFW) Setup', 'OT/IT Network Segmentation', 'Vulnerability Assessment (VA)', 'Ransomware Protection']
  },
  {
    slug: 'manageengine',
    title: 'ManageEngine Solutions',
    desc: 'IT Management tools for advanced monitoring and service desk.',
    icon: Settings,
    theme: 'amber',
    color: 'from-amber-500 to-orange-400',
    tags: ['AD Mgmt', 'Vulnerability', 'Service Desk', 'Endpoint'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    fullDesc: 'As an authorized partner, we implement and optimize ManageEngine suites to give your IT team full control. Automate Active Directory, track tickets efficiently, and manage endpoints across multiple factory branches from a single pane of glass.',
    features: ['ServiceDesk Plus Implementation', 'Active Directory Automation', 'Endpoint Central Management', 'Custom IT Workflows']
  },
  {
    slug: 'jp1-asset-mgmt',
    title: 'JP1 Asset Management',
    desc: 'Leading software asset management and IT automation.',
    icon: Monitor,
    theme: 'emerald',
    color: 'from-green-500 to-emerald-400',
    tags: ['IT Asset Mgmt', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    fullDesc: 'Maintain strict compliance with software licenses and automate routine IT tasks. JP1 helps Japanese and multinational manufacturers in Thailand keep track of thousands of devices, ensuring audit-readiness and reducing unauthorized software risks.',
    features: ['Automated Inventory Tracking', 'Software License Compliance', 'Remote Deployment', 'Security Policy Enforcement']
  },
  {
    slug: 'backup-dr',
    title: 'Backup & Disaster Recovery',
    desc: 'Reliable data protection and disaster recovery tailored for manufacturing.',
    icon: Save,
    theme: 'indigo',
    color: 'from-purple-500 to-indigo-500',
    tags: ['Data Recovery', 'Cyber Resilient'],
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&q=80',
    fullDesc: 'Data loss means production halts. We design and implement robust Backup and Disaster Recovery (DR) strategies. Using the 3-2-1 backup rule and immutability, we guarantee your ERP and production data can be restored in minutes, not days.',
    features: ['Immutable Backups (Ransomware Proof)', 'Offsite & Cloud Replication', 'Automated DR Testing', 'Zero-Downtime Architecture']
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    desc: 'Scalable and flexible industrial operations.',
    icon: Cloud,
    theme: 'sky',
    color: 'from-sky-500 to-blue-500',
    tags: ['Azure', 'AWS', 'Inet', 'SIS Cloud'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    fullDesc: 'Seamlessly migrate your non-latency-sensitive workloads to the cloud. We help you choose the right environment (Azure, AWS, or Local Thai Clouds) to optimize costs while ensuring secure access for remote workers and multi-site factory operations.',
    features: ['Cloud Readiness Assessment', 'Hybrid Cloud Architecture', 'M365 & Azure Migration', 'Cloud Cost Optimization']
  },
  {
    slug: 'network-mgmt',
    title: 'Network Optimization',
    desc: 'Optimizing efficiency for seamless operations across office and factory.',
    icon: Network,
    theme: 'teal',
    color: 'from-cyan-500 to-teal-400',
    tags: ['Design', 'Optimize'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
    fullDesc: 'Factory environments are harsh on wireless and wired networks (interference, metal structures). We design, survey, and deploy industrial-grade networking solutions that guarantee your IoT devices and scanners stay connected 24/7.',
    features: ['Factory Wi-Fi Site Survey', 'Fiber Optic & Cabling Design', 'SD-WAN Implementation', 'Network Bottleneck Resolution']
  },
  {
    slug: 'proactive-monitoring',
    title: 'Proactive Monitoring',
    desc: '24/7 Oversight to prevent downtime before it occurs.',
    icon: Activity,
    theme: 'violet',
    color: 'from-indigo-500 to-violet-500',
    tags: ['24/7 Support', 'Alerts'],
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&q=80',
    fullDesc: 'Don\'t wait for a system to crash to know there\'s a problem. Our Network Operations Center (NOC) monitors your servers, switches, and firewalls 24/7. We detect anomalies and fix them before they impact your production line.',
    features: ['24/7 Infrastructure Monitoring', 'Real-time Alerting (LINE/Email)', 'Performance Bottleneck Analytics', 'Monthly Health Reports']
  }
];

// 1. ใส่ async หน้าฟังก์ชันเพื่อรองรับการทำงานแบบ await
export default async function SolutionDetail({ params }) {
  
  // 2. ใช้ await แกะค่า params ออกมา (วิธีมาตรฐานใหม่ของ Next.js 15+)
  const resolvedParams = await params;
  const currentSlug = resolvedParams?.slug;
  
  // 3. นำ slug ไปค้นหาข้อมูล
  const solution = solutionsData?.find((s) => s.slug === currentSlug);

  if (!solution) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-4">404</h1>
          <p className="text-xl text-slate-600 mb-8">This page could not be found.</p>
          <a href="/#solutions" className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors">
            <ChevronLeft size={20} className="mr-2" /> Back to Solutions
          </a>
        </div>
      </div>
    );
  }

  const Icon = solution.icon;

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Breadcrumb & Back Button */}
        <div className="mb-8">
          <a href="/#solutions" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-cyan-600 transition-colors">
            <ChevronLeft size={16} className="mr-1" /> Back to Solutions
          </a>
        </div>

        {/* Hero Section ของรายละเอียด */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          <div className={`h-40 md:h-64 bg-gradient-to-r ${solution.color} relative overflow-hidden flex items-center p-8 md:p-16`}>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 flex items-center gap-6 text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                <Icon size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black mb-2">{solution.title}</h1>
                <div className="flex flex-wrap gap-2 mt-3">
                  {solution.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-black/20 backdrop-blur text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* เนื้อหา & รูปภาพ */}
          <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* ด้านซ้าย: ข้อความ */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {solution.fullDesc}
              </p>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-5">Key Benefits & Features</h3>
                <ul className="space-y-4">
                  {solution.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`shrink-0 mt-0.5 text-${solution.theme}-500`} size={20} />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a href="/contact" className={`inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1`}>
                  Consult an Expert <ArrowRight size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* ด้านขวา: รูปภาพ */}
            <div className="relative">
              <div className={`absolute -inset-4 bg-gradient-to-br ${solution.color} opacity-10 rounded-[2.5rem] -z-10 blur-xl`}></div>
              <img 
                src={solution.image} 
                alt={solution.title} 
                className="w-full h-auto rounded-[2rem] shadow-2xl object-cover border border-slate-100"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}