"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  TrendingUp, 
  Users, 
  Phone, 
  LogOut,
  Search,
  ExternalLink
} from "lucide-react";
import { signOut } from "next-auth/react";

// Data Interfaces
interface Inquiry {
  id: string;
  name: string;
  business: string;
  service: string;
  budget: string;
  date: string;
  status: "New" | "In Progress" | "Completed";
  phone: string;
  email: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  location: string;
  featured: boolean;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "inquiries" | "portfolio" | "settings">("overview");
  
  // State for Inquiries / Leads
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: "INQ-001",
      name: "Chef David Mwangi",
      business: "Savannah Roast Co.",
      service: "3D Signage & Fabrication",
      budget: "KES 250k - 500k",
      date: "2026-11-08",
      status: "New",
      phone: "+254 712 345 678",
      email: "david@savannahroast.co.ke"
    },
    {
      id: "INQ-002",
      name: "Amina Koech",
      business: "Africhain Technologies",
      service: "Brand Identity & Strategy",
      budget: "KES 100k - 250k",
      date: "2026-11-07",
      status: "In Progress",
      phone: "+254 722 987 654",
      email: "amina@africhain.co.ke"
    },
    {
      id: "INQ-003",
      name: "Omar Juma",
      business: "Swahili Spice Group",
      service: "LED Lightboxes & Illuminated Signs",
      budget: "KES 250k - 500k",
      date: "2026-11-05",
      status: "Completed",
      phone: "+254 733 111 222",
      email: "omar@swahilispice.co.ke"
    }
  ]);

  // State for Portfolio Projects
  const [projects, setProjects] = useState<Project[]>([
    { id: "PROJ-1", title: "Savannah Roast Co. Flagship Storefront", category: "3D Signage", client: "Savannah Roast Co.", location: "Westlands", featured: true },
    { id: "PROJ-2", title: "Africhain Corporate Identity", category: "Branding", client: "Africhain", location: "Kilimani", featured: true },
    { id: "PROJ-3", title: "Swahili Spice LED Lightboxes", category: "Lightboxes", client: "Swahili Spice", location: "Mombasa", featured: false },
    { id: "PROJ-4", title: "Trans-East Fleet Branding", category: "Print", client: "Trans-East", location: "Mombasa Road", featured: false }
  ]);

  // Quick stat counters
  const totalInquiries = inquiries.length;
  const newLeads = inquiries.filter(i => i.status === "New").length;
  const totalProjects = projects.length;

  return (
    <div className="min-h-screen bg-charcoal text-ivory flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-charcoal-light border-r border-white/10 p-6 flex flex-col justify-between">
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-display font-bold text-xl text-white tracking-tighter">
              NG
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-wider text-ivory block">STUDIO ADMIN</span>
              <span className="text-[10px] tracking-widest text-accent uppercase font-mono">Noockie Graphics</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "overview" 
                  ? "bg-accent text-white font-bold shadow-lg shadow-accent/20" 
                  : "text-white/60 hover:text-ivory hover:bg-white/5"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Overview
            </button>
            <button
              onClick={() => setActiveTab("inquiries")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all relative ${
                activeTab === "inquiries" 
                  ? "bg-accent text-white font-bold shadow-lg shadow-accent/20" 
                  : "text-white/60 hover:text-ivory hover:bg-white/5"
              }`}
            >
              <MessageSquare className="w-4 h-4" /> Client Leads
              {newLeads > 0 && (
                <span className="ml-auto bg-white text-accent px-2 py-0.5 rounded-full text-[10px] font-bold">
                  {newLeads}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "portfolio" 
                  ? "bg-accent text-white font-bold shadow-lg shadow-accent/20" 
                  : "text-white/60 hover:text-ivory hover:bg-white/5"
              }`}
            >
              <Briefcase className="w-4 h-4" /> Portfolio Work
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "settings" 
                  ? "bg-accent text-white font-bold shadow-lg shadow-accent/20" 
                  : "text-white/60 hover:text-ivory hover:bg-white/5"
              }`}
            >
              <Settings className="w-4 h-4" /> Studio Settings
            </button>
          </nav>
        </div>

        {/* Footer Actions / Sign Out */}
        <div className="pt-6 border-t border-white/10 space-y-2">
          <a 
            href="/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono text-white/50 hover:text-ivory hover:bg-white/5 transition-all"
          >
            <span>View Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Interactive Sign Out Button */}
          <button 
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-mono text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium"
          >
            <span>Sign Out Session</span>
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-accent uppercase tracking-widest">Management Console</span>
            <h1 className="font-display font-bold text-3xl text-ivory mt-1 capitalize">
              {activeTab === "overview" && "Studio Performance Overview"}
              {activeTab === "inquiries" && "Client Leads & Inquiries"}
              {activeTab === "portfolio" && "Portfolio Projects Manager"}
              {activeTab === "settings" && "Studio Configuration"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-white/60">Live • Nairobi Server</span>
          </div>
        </div>

        {/* ================= TAB 1: OVERVIEW ================= */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-charcoal-light border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between text-white/50 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider">Total Inquiries</span>
                  <MessageSquare className="w-5 h-5 text-accent" />
                </div>
                <p className="font-display font-bold text-4xl text-ivory">{totalInquiries}</p>
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> +18% this month
                </p>
              </div>

              <div className="bg-charcoal-light border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between text-white/50 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider">New Actionable Leads</span>
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <p className="font-display font-bold text-4xl text-ivory">{newLeads}</p>
                <p className="text-xs text-white/50 mt-2">Requires immediate follow-up</p>
              </div>

              <div className="bg-charcoal-light border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between text-white/50 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider">Portfolio Items</span>
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <p className="font-display font-bold text-4xl text-ivory">{totalProjects}</p>
                <p className="text-xs text-white/50 mt-2">Active in gallery grid</p>
              </div>

              <div className="bg-charcoal-light border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between text-white/50 mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider">WhatsApp Leads</span>
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="font-display font-bold text-4xl text-ivory">42</p>
                <p className="text-xs text-emerald-400 mt-2">Direct click-to-chat triggers</p>
              </div>
            </div>

            {/* Recent Leads Table Preview */}
            <div className="bg-charcoal-light border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-lg text-ivory">Recent Inquiries</h3>
                <button 
                  onClick={() => setActiveTab("inquiries")}
                  className="text-xs font-mono text-accent hover:underline"
                >
                  View All →
                </button>
              </div>

              <div className="space-y-4">
                {inquiries.slice(0, 3).map((item) => (
                  <div key={item.id} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-ivory text-base">{item.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          item.status === "New" ? "bg-accent/20 text-accent border border-accent/30" : "bg-white/10 text-white/70"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-white/60 mt-1">
                        {item.business} • <span className="text-accent">{item.service}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/40">{item.date}</span>
                      <a 
                        href={`https://wa.me/${item.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3 h-3" /> WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: INQUIRIES ================= */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/60 font-sans">Manage quote requests submitted through the website contact form.</p>
              <div className="relative">
                <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search inquiries..." 
                  className="bg-charcoal-light border border-white/15 rounded-lg pl-9 pr-4 py-2 text-xs text-ivory focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div className="bg-charcoal-light border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-mono text-white/50 uppercase">
                      <th className="p-4">Client / Business</th>
                      <th className="p-4">Service Required</th>
                      <th className="p-4">Budget Range</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-xs">
                    {inquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <p className="font-display font-bold text-ivory text-sm">{inq.name}</p>
                          <p className="text-white/50 text-[11px]">{inq.business} ({inq.phone})</p>
                        </td>
                        <td className="p-4 text-white/80">{inq.service}</td>
                        <td className="p-4 font-mono text-accent">{inq.budget}</td>
                        <td className="p-4 text-white/50">{inq.date}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] ${
                            inq.status === "New" ? "bg-accent/20 text-accent border border-accent/30" :
                            inq.status === "In Progress" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                            "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          }`}>
                            {inq.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <a 
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-medium"
                          >
                            Chat
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: PORTFOLIO ================= */}
        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/60">Add, edit, or remove past signage installations and branding projects.</p>
              <button className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-medium rounded-lg flex items-center gap-2 transition-all">
                <Plus className="w-4 h-4" /> Add New Project
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-charcoal-light border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                      {proj.category} • {proj.location}
                    </span>
                    <h3 className="font-display font-bold text-lg text-ivory mt-1">{proj.title}</h3>
                    <p className="text-xs text-white/50 mt-1">Client: {proj.client}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-ivory hover:bg-white/10">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setProjects(projects.filter(p => p.id !== proj.id))}
                      className="p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 4: SETTINGS ================= */}
        {activeTab === "settings" && (
          <div className="max-w-2xl space-y-6 bg-charcoal-light border border-white/10 p-8 rounded-2xl">
            <h3 className="font-display font-bold text-xl text-ivory mb-4">Studio Configuration</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">WhatsApp Business Number</label>
                <input 
                  type="text" 
                  defaultValue="+254 700 000 000" 
                  className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory text-xs font-mono focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Primary Studio Email</label>
                <input 
                  type="email" 
                  defaultValue="hello@noockiegraphics.co.ke" 
                  className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory text-xs font-mono focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">Workshop Location</label>
                <input 
                  type="text" 
                  defaultValue="Westlands Commercial Center, Nairobi" 
                  className="w-full bg-charcoal border border-white/15 rounded-lg px-4 py-3 text-ivory text-xs font-mono focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <button className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-medium rounded-lg transition-all font-mono uppercase">
              Save Configuration Changes
            </button>
          </div>
        )}

      </main>
    </div>
  );
}