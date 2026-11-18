import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { winners } from "@/lib/content";

export function Winners() {
  return (
    <section id="inspirasi" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Contoh editorial"
            title="Inspirasi Daripada Pemenang Terdahulu"
            lede="Tiga kad di bawah ialah kandungan demonstrasi. Tiada pemenang sebenar dinamakan. Imej ialah ilustrasi geometri, bukan gambar projek."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {winners.map((winner, index) => (
            <Reveal
              key={winner.title}
              delay={index * 0.06}
              className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <article className="flex h-full flex-col border border-white/10">
                <div
                  className={`relative min-h-64 overflow-hidden bg-gradient-to-br ${winner.tone} ${index === 0 ? "lg:min-h-80" : ""}`}
                >
                  <div className="absolute top-6 left-6 border border-gold/50 bg-black/50 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                    Contoh · bukan rekod rasmi
                  </div>
                  <div className="absolute inset-0 opacity-80">
                    <div className="absolute top-16 right-10 size-28 rotate-12 border border-gold/40" />
                    <div className="absolute bottom-8 left-10 h-px w-40 bg-gold/60" />
                    <div className="absolute right-16 bottom-16 size-16 rounded-full border border-gold/30" />
                  </div>
                  <p className="font-display absolute bottom-6 left-6 text-5xl text-white/15">
                    0{index + 1}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                    {winner.category}
                  </p>
                  <h3 className="font-display mt-3 text-3xl text-white">{winner.title}</h3>
                  <p className="mt-2 text-sm text-mist">{winner.organization}</p>
                  <p className="mt-4 text-sm leading-relaxed text-mist">{winner.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
