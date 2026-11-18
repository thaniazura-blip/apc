import Link from "next/link";
import { EntryButton } from "@/components/entry-dialog";
import { Reveal } from "@/components/reveal";

export function Closing() {
  return (
    <section id="seruan" className="relative scroll-mt-24 overflow-hidden border-t border-white/5 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,181,109,0.2),transparent_58%)]" />
      <Reveal className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">
          Penutup majlis
        </p>
        <h2 className="font-display mt-6 text-3xl leading-[1.15] text-balance text-white uppercase md:text-5xl">
          Pengiktirafan rasmi kerajaan kepada anggota perkhidmatan awam yang
          menunjukkan prestasi kerja melebihi keperluan biasa
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
          Tahniah diucapkan kepada semua penerima Anugerah Prestasi Cemerlang.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/penerima"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-[0.75rem] font-medium tracking-[0.16em] text-[#1a1408] uppercase hover:bg-gold-2"
          >
            Senarai Penerima Anugerah
          </Link>
          <EntryButton className="h-12 rounded-full border border-gold/40 bg-transparent px-7 text-[0.75rem] tracking-[0.16em] text-white uppercase hover:bg-gold/10">
            Hantar Penyertaan
          </EntryButton>
        </div>
      </Reveal>
    </section>
  );
}
