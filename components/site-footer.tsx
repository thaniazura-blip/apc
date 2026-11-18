import Link from "next/link";
import { contact, event, nav, socials } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer id="hubungi" className="scroll-mt-24 border-t border-gold/20 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.9fr]">
        <div>
          <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
            Penganjur
          </p>
          <p className="font-display mt-4 text-3xl text-white">{event.organizer}</p>
          <p className="mt-2 text-sm text-mist">{event.ministry}</p>
          <address className="mt-6 space-y-1 text-sm leading-relaxed text-mist not-italic">
            {contact.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>

        <div>
          <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">Hubungi</p>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li>
              <a className="hover:text-gold" href={contact.phoneHref}>
                Tel: {contact.phone}
              </a>
            </li>
            <li>Faks: {contact.fax}</li>
            <li>
              <a className="hover:text-gold" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-mist hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
            Pautan laman
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-mist hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/penerima" className="text-mist hover:text-gold">
                Senarai penerima
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[0.68rem] tracking-[0.28em] text-gold uppercase">
            Rujukan rasmi
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="text-mist hover:text-gold" href={contact.portal} target="_blank" rel="noopener noreferrer">
                Portal Jabatan Penerangan
              </a>
            </li>
            <li>
              <a className="text-mist hover:text-gold" href={contact.directory} target="_blank" rel="noopener noreferrer">
                Direktori penerangan
              </a>
            </li>
            <li>
              <Link href="/privasi" className="text-mist hover:text-gold">
                Dasar privasi laman ini
              </Link>
            </li>
            <li>
              <a className="text-mist hover:text-gold" href={contact.privacy} target="_blank" rel="noopener noreferrer">
                Dasar privasi rasmi
              </a>
            </li>
            <li>
              <a className="text-mist hover:text-gold" href={contact.security} target="_blank" rel="noopener noreferrer">
                Dasar keselamatan
              </a>
            </li>
            <li>
              <a className="text-mist hover:text-gold" href={contact.picc} target="_blank" rel="noopener noreferrer">
                PICC
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-mist md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Jabatan Penerangan Malaysia.</p>
          <p>Anugerah Prestasi Cemerlang 2026. Semua hak cipta terpelihara.</p>
        </div>
      </div>
    </footer>
  );
}
