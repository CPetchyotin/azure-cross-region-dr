import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 pr-8">
          <img
            src="/images/logo.png"
            alt="AGSS Footer Logo"
            className="h-12 w-auto mb-8 brightness-0 invert opacity-90"
          />
          <p className="text-slate-400 leading-relaxed max-w-md text-lg font-light">
            Stability & Security for Industry. Transforming IT from a cost
            center into a strategic asset. Backed by 20+ years of expertise as a
            subsidiary of C.S.I. Group.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-white tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-4 text-slate-400">
            <li>
              <Link
                href="/"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <ChevronRight size={16} /> Home
              </Link>
            </li>
            <li>
              <Link
                href="/success-stories"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <ChevronRight size={16} /> Success Stories
              </Link>
            </li>
            <li>
              <Link
                href="/partners"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <ChevronRight size={16} /> Strategic Partners
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <ChevronRight size={16} /> Get Assessment Promotion
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 text-white tracking-wide">
            Contact Us
          </h4>
          <ul className="space-y-5 text-slate-400">
            <li className="flex items-start gap-4">
              <div className="p-2 bg-slate-800 rounded-lg text-cyan-500">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Phone
                </span>
                <span className="text-lg text-white">02-231-3851</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-slate-800 rounded-lg text-cyan-500">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Email
                </span>
                <span className="text-lg text-white">
                  ISD_Sales@csithai.com
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="p-2 bg-slate-800 rounded-lg text-cyan-500">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider">
                  Location
                </span>
                <span className="text-white">Bangkok, Thailand</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} AGSS - Asian Global Support and Services.
        </p>
        <p>A Subsidiary of C.S.I. Group.</p>
      </div>
    </footer>
  );
}
