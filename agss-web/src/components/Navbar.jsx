"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || pathname !== "/"
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-2"
          onClick={closeMenu}
        >
          <div
            className={`p-1 rounded ${!isScrolled && pathname === "/" ? "bg-white/10 backdrop-blur-sm" : ""}`}
          >
            <img
              src="/images/logo.png"
              alt="AGSS Logo"
              className={`transition-all duration-300 ${isScrolled || pathname !== "/" ? "h-10" : "h-12"} w-auto object-contain brightness-110`}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide transition-all duration-200 border-b-2 hover:text-cyan-400 pb-1 ${pathname === "/" ? "text-cyan-400 border-cyan-400" : "border-transparent text-slate-400"}`}
          >
            HOME
          </Link>
          <Link
            href="/#solutions"
            className="text-sm font-medium tracking-wide transition-all duration-200 border-b-2 border-transparent hover:text-cyan-400 text-slate-400 pb-1"
          >
            SOLUTIONS
          </Link>
          <Link
            href="/success-stories"
            className={`text-sm font-medium tracking-wide transition-all duration-200 border-b-2 hover:text-cyan-400 pb-1 ${pathname === "/success-stories" ? "text-cyan-400 border-cyan-400" : "border-transparent text-slate-400"}`}
          >
            SUCCESS STORIES
          </Link>
          <Link
            href="/partners"
            className={`text-sm font-medium tracking-wide transition-all duration-200 border-b-2 hover:text-cyan-400 pb-1 ${pathname === "/partners" ? "text-cyan-400 border-cyan-400" : "border-transparent text-slate-400"}`}
          >
            PARTNERS
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium tracking-wide transition-all duration-200 border-b-2 border-transparent hover:text-cyan-400 text-slate-400 pb-1"
          >
            ABOUT US
          </Link>

          <Link
            href="/contact"
            className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all shadow-lg transform hover:-translate-y-0.5 ${
              isScrolled || pathname !== "/"
                ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                : "bg-cyan-500 hover:bg-cyan-400 text-white shadow-cyan-500/30"
            }`}
          >
            Get Assessment Promotion
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X
              size={28}
              className={
                isScrolled || pathname !== "/" ? "text-slate-800" : "text-white"
              }
            />
          ) : (
            <Menu
              size={28}
              className={
                isScrolled || pathname !== "/" ? "text-slate-800" : "text-white"
              }
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 py-6 px-6 flex flex-col space-y-6 lg:hidden text-slate-800">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-left font-bold text-lg"
          >
            Home
          </Link>
          <Link
            href="/success-stories"
            onClick={closeMenu}
            className="text-left font-bold text-lg"
          >
            Success Stories
          </Link>
          <Link
            href="/partners"
            onClick={closeMenu}
            className="text-left font-bold text-lg"
          >
            Partners
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-left font-bold text-cyan-600 text-lg"
          >
            Get Assessment Promotion
          </Link>
        </div>
      )}
    </nav>
  );
}
