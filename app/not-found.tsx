import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 pt-24 text-center">
      <div>
        <p className="text-[0.72rem] tracking-[0.32em] text-gold uppercase">404</p>
        <h1 className="font-display mt-4 text-5xl text-white">Halaman tidak dijumpai</h1>
        <p className="mt-4 text-mist">Pautan ini tidak wujud pada laman anugerah.</p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-gold px-7 text-[0.75rem] tracking-[0.16em] text-[#1a1408] uppercase"
        >
          Ke laman utama
        </Link>
      </div>
    </main>
  );
}
