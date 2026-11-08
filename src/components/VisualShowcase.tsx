"use client";

import dynamic from "next/dynamic";
import { Sparkles, Layers, Sliders, Eye, Sun, Flame, Box } from "lucide-react";

// Dynamic import for WebGL Canvas preventing SSR hydration mismatches
const ThreeCanvas = dynamic(() => import("./ThreeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] bg-charcoal-light/80 border border-white/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
      {/* Subtle ambient orange/neon glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-4 p-6 text-center">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-accent/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <Sparkles className="w-5 h-5 text-accent animate-pulse" />
        </div>
        
        <div>
          <h4 className="font-display font-bold text-base text-ivory tracking-wide">
            Initializing Studio Configurator
          </h4>
          <p className="text-xs font-mono text-white/50 mt-1">
            Loading 3D Shaders, Materials & LED Lighting Engine...
          </p>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
            Noockie Graphics WebGL
          </span>
        </div>
      </div>
    </div>
  ),
});

export default function VisualShowcase() {
  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10 relative overflow-hidden">
      
      {/* Ambient background glow accents inspired by neon reference photo */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. Redesigned Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 relative z-10">
        <div className="max-w-2xl">
          {/* Brand & Studio Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-semibold text-accent uppercase tracking-widest">
              NOOCKIE GRAPHICS | SIGNAGE STUDIO
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ivory tracking-tight leading-[1.08] mb-4">
            Bring Your Brand to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-amber-300">Light.</span>
          </h2>

          {/* Supporting Subtitle */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed font-sans">
            Explore the art of illuminated signage. Discover custom LED neon, 3D channel letters and premium acrylic signage designed to make your business stand out.
          </p>
        </div>

        {/* Feature Highlights Pills */}
        <div className="flex flex-wrap lg:flex-col items-start gap-3 lg:items-end flex-shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-light border border-white/10 text-xs font-mono text-white/70">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span>Halo Backlighting</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-light border border-white/10 text-xs font-mono text-white/70">
            <Flame className="w-3.5 h-3.5 text-accent" />
            <span>Multi-Color Neon</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-charcoal-light border border-white/10 text-xs font-mono text-white/70">
            <Box className="w-3.5 h-3.5 text-purple-400" />
            <span>Acrylic Fabrication</span>
          </div>
        </div>
      </div>

      {/* 2. Configurator Framing Container */}
      <div className="relative bg-charcoal-light/60 border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-sm z-10">
        
        {/* Top Control Bar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-bold tracking-wider uppercase">
              INTERACTIVE SIGNAGE EXPERIENCE
            </span>
          </div>
          <div className="text-white/50 flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-white/40" />
            <span>Explore different lighting styles, materials and finishes in real time.</span>
          </div>
        </div>

        {/* 3. 3D WebGL Canvas Viewport */}
        <div className="relative w-full rounded-xl overflow-hidden">
          <ThreeCanvas />
        </div>

        {/* Bottom Studio Info Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-4 border-t border-white/10">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-ivory">Precision Craftsmanship</h4>
              <p className="text-[11px] text-white/50 mt-0.5">Laser-cut acrylic & brushed metallic channels.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-ivory">Energy-Efficient LEDs</h4>
              <p className="text-[11px] text-white/50 mt-0.5">Vivid 24/7 illumination engineered for longevity.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
              <Eye className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-display font-bold text-xs text-ivory">Custom Business Branding</h4>
              <p className="text-[11px] text-white/50 mt-0.5">Tailored salon, shopfront, & office interior signs.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}