"use client";

import { useState } from "react";
import { projectsData } from "@/data/projects";
import Image from "next/image";

const categories = ["All", "Branding", "3D Signage", "Lightboxes", "Graphic Design", "Print"];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Selected Portfolio</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ivory mt-2">Crafted in Kenya</h2>
        </div>
        <p className="text-white/60 max-w-md mt-4 md:mt-0 font-sans">
          Explore our recent installations, corporate identity systems, and physical branding projects delivered across Nairobi and East Africa.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider transition-all ${
              activeCategory === cat
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-ivory border border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="group relative bg-charcoal-light border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/30 transition-all duration-300"
          >
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
              <Image
                src={project.image} 
                alt={project.title} 
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 z-20 font-mono text-xs bg-charcoal/90 backdrop-blur-md px-3 py-1 rounded-full text-ivory border border-white/10">
                {project.category}
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex items-center justify-between text-xs text-white/50 mb-2">
                  <span>{project.client}</span>
                  <span>{project.location}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-ivory mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 text-white/60">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}