export function SectionHeading({
  kicker,
  title,
  lede,
  id,
}: {
  kicker: string;
  title: string;
  lede?: string;
  id?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-[0.72rem] font-medium tracking-[0.32em] text-gold uppercase">
        {kicker}
      </p>
      <h2
        id={id}
        className="font-display mt-4 text-4xl leading-[1.02] text-balance text-white md:text-6xl"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
