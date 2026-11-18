import Image from "next/image";
import { event } from "@/lib/content";

export function Venue() {
  return (
    <section className="relative min-h-[70vh] bg-black" aria-labelledby="lokasi-majlis">
      <Image
        src="/photos/picc.jpg"
        alt="Bangunan Putrajaya International Convention Centre dengan deretan bendera Malaysia di hadapannya."
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 py-16 md:px-6">
        <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">Lokasi sebenar</p>
        <h2 id="lokasi-majlis" className="font-display mt-3 max-w-3xl text-5xl leading-[0.9] text-white uppercase md:text-7xl">
          {event.venueFull}
        </h2>
        <p className="mt-4 max-w-lg text-base text-white/80">
          {event.dateLabel}. {event.venueAddress}. Foto bangunan ini diambil di
          Putrajaya, bukan ilustrasi.
        </p>
      </div>
    </section>
  );
}
