import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#09090b",
          backgroundImage: "radial-gradient(rgba(244,244,245,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "#2dd4bf",
              color: "#042f2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            {profile.monogram}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#2dd4bf", letterSpacing: 6, textTransform: "uppercase" }}>
            Portfolio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ marginTop: 24, fontSize: 30, lineHeight: 1.4, color: "#a1a1aa", maxWidth: 980 }}>
            {profile.tagline}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>
          {profile.role} · {profile.shortLocation}
        </div>
      </div>
    ),
    size,
  );
}
