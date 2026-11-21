import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f766e",
          borderRadius: 14,
          color: "#ffffff",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: -1.5,
        }}
      >
        {profile.monogram}
      </div>
    ),
    size,
  );
}
