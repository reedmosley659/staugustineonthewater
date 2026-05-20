import { ImageResponse } from "next/og";

export const alt = "St Augustine On The Water";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(160deg, #faf9f7 0%, #f7f4ef 45%, #e8eef0 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              "linear-gradient(90deg, #0f1c2e 0%, #2d5a6b 50%, #b8956a 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 72,
              fontWeight: 600,
              color: "#0f1c2e",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            St Augustine On The Water
          </div>
          <div
            style={{
              marginTop: 28,
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 28,
              fontWeight: 400,
              color: "#2d5a6b",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Water Experiences in St. Augustine, Florida
          </div>
          <div
            style={{
              marginTop: 36,
              width: 120,
              height: 3,
              background: "#b8956a",
              borderRadius: 2,
            }}
          />
        </div>
        <svg
          width="480"
          height="48"
          viewBox="0 0 480 48"
          style={{ position: "absolute", bottom: 64, opacity: 0.35 }}
        >
          <path
            d="M0 32 C80 16 160 48 240 32 S400 16 480 32"
            stroke="#2d5a6b"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0 40 C80 28 160 44 240 40 S400 28 480 40"
            stroke="#b8956a"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    ),
    size,
  );
}
