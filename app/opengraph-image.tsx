import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
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
          fontSize: 64,
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          VMB Advisor
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          Consultoria financeira e planejamento patrimonial
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
