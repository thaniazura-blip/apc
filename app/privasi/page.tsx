import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dasar privasi",
  description:
    "Dasar privasi laman Anugerah Prestasi Cemerlang 2026, termasuk draf penyertaan yang kekal pada pelayar anda.",
};

export default function PrivacyPage() {
  return (
    <main className="px-4 pt-28 pb-24 md:px-6">
      <article className="mx-auto max-w-3xl">
        <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">
          Jabatan Penerangan Malaysia
        </p>
        <h1 className="font-display mt-4 text-4xl text-white md:text-6xl">
          Dasar privasi laman ini
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-mist">
          <p>
            Laman Anugerah Prestasi Cemerlang 2026 memaparkan maklumat majlis.
            Ia tidak membuka akaun dan tidak menghantar borang ke pelayan.
          </p>
          <p>
            Butang Hantar Penyertaan menyimpan draf pada pelayar anda melalui
            localStorage peranti itu sahaja. Draf tidak dihantar kepada Jabatan
            Penerangan Malaysia, tidak dikongsi dengan pelawat lain, dan boleh
            dipadam dengan butang Buang draf. Menutup laman tidak memadamkannya
            sehingga anda buang atau kosongkan data pelayar.
          </p>
          <p>
            Nama pada halaman Senarai Penerima Anugerah disalin daripada
            direktori awam jabatan sebagai contoh paparan. Halaman itu
            menyatakan dengan jelas bahawa nama tersebut bukan penerima anugerah.
          </p>
          <p>
            Dasar privasi portal rasmi jabatan kekal rujukan bagi laman
            penerangan.gov.my. Dasar laman ini hanya meliputi laman anugerah.
          </p>
        </div>
        <ul className="mt-8 space-y-3 text-sm">
          <li>
            <a className="text-gold underline underline-offset-4" href={contact.privacy}>
              Dasar privasi rasmi Jabatan Penerangan Malaysia
            </a>
          </li>
          <li>
            <a className="text-gold underline underline-offset-4" href={contact.security}>
              Dasar keselamatan rasmi
            </a>
          </li>
          <li>
            <Link href="/" className="text-gold underline underline-offset-4">
              Kembali ke laman utama
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
