import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/content";

export function Process() {
  return (
    <section id="proses" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Laluan pemilihan"
            title="Bagaimana Pemenang Dipilih?"
            lede="Empat peringkat, satu garisan. Nama masuk, kategori dipadankan, panel menilai, kemudian pemenang diumumkan pada majlis."
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="absolute top-5 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent md:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <Reveal key={step.index} delay={index * 0.06}>
              <li className="relative">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-gold bg-black font-display text-gold">
                  {step.index}
                </span>
                <h3 className="mt-6 text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
