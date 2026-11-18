"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/lib/content";

const STORAGE_KEY = "apc2026-draf";

type Draft = {
  nama: string;
  bahagian: string;
  emel: string;
  telefon: string;
  kategori: string;
  ringkasan: string;
  disimpanPada: string;
};

type EntryContextValue = {
  openEntry: () => void;
};

const EntryContext = createContext<EntryContextValue | null>(null);

export function useEntry() {
  const value = useContext(EntryContext);
  if (!value) {
    throw new Error("useEntry mesti digunakan di dalam EntryProvider.");
  }
  return value;
}

const empty = {
  nama: "",
  bahagian: "",
  emel: "",
  telefon: "",
  kategori: categories[0].title,
  ringkasan: "",
};

export function EntryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(
    () => ({
      openEntry: () => setOpen(true),
    }),
    [],
  );

  return (
    <EntryContext.Provider value={value}>
      {children}
      <EntryDialog open={open} onOpenChange={setOpen} />
    </EntryContext.Provider>
  );
}

export function EntryButton({
  className,
  children = "Hantar Penyertaan",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { openEntry } = useEntry();
  return (
    <Button type="button" className={className} onClick={openEntry}>
      {children}
    </Button>
  );
}

function EntryDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Draft | null>(null);

  useEffect(() => {
    if (!open) return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setSaved(null);
        return;
      }
      setSaved(JSON.parse(raw) as Draft);
    } catch {
      setSaved(null);
    }
  }, [open]);

  function update(field: keyof typeof empty, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nama = form.nama.trim();
    const bahagian = form.bahagian.trim();
    const emel = form.emel.trim();
    const ringkasan = form.ringkasan.trim();

    if (nama.length < 3) {
      setError("Masukkan nama penuh.");
      return;
    }
    if (bahagian.length < 2) {
      setError("Nyatakan bahagian atau unit.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emel)) {
      setError("Masukkan emel yang sah.");
      return;
    }
    if (form.telefon.trim() && !/^[0-9+\-\s]{8,}$/.test(form.telefon.trim())) {
      setError("Nombor telefon hanya perlu mengandungi angka, ruang atau simbol +.");
      return;
    }
    if (ringkasan.length < 20) {
      setError("Ringkasan sumbangan perlu sekurang-kurangnya 20 aksara.");
      return;
    }

    const draft: Draft = {
      ...form,
      nama,
      bahagian,
      emel,
      telefon: form.telefon.trim(),
      ringkasan,
      disimpanPada: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      setSaved(draft);
      setError("");
    } catch {
      setError("Pelayar ini tidak membenarkan simpanan tempatan. Salin ringkasan anda secara manual.");
    }
  }

  function clearDraft() {
    localStorage.removeItem(STORAGE_KEY);
    setSaved(null);
    setForm(empty);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-gold/30 bg-[#0c0c0e] sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-white">
            Hantar penyertaan
          </DialogTitle>
          <DialogDescription className="text-mist">
            Draf ini disimpan pada pelayar anda sahaja. Ia tidak dihantar ke
            pelayan Jabatan Penerangan Malaysia. Penamaan rasmi masih melalui
            saluran dan pekeliling jabatan.
          </DialogDescription>
        </DialogHeader>

        {saved ? (
          <div className="space-y-4 border border-gold/30 bg-gold/5 p-4">
            <p className="text-xs tracking-[0.22em] text-gold uppercase">
              Draf tempatan disimpan
            </p>
            <dl className="space-y-2 text-sm text-mist">
              <div>
                <dt className="text-white">Nama</dt>
                <dd>{saved.nama}</dd>
              </div>
              <div>
                <dt className="text-white">Bahagian</dt>
                <dd>{saved.bahagian}</dd>
              </div>
              <div>
                <dt className="text-white">Kategori diminati</dt>
                <dd>{saved.kategori}</dd>
              </div>
              <div>
                <dt className="text-white">Ringkasan</dt>
                <dd>{saved.ringkasan}</dd>
              </div>
            </dl>
            <p className="text-xs leading-relaxed text-mist">
              Bawa ringkasan ini kepada ketua unit anda. Jangan anggap draf ini
              sebagai penyertaan yang telah diterima.
            </p>
            <Button type="button" variant="outline" onClick={clearDraft}>
              Buang draf
            </Button>
          </div>
        ) : (
          <form className="grid gap-4" onSubmit={onSubmit} noValidate>
            <Field label="Nama penuh" htmlFor="nama">
              <Input
                id="nama"
                value={form.nama}
                onChange={(event) => update("nama", event.target.value)}
                autoComplete="name"
                className="h-11"
                required
              />
            </Field>
            <Field label="Bahagian atau unit" htmlFor="bahagian">
              <Input
                id="bahagian"
                value={form.bahagian}
                onChange={(event) => update("bahagian", event.target.value)}
                className="h-11"
                required
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Emel" htmlFor="emel">
                <Input
                  id="emel"
                  type="email"
                  value={form.emel}
                  onChange={(event) => update("emel", event.target.value)}
                  autoComplete="email"
                  className="h-11"
                  required
                />
              </Field>
              <Field label="Telefon (pilihan)" htmlFor="telefon">
                <Input
                  id="telefon"
                  inputMode="tel"
                  value={form.telefon}
                  onChange={(event) => update("telefon", event.target.value)}
                  autoComplete="tel"
                  className="h-11"
                />
              </Field>
            </div>
            <Field label="Kategori diminati" htmlFor="kategori">
              <select
                id="kategori"
                value={form.kategori}
                onChange={(event) => update("kategori", event.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-transparent px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Ringkasan sumbangan" htmlFor="ringkasan">
              <Textarea
                id="ringkasan"
                value={form.ringkasan}
                onChange={(event) => update("ringkasan", event.target.value)}
                className="min-h-28"
                placeholder="Nyatakan hasil kerja, impak dan siapa yang terbantu."
              />
            </Field>
            {error ? (
              <p role="alert" className="text-sm text-red-300">
                {error}
              </p>
            ) : null}
            <Button
              type="submit"
              className="h-11 bg-gold text-[#1a1408] hover:bg-gold-2"
            >
              Simpan draf pada pelayar ini
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor} className="text-mist">
        {label}
      </Label>
      {children}
    </div>
  );
}
