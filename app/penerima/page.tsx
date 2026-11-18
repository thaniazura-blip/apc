import type { Metadata } from "next";
import Link from "next/link";
import { contact, directorySample, event } from "@/lib/content";

export const metadata: Metadata = {
  title: "Senarai paparan",
  description:
    "Paparan contoh nama daripada direktori awam Jabatan Penerangan Malaysia. Bukan senarai rasmi penerima Anugerah Prestasi Cemerlang 2026.",
};

export default function PenerimaPage() {
  return (
    <main className="px-4 pt-28 pb-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">
          {event.name}
        </p>
        <h1 className="font-display mt-4 text-4xl text-white md:text-6xl">
          Senarai Penerima Anugerah
        </h1>
        <div className="mt-8 border border-gold/40 bg-gold/10 p-5 text-sm leading-relaxed text-white">
          Paparan contoh, bukan senarai rasmi. Nama di bawah diambil secara rawak
          daripada direktori awam Jabatan Penerangan Malaysia dan dipaparkan
          bersama jawatan yang diterbitkan di sana. Mereka tidak diisytiharkan
          sebagai penerima Anugerah Prestasi Cemerlang 2026. Senarai rasmi hanya
          dikeluarkan oleh jabatan selepas majlis pada {event.dateLabel}.
        </div>
        <p className="mt-4 text-sm text-mist">
          Sumber:{" "}
          <a className="text-gold underline underline-offset-4" href={contact.directory}>
            Direktori Penerangan
          </a>
          . Nombor telefon dan e-mel pegawai tidak disalin ke laman ini.
        </p>

        <div className="mt-10 overflow-x-auto border border-white/10">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">
              Contoh nama daripada direktori awam, bukan penerima anugerah
            </caption>
            <thead className="bg-white/[0.03] text-[0.68rem] tracking-[0.18em] text-gold uppercase">
              <tr>
                <th scope="col" className="px-4 py-4 font-medium">
                  Nama dalam direktori
                </th>
                <th scope="col" className="px-4 py-4 font-medium">
                  Jawatan
                </th>
                <th scope="col" className="px-4 py-4 font-medium">
                  Bahagian
                </th>
              </tr>
            </thead>
            <tbody>
              {directorySample.map((person) => (
                <tr key={person.name} className="border-t border-white/10">
                  <th scope="row" className="px-4 py-4 font-medium text-white">
                    {person.name}
                  </th>
                  <td className="px-4 py-4 text-mist">{person.role}</td>
                  <td className="px-4 py-4 text-mist">{person.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          href="/#seruan"
          className="mt-10 inline-flex text-sm tracking-[0.16em] text-gold uppercase"
        >
          Kembali ke laman utama
        </Link>
      </div>
    </main>
  );
}
