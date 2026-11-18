import Image from "next/image";

const frames = [
  {
    src: "/photos/camera.jpg",
    label: "Jurukamera",
    alt: "Kamera dan beberapa lensa sebenar di atas meja gelap",
  },
  {
    src: "/photos/videographer.jpg",
    label: "Videograf",
    alt: "Juru kamera mengendalikan kamera pawagam di set penggambaran",
  },
  {
    src: "/photos/photographer.jpg",
    label: "Jurufoto",
    alt: "Tangan memegang kamera DSLR di bawah cahaya matahari",
  },
  {
    src: "/photos/camcorder.jpg",
    label: "Penggambaran",
    alt: "Tangan memegang kamkorder",
  },
  {
    src: "/photos/journalist.jpg",
    label: "Penulis jurnal",
    alt: "Mata pena menulis pada kertas berbaris",
  },
  {
    src: "/photos/edit.jpg",
    label: "Suntingan",
    alt: "Garis masa suntingan video pada monitor",
  },
  {
    src: "/photos/mic.jpg",
    label: "Pentas",
    alt: "Mikrofon di hadapan penonton dalam dewan",
  },
];

export function ProfessionMarquee() {
  const loop = [...frames, ...frames];

  return (
    <div className="border-y border-white/10 bg-black">
      <p className="sr-only">
        Jalur foto bidang yang diraikan: jurukamera, videograf, jurufoto dan penulis jurnal.
      </p>
      <div className="flex items-end justify-between px-4 py-4 md:px-6">
        <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">Bidang yang diraikan</p>
        <p className="text-[0.68rem] tracking-[0.18em] text-mist uppercase">Foto sebenar</p>
      </div>
      <div className="overflow-hidden pb-6" aria-hidden="true">
        <div className="marquee-track flex w-max gap-3 px-4">
          {loop.map((frame, index) => (
            <figure key={`${frame.label}-${index}`} className="relative h-72 w-52 shrink-0 overflow-hidden sm:h-80 sm:w-60">
              <Image src={frame.src} alt="" fill sizes="240px" className="object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 text-sm tracking-[0.16em] text-white uppercase">
                {frame.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
