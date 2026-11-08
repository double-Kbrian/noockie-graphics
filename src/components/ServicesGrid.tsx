import { servicesData } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Capabilities</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ivory mt-2">Services & Specialties</h2>
        </div>
        <p className="text-white/60 max-w-md mt-4 md:mt-0 font-sans">
          More than an ordinary print shop. We are a professional creative studio taking your brand from concept to physical execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            className="group bg-charcoal-light border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-charcoal/20 z-10 group-hover:bg-transparent transition-colors" />
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 z-20 font-mono text-xs bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-full text-accent font-bold">
                {service.number}
              </span>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-white/50">{service.category}</span>
                <h3 className="font-display font-bold text-2xl text-ivory mt-1 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-white/60 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-sm font-medium text-ivory group-hover:text-accent transition-colors pt-4 border-t border-white/10"
              >
                <span>Explore Service</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}