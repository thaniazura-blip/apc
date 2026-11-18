import Image from "next/image";
import Link from "next/link";
import { EntryButton } from "@/components/entry-dialog";

export function Closing() {
  return (
    <section id="seruan" className="relative min-h-[80vh] scroll-mt-24 overflow-hidden">
      <Image
        src="/photos/stage.jpg"
        alt="Pentas dengan lampu dan penonton. Foto suasana, bukan rakaman majlis ini."
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center md:px-6">
        <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">Penutup majlis</p>
        <h2 className="font-display mt-6 text-3xl leading-[1.05] text-balance text-white uppercase md:text-5xl">
          Pengiktirafan rasmi kerajaan kepada anggota perkhidmatan awam yang
          menunjukkan prestasi kerja melebihi keperluan biasa
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Tahniah diucapkan kepada semua penerima Anugerah Prestasi Cemerlang.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/penerima"
            className="inline-flex h-12 items-center justify-center bg-gold px-7 text-[0.75rem] font-medium tracking-[0.16em] text-[#1a1408] uppercase hover:bg-gold-2"
          >
            Senarai Penerima Anugerah
          </Link>
          <EntryButton className="h-12 border border-white/50 bg-transparent px-7 text-[0.75rem] tracking-[0.16em] text-white uppercase hover:bg-white/10">
            Hantar Penyertaan
          </EntryButton>
        </div>
      </div>
    </section>
  );
}
