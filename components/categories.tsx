"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Crown,
  Handshake,
  HeartHandshake,
  Medal,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories, type Category } from "@/lib/content";

const icons = {
  crown: Crown,
  trend: TrendingUp,
  handshake: Handshake,
  heart: HeartHandshake,
  spark: Sparkles,
  medal: Medal,
};

export function Categories() {
  const [active, setActive] = useState<Category | null>(null);

  return (
    <section id="kategori" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Enam landasan"
            title="Kategori Anugerah"
            lede="Setiap kategori melihat sudut sumbangan yang berbeza. Pilih yang paling hampir dengan kerja sebenar, bukan gelaran yang paling besar."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {categories.map((category, index) => {
            const Icon = icons[category.icon];
            return (
              <Reveal key={category.id} className={category.span} delay={index * 0.04}>
                <article className="group flex h-full flex-col justify-between border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-gold/50 hover:bg-gold/[0.04] md:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-display text-3xl text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display mt-8 text-3xl leading-tight text-white md:text-4xl">
                      {category.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist md:text-base">
                      {category.summary}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(category)}
                    className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-gold uppercase"
                  >
                    Ketahui lanjut
                    <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="border-gold/30 bg-[#0c0c0e] sm:max-w-lg">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl leading-tight text-white">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-mist">
                  {active.detail}
                </DialogDescription>
              </DialogHeader>
              <ul className="space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="border-l border-gold pl-4 text-sm text-white">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed text-mist">
                Ringkasan paparan laman. Kriteria muktamad tertakluk kepada arahan
                rasmi Jabatan Penerangan Malaysia.
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
