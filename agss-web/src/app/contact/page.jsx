"use client"
import React, { useState } from 'react';
import { CheckCircle, MapPin, Phone, Mail, Clock, MessageCircle, Loader2 } from 'lucide-react';

export default function ContactPage() {
  // State สำหรับจัดการข้อมูลในฟอร์มและสถานะการส่ง
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interests: []
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // จัดการเมื่อมีการพิมพ์ข้อมูลในช่อง Text
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // จัดการเมื่อมีการคลิก Checkbox
  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const isChecked = prev.interests.includes(option);
      if (isChecked) {
        return { ...prev, interests: prev.interests.filter(item => item !== option) };
      } else {
        return { ...prev, interests: [...prev.interests, option] };
      }
    });
  };

  // จัดการเมื่อกดปุ่ม Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
    setStatus('loading');

    try {
      // จำลองการใช้เวลาส่งข้อมูล (Mock API Delay) 1.5 วินาที
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // TODO: ใส่โค้ดเชื่อมต่อ API จริงที่นี่ 
      // ตัวอย่าง: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify(formData) });
      console.log('Form data submitted:', formData);

      // เมื่อส่งสำเร็จ
      setStatus('success');
      
      // ล้างข้อมูลฟอร์ม
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interests: []
      });

      // ตั้งเวลาให้กลับมาแสดงฟอร์มใหม่หลังจาก 5 วินาที (ถ้าต้องการ)
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* --- ส่วนบน: แบบฟอร์มติดต่อ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2 block">Start Your Journey</span>
            <h1 className="text-5xl font-black text-slate-900 mb-8 leading-tight">Get Your Free <br/>Initial Assessment</h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to strengthen your maturity? Don't wait for a data breach or system failure. Fill out the form to get started with a consultation tailored to your factory's needs.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-5">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1 shadow-sm shrink-0">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Preliminary Risk Review</h4>
                   <p className="text-slate-500">Identify immediate threats to your production line.</p>
                 </div>
               </div>
               <div className="flex items-start gap-5">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1 shadow-sm shrink-0">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Compliance Gap Analysis</h4>
                   <p className="text-slate-500">Check your standing against PDPA and NIST standards.</p>
                 </div>
               </div>
               <div className="flex items-start gap-5">
                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mt-1 shadow-sm shrink-0">
                   <CheckCircle size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Modernization Roadmap</h4>
                   <p className="text-slate-500">A clear 4-year plan tailored to your budget.</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden h-fit min-h-[500px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-full -mr-10 -mt-10 z-0"></div>
            
            {status === 'success' ? (
              // แสดงหน้าต่างเมื่อส่งสำเร็จ
              <div className="relative z-10 text-center py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-6">
                  Your request has been successfully submitted. Our team will contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              // แบบฟอร์ม
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none bg-slate-50 transition-all font-medium" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Company Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none bg-slate-50 transition-all font-medium" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none bg-slate-50 transition-all font-medium" 
                    placeholder="08x-xxx-xxxx" 
                  />
                </div>
                
                <div className="pt-4 pb-2">
                  <label className="block text-sm font-bold text-slate-700 mb-4 uppercase tracking-wide">I am interested in:</label>
                  <div className="space-y-3">
                    {['Preliminary Risk Review', 'Compliance Gap Analysis', 'Modernization Roadmap'].map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={formData.interests.includes(option)}
                          onChange={() => handleCheckboxChange(option)}
                          className="w-5 h-5 text-orange-500 border-slate-300 rounded focus:ring-orange-500" 
                        />
                        <span className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl shadow-xl transition-all mt-4 flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Submitting...
                    </>
                  ) : (
                    'Talk to an Expert Today'
                  )}
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">
                  By submitting this form, you agree to our Privacy Policy regarding PDPA compliance.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* --- ส่วนล่าง: แผนที่และที่อยู่บริษัท --- */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
           {/* ของตกแต่งพื้นหลัง */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-100/50 rounded-br-full -z-10 blur-3xl"></div>
           
           <div className="text-center max-w-2xl mx-auto mb-12">
             <h2 className="text-3xl font-black text-slate-900 mb-4">Visit Our Office</h2>
             <p className="text-slate-600">
               Drop by our headquarters to discuss how we can secure and modernize your manufacturing IT infrastructure.
             </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
             
             {/* ข้อมูลการติดต่อ (ใช้พื้นที่ 2 ส่วน) */}
             <div className="lg:col-span-2 space-y-6">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-sm shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Headquarters</h4>
                   <p className="text-slate-600 mt-1 leading-relaxed">
                     AGSS (C.S.I. Group)<br/>
                     28th Floor Silom Complex Tower<br/>
                     191 Silom Road, Bangrak<br/>
                     Bangkok 10500 Thailand
                   </p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-sm shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Phone</h4>
                   <p className="text-slate-600 mt-1">02-231-3851</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-sm shrink-0">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                   <p className="text-slate-600 mt-1">ISD_Sales@csithai.com</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-sm shrink-0">
                   <MessageCircle size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">LINE Official</h4>
                   <a href="https://lin.ee/NgXqwZV" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700 font-medium transition-colors mt-1 block">
                     Add us on LINE
                   </a>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-cyan-600 shadow-sm shrink-0">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-lg">Business Hours</h4>
                   <p className="text-slate-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                 </div>
               </div>
             </div>

             {/* แผนที่ Google Maps (ใช้พื้นที่ 3 ส่วน เพื่อให้กว้างและดูชัด) */}
             <div className="lg:col-span-3 h-[500px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-inner relative border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.83626884675!2d100.52843831483018!3d13.728346190362841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d02df0824b%3A0xa61bd0b54f6dcde!2sSilom%20Complex!5e0!3m2!1sen!2sth!4v1680000000000!5m2!1sen!2sth" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AGSS Office Location"
                ></iframe>
             </div>

           </div>
        </div>

      </div>
    </div>
  );
}