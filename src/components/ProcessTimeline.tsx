import { Search, Compass, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding your vision",
    description: "We deep-dive into your business objectives, target audience, architectural space, and brand positioning requirements.",
    icon: Search
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Creative concepting",
    description: "We develop comprehensive visual identities, 3D architectural mockups, typography systems, and material samples for approval.",
    icon: Compass
  },
  {
    number: "03",
    title: "Produce",
    subtitle: "Precision fabrication",
    description: "Our workshop utilizes advanced CNC routers, laser cutters, and premium materials to build your physical and digital assets.",
    icon: Hammer
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Installation & handover",
    description: "Professional on-site installation, signage mounting, fleet wrapping, and final quality assurance handover.",
    icon: CheckCircle
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs font-mono text-accent uppercase tracking-widest">Workflow</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-ivory mt-2 mb-4">From Concept to Execution</h2>
        <p className="text-white/60 font-sans">A seamless four-stage process engineered to ensure precision, reliability, and world-class results.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div 
              key={idx}
              className="relative bg-charcoal-light border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-accent/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-2xl font-bold text-accent">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-ivory group-hover:text-white" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl text-ivory mb-2">{step.title}</h3>
                <p className="text-xs text-accent font-mono uppercase tracking-wider mb-4">{step.subtitle}</p>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
                <span>Stage {step.number} of 04</span>
                <span className="w-2 h-2 rounded-full bg-accent/50" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}