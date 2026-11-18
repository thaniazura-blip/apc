import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { dates } from "@/lib/content";

export function Dates() {
  return (
    <section id="tarikh" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Kalendar edisi"
            title="Tarikh Penting"
            lede="Hanya tarikh majlis yang ditetapkan pada laman ini. Tiga tarikh sebelumnya ialah penanda indikatif sehingga arahan rasmi dikeluarkan."
          />
        </Reveal>
        <ol className="relative mt-14 space-y-0 border-l border-gold/30 pl-8">
          {dates.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.05}>
              <li className="relative pb-12 last:pb-0">
                <span className="absolute top-1 -left-[2.4rem] size-3 rounded-full border border-gold bg-black" />
                <p className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">
                  {item.note}
                </p>
                <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-2xl text-white">{item.label}</h3>
                  <p className="font-display text-2xl text-gold md:text-3xl">{item.when}</p>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
