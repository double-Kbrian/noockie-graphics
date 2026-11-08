"use client";

import { ArrowUpRight, MapPin, Mail, Phone, Camera, BriefcaseBusiness, Bird, Lock } from "lucide-react";
import { contactEmail, whatsappLinkNumber, whatsappNumber } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal border-t border-white/10 text-ivory pt-20 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top Callout / Banner Section */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Start A Conversation</span>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-ivory mt-2">
              Have a project in mind for your brand?
            </h3>
            <p className="text-white/60 text-sm mt-2 font-sans max-w-xl">
              We consult, design, and fabricate locally in Nairobi. Let’s turn your physical storefront or digital brand identity into a landmark.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Main Footer Links & Information Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Identity & Philosophy Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-display font-bold text-xl text-white tracking-tighter">
                  NG
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg tracking-wider text-ivory">NOOCKIE GRAPHICS</span>
                  <span className="text-[10px] tracking-widest text-white/50 uppercase">Visual Studio • Nairobi</span>
                </div>
              </div>

              <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8 font-sans">
                An independent Kenyan creative studio specializing in world-class corporate identity, 3D architectural signage, illuminated LED displays, and custom physical brand fitouts.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all"
                aria-label="LinkedIn"
              >
                <BriefcaseBusiness className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent transition-all"
                aria-label="Twitter / X"
              >
                <Bird className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Navigation Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-ivory uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Studio</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">Workflow</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-sm text-ivory uppercase tracking-wider mb-6">Capabilities</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Brand Identity</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">3D Signage</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">LED Lightboxes</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Fleet Wraps</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Large Format Print</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Office Fitouts</a></li>
            </ul>
          </div>

          {/* Studio Contact & Location Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-sm text-ivory uppercase tracking-wider mb-6">Studio Address</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span>Nairobi, Kenya<br /><span className="text-xs text-white/50">Workshop & Fabrication Facility</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-accent transition-colors">{contactEmail}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href={`https://wa.me/${whatsappLinkNumber}`} className="hover:text-accent transition-colors">{whatsappNumber}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Sign In & Scroll to top */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {currentYear} Noockie Graphics. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Crafted with precision in Nairobi, Kenya</span>
            
            {/* Admin Sign In Link */}
            <a 
              href="/login" 
              className="text-white/50 hover:text-accent flex items-center gap-1 font-mono transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Sign In</span>
            </a>

            {/* Scroll to Top Trigger */}
            <button 
              onClick={scrollToTop}
              className="text-ivory hover:text-accent flex items-center gap-1 font-mono transition-colors"
            >
              [ Back to top ↑ ]
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}