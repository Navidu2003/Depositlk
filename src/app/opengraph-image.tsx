import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DepositLK - Independent Sri Lankan Bank Deposit Comparison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1F4E5F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "white",
        }}
      >
        {/* Top Branding */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "#C9A227",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#1F4E5F",
            }}
          >
            D
          </div>
          <span style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
            DepositLK
          </span>
        </div>

        {/* Center Title & Staircase Motif */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "700px" }}>
            <span
              style={{
                color: "#C9A227",
                fontSize: "20px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              Radical Neutrality · A-Z Directory
            </span>
            <span style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.15 }}>
              Find the right deposit account. Compare every bank fairly.
            </span>
          </div>

          {/* Staircase Visual Motif */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "14px" }}>
            <div style={{ width: "24px", height: "40px", background: "#2E7D6B", borderRadius: "4px" }} />
            <div style={{ width: "24px", height: "70px", background: "#8FAE8B", borderRadius: "4px" }} />
            <div style={{ width: "24px", height: "100px", background: "#C9A227", borderRadius: "4px" }} />
          </div>
        </div>

        {/* Bottom Tagline */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "18px",
            color: "#DCEAE4",
          }}
        >
          <span>Fixed Deposits · Recurring Deposits · Savings</span>
          <span>depositlk.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}