"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { contactEmail, whatsappNumber } from "@/lib/site-config";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    service: "3D Signage & Fabrication",
    description: "",
    budget: "KES 100k - 250k"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Info & Contact details */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Get In Touch</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ivory mt-2 mb-6">
              Let’s build something remarkable.
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10 font-sans">
              Ready to transform your brand identity or physical workspace? Fill out the project inquiry form or reach out directly via WhatsApp for a prompt consultation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Studio Location</p>
                  <p className="font-display font-bold text-ivory text-base">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Email Us</p>
                  <p className="font-display font-bold text-ivory text-base">{contactEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Call / WhatsApp</p>
                  <p className="font-display font-bold text-ivory text-base">{whatsappNumber}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-charcoal-light border border-white/10">
            <p className="font-display font-bold text-ivory mb-1">Fast Response Guarantee</p>
            <p className="text-xs text-white/60">We review all project inquiries within 24 business hours with detailed scoping estimates.</p>
          </div>
        </div>

        {/* Right Column: Conversion Form */}
        <div className="lg:col-span-7 bg-charcoal-light border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
          {submitted ? (
            <div className="py-16 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 border border-accent rounded-full flex items-center justify-center text-accent mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-3xl text-ivory mb-3">Inquiry Received Successfully!</h3>
              <p className="text-white/70 max-w-md mb-8">
                Thank you, <span className="text-ivory font-bold">{formData.name}</span>. Our creative director will review your requirements for <span className="text-ivory font-bold">{formData.businessName || "your business"}</span> and reach out via phone or email shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-white/5 border border-white/15 text-ivory text-sm font-medium rounded hover:bg-white/10 transition-all"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Wanjiku Kamau"
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory placeholder:text-white/30 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Phone Number (WhatsApp) *</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="e.g. +254 712 345 678"
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory placeholder:text-white/30 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.co.ke"
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory placeholder:text-white/30 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Business / Company Name</label>
                  <input 
                    type="text" 
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    placeholder="e.g. Savannah Roast Co."
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory placeholder:text-white/30 text-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Service Required *</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory text-sm focus:outline-none focus:border-accent"
                  >
                    <option value="Brand Identity & Strategy">Brand Identity & Strategy</option>
                    <option value="Graphic Design & Artwork">Graphic Design & Artwork</option>
                    <option value="3D Signage & Fabrication">3D Signage & Fabrication</option>
                    <option value="LED Lightboxes & Illuminated Signs">LED Lightboxes & Illuminated Signs</option>
                    <option value="2D Signage & Large Format">2D Signage & Large Format</option>
                    <option value="Corporate & Environmental Branding">Corporate & Environmental Branding</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Estimated Budget (KES)</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory text-sm focus:outline-none focus:border-accent"
                  >
                    <option value="KES 50k - 100k">KES 50k - 100k</option>
                    <option value="KES 100k - 250k">KES 100k - 250k</option>
                    <option value="KES 250k - 500k">KES 250k - 500k</option>
                    <option value="KES 500k+">KES 500k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Project Description *</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Tell us about your brand, timeline, and physical or digital deliverables needed..."
                  className="w-full bg-charcoal border border-white/15 rounded-lg p-4 text-ivory placeholder:text-white/30 text-sm focus:outline-none focus:border-accent resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20"
              >
                <span>Send Project Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}