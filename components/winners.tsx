import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { winners } from "@/lib/content";

const photos = [
  {
    src: "/photos/edit.jpg",
    alt: "Skrin suntingan video. Foto stok, bukan projek pemenang.",
  },
  {
    src: "/photos/camera.jpg",
    alt: "Kamera dan lensa. Foto stok, bukan projek pemenang.",
  },
  {
    src: "/photos/journalist.jpg",
    alt: "Pen di atas kertas. Foto stok, bukan projek pemenang.",
  },
];

export function Winners() {
  return (
    <section id="inspirasi" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            kicker="Contoh editorial"
            title="Inspirasi Daripada Pemenang Terdahulu"
            lede="Tiga kad di bawah ialah kandungan demonstrasi. Tiada pemenang sebenar dinamakan. Fotonya stok, bukan gambar projek atau orang yang menang."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {winners.map((winner, index) => (
            <Reveal
              key={winner.title}
              delay={index * 0.06}
              className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}
            >
              <article className="group relative min-h-[26rem] overflow-hidden">
                <Image
                  src={photos[index].src}
                  alt={photos[index].alt}
                  fill
                  sizes={index === 0 ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
                <div className="absolute top-5 left-5 border border-gold/70 bg-black/70 px-3 py-1 text-[0.65rem] tracking-[0.22em] text-gold uppercase">
                  Contoh · bukan rekod rasmi
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.68rem] tracking-[0.2em] text-gold uppercase">
                    {winner.category}
                  </p>
                  <h3 className="font-display mt-2 text-4xl text-white uppercase">{winner.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{winner.organization}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">{winner.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
