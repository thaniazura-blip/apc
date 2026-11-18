import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section id="soalan" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionHeading
            kicker="Soalan lazim"
            title="Perkara yang paling kerap ditanya"
            lede="Jawapan di sini mengikut paparan laman. Jika pekeliling rasmi berbeza, pekeliling itu yang dipakai."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion className="border-t border-gold/20">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-gold/20">
                <AccordionTrigger className="py-5 text-left text-base text-white hover:no-underline md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-mist md:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
