import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import { EntryProvider } from "@/components/entry-dialog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contact, event } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
});

const description =
  "Platform pengiktirafan bagi menghargai warga Jabatan Penerangan yang berdedikasi dalam kerja, berinovasi berimpak tinggi dan mempunyai daya transformatif yang memacu kecemerlangan organisasi.";

export const metadata: Metadata = {
  title: {
    default: `${event.name} | ${event.organizer}`,
    template: `%s | ${event.name}`,
  },
  description,
  keywords: [
    "Anugerah Prestasi Cemerlang",
    "Jabatan Penerangan Malaysia",
    "Kompetensi Memacu Prestasi",
    "PICC",
    "2026",
  ],
  openGraph: {
    title: `${event.name} | ${event.organizer}`,
    description,
    locale: "ms_MY",
    type: "website",
    siteName: event.name,
  },
  twitter: {
    card: "summary_large_image",
    title: event.name,
    description: event.theme,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  description,
  startDate: event.dateIso,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  inLanguage: "ms",
  location: {
    "@type": "Place",
    name: event.venueFull,
    address: event.venueAddress,
  },
  organizer: {
    "@type": "GovernmentOrganization",
    name: event.organizer,
    url: contact.portal,
    email: contact.email,
    telephone: contact.phone,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`dark ${outfit.variable} ${bodoni.variable}`}>
      <body className="min-h-screen bg-black font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#kandungan"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-[#1a1408]"
        >
          Langkau ke kandungan
        </a>
        <EntryProvider>
          <SiteHeader />
          <div id="kandungan">{children}</div>
          <SiteFooter />
        </EntryProvider>
      </body>
    </html>
  );
}
