import { Aperture, Camera, Clapperboard, NotebookPen, PenTool, Video } from "lucide-react";

const professions = [
  { label: "Jurukamera", icon: Camera },
  { label: "Videograf", icon: Video },
  { label: "Jurufoto", icon: Aperture },
  { label: "Penulis Jurnal", icon: NotebookPen },
  { label: "Penerbit", icon: Clapperboard },
  { label: "Pereka", icon: PenTool },
];

export function ProfessionMarquee() {
  const loop = [...professions, ...professions];

  return (
    <div className="relative border-y border-gold/20 bg-black/50">
      <p className="sr-only">
        Bidang yang diraikan: jurukamera, videograf, jurufoto, penulis jurnal, penerbit dan pereka.
      </p>
      <div className="overflow-hidden py-4" aria-hidden="true">
        <div className="marquee-track flex w-max items-center">
          {loop.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`${item.label}-${index}`}
                className="flex items-center gap-3 px-8 text-mist"
              >
                <span className="flex size-9 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <Icon className="size-4" />
                </span>
                <span className="text-xs tracking-[0.22em] uppercase">{item.label}</span>
                <span className="ml-6 size-1 rounded-full bg-gold/70" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
