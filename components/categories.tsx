"use client";

import Image from "next/image";
import { useState } from "react";
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

const photos: Record<string, { src: string; alt: string }> = {
  "pekerja-terbaik": {
    src: "/photos/trophy.jpg",
    alt: "Trofi emas sebenar di atas tapak hitam",
  },
  prestasi: {
    src: "/photos/hall.jpg",
    alt: "Penceramah di hadapan dewan yang penuh",
  },
  mesra: {
    src: "/photos/mic.jpg",
    alt: "Mikrofon dekat di hadapan penonton",
  },
  masyarakat: {
    src: "/photos/video.jpg",
    alt: "Jurufoto merakam pemandangan dari puncak bukit",
  },
  inovasi: {
    src: "/photos/edit.jpg",
    alt: "Skrin suntingan video",
  },
  sukan: {
    src: "/photos/sport.jpg",
    alt: "Perenang di kolam, dilihat dari atas",
  },
};

export function Categories() {
  const [active, setActive] = useState<Category | null>(null);

  return (
    <section id="kategori" className="scroll-mt-24 bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Enam landasan"
            title="Kategori Anugerah"
            lede="Setiap kategori melihat sudut sumbangan yang berbeza. Pilih yang paling hampir dengan kerja sebenar, bukan gelaran yang paling besar."
          />
        </Reveal>
      </div>

      <div className="mt-10 flex gap-3 overflow-x-auto px-4 pb-4 snap-x snap-mandatory md:px-6">
        {categories.map((category, index) => {
          const photo = photos[category.id];
          return (
            <article
              key={category.id}
              className={`relative h-[28rem] shrink-0 snap-start overflow-hidden ${
                index === 0 ? "w-[86vw] md:w-[34rem]" : "w-[78vw] md:w-[22rem]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 34rem, 86vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-3xl leading-none text-white uppercase">
                  {category.title}
                </h3>
                <p className="mt-3 line-clamp-3 max-w-sm text-sm leading-relaxed text-white/80">
                  {category.summary}
                </p>
                <button
                  type="button"
                  onClick={() => setActive(category)}
                  className="mt-4 text-xs tracking-[0.2em] text-gold uppercase"
                >
                  Ketahui lanjut
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="border-gold/30 bg-[#0c0c0e] sm:max-w-lg">
          {active ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl leading-tight text-white uppercase">
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
