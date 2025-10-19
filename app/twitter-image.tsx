import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #000 0%, #0b2b33 100%)",
          color: "white",
          padding: 64,
          fontSize: 56,
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 10 }}>VMB Advisor</div>
        <div style={{ fontSize: 26, opacity: 0.9 }}>
          Excelência em consultoria financeira
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
