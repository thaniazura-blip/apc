"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProfessionMarquee } from "@/components/profession-marquee";
import { event } from "@/lib/content";

const ceremony = new Date("2026-11-30T00:00:00+08:00").getTime();

function readCountdown(now: number) {
  const diff = Math.max(0, ceremony - now);
  const day = 24 * 60 * 60 * 1000;
  return {
    days: Math.floor(diff / day),
    hours: Math.floor((diff % day) / (60 * 60 * 1000)),
    minutes: Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000)),
  };
}

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return readCountdown(now);
}

export function Hero() {
  const countdown = useCountdown();
  const clock =
    countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0
      ? "Hari majlis"
      : `${countdown.days} hari`;

  return (
    <section id="utama" className="bg-black">
      <div className="relative min-h-[100svh]">
        <Image
          src="/photos/hero.jpg"
          alt="Dewan majlis yang penuh penonton. Foto suasana, bukan rakaman Anugerah Prestasi Cemerlang 2026."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pt-28 pb-8 md:px-6">
          <p className="text-[0.72rem] tracking-[0.38em] text-gold uppercase">
            {event.organizer}
          </p>
          <h1 className="font-display mt-4 max-w-5xl text-[14vw] leading-[0.86] text-white uppercase sm:text-7xl lg:text-[6.5rem]">
            Kompetensi
            <span className="block text-gold">memacu</span>
            prestasi
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Platform pengiktirafan bagi menghargai warga Jabatan Penerangan yang
            berdedikasi dalam kerja, berinovasi berimpak tinggi dan mempunyai
            daya transformatif yang memacu kecemerlangan organisasi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#kategori"
              className="inline-flex h-12 items-center justify-center bg-gold px-7 text-[0.75rem] font-medium tracking-[0.18em] text-[#1a1408] uppercase hover:bg-gold-2"
            >
              Terokai Anugerah
            </Link>
            <Link
              href="/#kategori"
              className="inline-flex h-12 items-center justify-center border border-white/40 px-7 text-[0.75rem] tracking-[0.18em] text-white uppercase hover:bg-white/10"
            >
              Lihat Kategori Anugerah
            </Link>
          </div>

          <dl className="mt-10 grid border-t border-white/25 sm:grid-cols-3">
            <div className="border-white/15 py-4 sm:pr-6 sm:not-last:border-r">
              <dt className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">Tarikh majlis</dt>
              <dd className="font-display mt-1 text-2xl text-white uppercase">{event.dateLabel}</dd>
            </div>
            <div className="border-white/15 py-4 sm:px-6 sm:not-last:border-r">
              <dt className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">Lokasi</dt>
              <dd className="font-display mt-1 text-2xl text-white uppercase">{event.venue}</dd>
              <dd className="text-sm text-white/70">{event.venueAddress}</dd>
            </div>
            <div className="py-4 sm:pl-6">
              <dt className="text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                Status · {event.status}
              </dt>
              <dd className="font-display mt-1 text-2xl text-white uppercase">{clock}</dd>
              <dd className="text-sm text-white/70">
                {String(countdown.hours).padStart(2, "0")} jam {String(countdown.minutes).padStart(2, "0")} minit
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <ProfessionMarquee />
    </section>
  );
}
