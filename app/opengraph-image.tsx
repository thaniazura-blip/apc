import { ImageResponse } from "next/og";

export const alt = "Anugerah Prestasi Cemerlang 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#f6f3ec",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#d6b56d" }}>
          JABATAN PENERANGAN MALAYSIA
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 0.95 }}>KOMPETENSI</div>
          <div style={{ fontSize: 76, lineHeight: 0.95, color: "#d6b56d", fontStyle: "italic" }}>
            memacu
          </div>
          <div style={{ fontSize: 76, lineHeight: 0.95 }}>PRESTASI</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#aab3c5" }}>
          <span>Anugerah Prestasi Cemerlang 2026</span>
          <span>30 November · PICC</span>
        </div>
      </div>
    ),
    size,
  );
}
