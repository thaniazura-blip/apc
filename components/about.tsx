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
          <div className="relative min-h-[520px] overflow-hidden border border-gold/20 bg-[radial-gradient(circle_at_30%_20%,rgba(214,181,109,0.2),transparent_36%),linear-gradient(160deg,#14120e,#050505_55%)] p-8">
            <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
              Transformasi penyampaian
            </p>
            <p className="font-display mt-4 max-w-xs text-4xl leading-none text-white">
              Daripada rekod kerja kepada amalan yang dikongsi.
            </p>
            <div className="absolute right-[-8%] bottom-[-6%] size-72 rounded-full border border-gold/30" />
            <div className="absolute right-[8%] bottom-[10%] size-48 rounded-full border border-dashed border-gold/40" />
            <div className="absolute bottom-10 left-8 right-8 border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
              <div className="grid grid-cols-3 gap-3 text-center">
                {["Integriti", "Inovasi", "Prestasi"].map((word) => (
                  <div key={word}>
                    <p className="font-display text-xl text-gold">{word}</p>
                    <p className="mt-2 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-mist">
                Tiga paksi yang sama dinilai pada malam anugerah: amanah dalam
                tugas, keberanian menambah baik, dan hasil yang boleh dilihat.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
