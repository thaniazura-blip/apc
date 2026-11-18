import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { criteria } from "@/lib/content";

export function Criteria() {
  return (
    <section id="kriteria" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Apa yang dilihat panel"
            title="Kriteria Penilaian"
            lede="Lima teras yang sama untuk setiap kategori. Tiada pemarkahan palsu dipaparkan di laman ini."
          />
        </Reveal>
        <div className="mt-14 grid gap-px bg-gold/20 md:grid-cols-5">
          {criteria.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="bg-black">
              <article className="flex h-full flex-col p-6">
                <span className="font-display text-5xl text-gold/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-lg leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{item.text}</p>
                <div className="mt-8 h-px w-12 bg-gold" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
