"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MeteorField } from "@/components/meteor-field";
import { ProfessionMarquee } from "@/components/profession-marquee";
import { Trophy } from "@/components/trophy";
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
  const [countdown, setCountdown] = useState(() => readCountdown(Date.now()));

  useEffect(() => {
    const tick = () => setCountdown(readCountdown(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return countdown;
}

export function Hero() {
  const countdown = useCountdown();

  return (
    <section id="utama" className="relative overflow-hidden pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,181,109,0.18),transparent_42%),radial-gradient(ellipse_at_bottom_left,rgba(214,181,109,0.08),transparent_40%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <MeteorField />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pt-10 pb-12 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pt-16 lg:pb-8">
        <div className="order-1">
          <p className="text-[0.72rem] tracking-[0.34em] text-gold uppercase">
            {event.organizer} · {event.dateLabel}
          </p>
          <p className="font-display mt-6 text-5xl leading-[0.9] text-white sm:text-7xl lg:text-[5.6rem]">
            KOMPETENSI
            <span className="gold-text mt-1 block italic">memacu</span>
            PRESTASI
          </p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist md:text-lg">
            Platform pengiktirafan bagi menghargai warga Jabatan Penerangan yang
            berdedikasi dalam kerja, berinovasi berimpak tinggi dan mempunyai
            daya transformatif yang memacu kecemerlangan organisasi.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#kategori"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-[0.75rem] font-medium tracking-[0.18em] text-[#1a1408] uppercase transition hover:bg-gold-2"
            >
              Terokai Anugerah
            </Link>
            <Link
              href="/#kategori"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gold/40 px-7 text-[0.75rem] tracking-[0.18em] text-white uppercase transition hover:bg-gold/10"
            >
              Lihat Kategori Anugerah
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-mist">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold/60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
            </span>
            <span>
              Status: <span className="text-white">{event.status}</span>
            </span>
            <span className="text-gold/50" aria-hidden="true">
              /
            </span>
            <span>Edisi {event.dateIso.slice(0, 4)}</span>
          </div>
        </div>

        <div className="order-3 mx-auto w-full max-w-xs lg:order-2 lg:max-w-none">
          <Trophy />
        </div>

        <div className="relative order-2 lg:order-3 lg:col-span-2">
        <dl className="grid border border-gold/25 bg-white/[0.03] backdrop-blur-md sm:grid-cols-3">
          <Info term="Tarikh majlis" detail={event.dateLabel} extra="Isnin, Putrajaya" />
          <Info term="Lokasi" detail={event.venue} extra={event.venueAddress} />
          <Info
            term="Menghitung hari"
            detail={
              countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0
                ? "Hari majlis"
                : `${countdown.days} hari`
            }
            extra={`${String(countdown.hours).padStart(2, "0")} jam ${String(countdown.minutes).padStart(2, "0")} minit`}
          />
        </dl>
        </div>
      </div>

      <div className="relative mt-8">
        <ProfessionMarquee />
      </div>
    </section>
  );
}

function Info({
  term,
  detail,
  extra,
}: {
  term: string;
  detail: string;
  extra: string;
}) {
  return (
    <div className="border-gold/20 px-5 py-5 not-last:border-b sm:not-last:border-r sm:not-last:border-b-0">
      <dt className="text-[0.68rem] tracking-[0.22em] text-gold uppercase">{term}</dt>
      <dd className="font-display mt-2 text-2xl text-white">{detail}</dd>
      <dd className="mt-1 text-sm text-mist">{extra}</dd>
    </div>
  );
}
