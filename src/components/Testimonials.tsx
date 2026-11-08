const testimonials = [
  {
    quote: "Noockie Graphics transformed our restaurant's physical presence in Westlands. The 3D halo-lit brass lettering and custom interior signage are absolute showstoppers.",
    author: "Chef David Mwangi",
    role: "Managing Director",
    company: "Savannah Roast Co.",
    location: "Nairobi"
  },
  {
    quote: "Their dual expertise in corporate identity and physical fabrication is unmatched in Kenya. They delivered our Kilimani office branding right on schedule.",
    author: "Amina Koech",
    role: "Operations Lead",
    company: "Africhain Technologies",
    location: "Nairobi"
  },
  {
    quote: "Professional, meticulous, and incredibly responsive. The LED lightboxes they built for our coastal retail branch have significantly boosted our foot traffic.",
    author: "Omar Juma",
    role: "Retail Director",
    company: "Swahili Spice Group",
    location: "Mombasa"
  }
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-xs font-mono text-accent uppercase tracking-widest">Client Testimonials</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ivory mt-2">Trusted by Industry Leaders</h2>
        </div>
        <p className="text-white/60 max-w-md mt-4 md:mt-0 font-sans">
          Here is what founders, directors, and business owners across Kenya say about partnering with Noockie Graphics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-charcoal-light border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all">
            <p className="text-ivory/90 text-base leading-relaxed mb-8 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-ivory text-base">{t.author}</h4>
                <p className="text-xs text-white/50">{t.role}, {t.company}</p>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-accent">{t.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}