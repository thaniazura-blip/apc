"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { EntryButton } from "@/components/entry-dialog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { event, nav } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-gold/20 bg-black/80 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-4 px-4 md:px-6">
        <Link href="/#utama" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex shrink-0 rounded-md bg-[#f7f4ee] px-2 py-1 ring-1 ring-gold/50">
            <Image
              src="/japen-wordmark.png"
              alt="Jabatan Penerangan Malaysia, Kementerian Komunikasi"
              width={2187}
              height={348}
              priority
              className="h-8 w-auto md:h-9"
            />
          </span>
          <span className="hidden text-[0.68rem] tracking-[0.22em] whitespace-nowrap text-gold uppercase sm:block">
            {event.short}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 xl:flex" aria-label="Utama">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.72rem] tracking-[0.12em] whitespace-nowrap text-mist uppercase transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="ml-auto inline-flex size-10 items-center justify-center rounded-full border border-gold/30 text-white xl:hidden"
            aria-label="Buka menu"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="border-gold/20 bg-black sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-display text-2xl text-white">
                {event.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mudah alih">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-3 text-sm tracking-[0.16em] text-mist uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="px-4">
              <EntryButton className="h-11 w-full rounded-full bg-gold text-[0.75rem] tracking-[0.16em] text-[#1a1408] uppercase hover:bg-gold-2">
                Hantar Penyertaan
              </EntryButton>
              <Button
                variant="outline"
                className="mt-3 h-11 w-full rounded-full"
                render={<Link href="/#kategori" onClick={() => setOpen(false)} />}
              >
                Lihat Kategori Anugerah
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
