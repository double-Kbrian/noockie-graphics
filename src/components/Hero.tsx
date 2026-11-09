import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs uppercase tracking-widest text-white/80 font-medium">Nairobi • Premium Creative & Signage Studio</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-ivory mb-6">
            WE MAKE BRANDS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">IMPOSSIBLE TO IGNORE.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-sans">
            From distinctive brand identities to precision-crafted 3D signage, we transform ideas into powerful visual experiences that dominate the Kenyan market.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a href="#work" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent/20">
              Explore Our Work
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-ivory font-medium rounded transition-all text-center">
              Start a Project
            </a>
          </div>

          {/* Quick Metric Bar */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 w-full">
            <div>
              <p className="font-display font-bold text-3xl text-ivory">150+</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Projects Delivered</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-ivory">100%</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">In-House Fabrication</p>
            </div>
            <div>
              <p className="font-display font-bold text-3xl text-accent">Nairobi</p>
              <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Based & Operating</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Feature */}
        <div className="lg:col-span-5 relative">
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent z-10 opacity-60" />
            <Image
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop" 
              alt="3D Illuminated Signage Installation" 
              fill
              loading="eager"
              sizes="(min-width: 1024px) 40vw, 100vw"
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-charcoal/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">Featured Fabrication</span>
              <p className="font-display font-bold text-lg text-ivory mt-0.5">Savannah Roast Co. Halo-Lit Brass Lettering</p>
              <p className="text-xs text-white/60 mt-1">Westlands, Nairobi • 3D Signage & Lighting</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}