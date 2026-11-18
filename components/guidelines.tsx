import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { guidelines } from "@/lib/content";

export function Guidelines() {
  return (
    <section id="garis-panduan" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            kicker="Sebelum nama dihantar"
            title="Garis Panduan"
            lede="Ringkasan untuk membantu ketua unit menyediakan penamaan. Ia bukan pekeliling."
          />
        </Reveal>
        <ol className="space-y-4">
          {guidelines.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <li className="grid gap-4 border border-white/10 p-6 sm:grid-cols-[4rem_1fr]">
                <span className="font-display text-3xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
