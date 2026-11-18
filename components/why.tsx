import { Reveal } from "@/components/reveal";
import { benefits, facts } from "@/lib/content";

export function Why() {
  return (
    <section id="mengapa" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">
            Nilai penyertaan
          </p>
          <h2 className="font-display mt-4 text-4xl leading-[1.02] text-white md:text-6xl">
            Mengapa Anda Dinobatkan Sebagai Pekerja Cemerlang?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist">
            Soalan ini bukan tentang gelaran. Ia tentang apa yang kekal selepas
            majlis: nama yang disebut, idea yang bergerak, dan pasukan yang tahu
            kerja mereka dilihat.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-px bg-gold/20">
            {facts.map((fact) => (
              <div key={fact.k} className="bg-black p-5">
                <dt className="text-[0.68rem] tracking-[0.2em] text-mist uppercase">
                  {fact.k}
                </dt>
                <dd className="font-display mt-2 text-4xl text-gold">{fact.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-mist">
            Angka di atas ialah fakta edisi laman ini, bukan statistik prestasi
            yang direka.
          </p>
        </Reveal>

        <div className="border-t border-gold/20">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.index} delay={index * 0.05}>
              <article className="grid gap-3 border-b border-gold/20 py-7 sm:grid-cols-[5rem_1fr] sm:items-baseline">
                <p className="font-display text-3xl text-gold">{benefit.index}</p>
                <div>
                  <h3 className="text-2xl text-white md:text-3xl">{benefit.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-mist md:text-base">
                    {benefit.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
