import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { objectives } from "@/lib/content";

export function About() {
  return (
    <section id="mengenai" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <SectionHeading
            kicker="Mengenai anugerah"
            title="Mengiktiraf Pekerja Berdedikasi. Meraikan Kecemerlangan MADANI."
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-mist md:text-lg">
            <p>
              Anugerah Prestasi Cemerlang 2026 ialah pentas dalaman Jabatan
              Penerangan Malaysia untuk menyebut nama warga yang menjaga mutu
              kerja, membawa idea baharu, dan memastikan maklumat kerajaan sampai
              dengan jelas.
            </p>
            <p>
              Tema Kompetensi Memacu Prestasi meletakkan kemahiran, integriti dan
              daya transformasi pada tempat yang sama. Kecemerlangan di sini bukan
              sekadar kesibukan. Ia ialah kerja yang meninggalkan kaedah lebih baik
              untuk orang selepas anda.
            </p>
          </div>
          <ol className="mt-10 divide-y divide-gold/15 border-y border-gold/15">
            {objectives.map((item, index) => (
              <li key={item.title} className="grid gap-2 py-5 sm:grid-cols-[4.5rem_1fr]">
                <span className="font-display text-2xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-white">{item.title}.</p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="relative min-h-[520px] overflow-hidden">
            <Image
              src="/photos/newsroom.jpg"
              alt="Timbunan akhbar sebenar. Foto stok, bukan penerbitan jabatan."
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
                Kerja sebenar di sebalik berita
              </p>
              <p className="font-display mt-2 max-w-sm text-3xl leading-none text-white uppercase">
                Daripada rekod kerja kepada amalan yang dikongsi.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
