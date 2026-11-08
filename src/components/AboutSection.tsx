import { CheckCircle2, ShieldCheck, Wrench, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Studio Photo/Collage */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1542744094-3a31246263d0?q=80&w=1200&auto=format&fit=crop" 
              alt="Noockie Graphics Studio Workshop" 
              className="w-full h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8 right-8 bg-charcoal/90 backdrop-blur-md p-6 rounded-xl border border-white/10">
              <p className="font-display font-bold text-lg text-ivory">Independent Kenyan Creative Studio</p>
              <p className="text-sm text-white/70 mt-1">Bridging world-class digital brand strategy with precision physical fabrication right here in Nairobi.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Copy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-xs font-mono text-accent uppercase tracking-widest">About The Studio</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ivory mt-2 mb-6">
            Craftsmanship meets strategic brand vision.
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 font-sans">
            Operating as an independent creative studio in Kenya, Noockie Graphics was founded on a singular premise: businesses deserve better than generic printing shops and uninspired signage. We combine rigorous international design standards with local market understanding.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-ivory text-base">Premium Materials</h4>
                <p className="text-xs text-white/60 mt-1">Sourced for durability against Kenyan climatic conditions and UV exposure.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-bold text-ivory text-base">In-House Production</h4>
                <p className="text-xs text-white/60 mt-1">Complete quality control from vector design to physical installation.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact" className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded transition-all">
              Work With Us
            </a>
            <div className="flex flex-col">
              <span className="font-display font-bold text-ivory">Nairobi, Kenya</span>
              <span className="text-xs text-white/50">Serving East African Enterprises</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}