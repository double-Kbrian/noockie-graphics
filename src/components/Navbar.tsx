"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-charcoal/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-display font-bold text-xl text-white tracking-tighter">
            NG
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-ivory">NOOCKIE GRAPHICS</span>
            <span className="text-[10px] tracking-widest text-white/50 uppercase">Visual Studio</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#process" className="hover:text-accent transition-colors">Process</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded transition-all flex items-center gap-2 group">
            Get a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-ivory p-2 focus:outline-none">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-charcoal-light border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-ivory hover:text-accent">Services</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-ivory hover:text-accent">Work</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-ivory hover:text-accent">About</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-ivory hover:text-accent">Process</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-ivory hover:text-accent">Contact</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-2 w-full py-3 bg-accent text-white text-center font-medium rounded flex items-center justify-center gap-2">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}