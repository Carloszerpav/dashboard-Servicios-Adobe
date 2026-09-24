import { ImageResponse } from "next/og";

export const alt =
  "Consultoría Especializada Adobe · Carlos Zerpa | Nexsys Chile";
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
          background: "#0D0D0D",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -140,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(227,27,35,0.32) 0%, rgba(13,13,13,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -160,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(123,44,191,0.36) 0%, rgba(13,13,13,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(120deg, #E31B23 0%, #7B2CBF 100%)",
              color: "#FFFFFF",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#FFFFFF", fontSize: 26, fontWeight: 600 }}>
              Nexsys | Adobe Enterprise Consulting
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 19,
                marginTop: 4,
                letterSpacing: 2,
              }}
            >
              PARTNER
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 940,
            }}
          >
            Consultoría Especializada Adobe
          </div>
          <div
            style={{
              color: "#E8608F",
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: -1,
              marginTop: 12,
              maxWidth: 940,
            }}
          >
            De la Gobernanza a la Automatización con IA
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 28,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 24 }}>
            Carlos Zerpa · Preventa Adobe Enterprise
          </div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 22 }}>
            Document Cloud · Creative Cloud · Firefly
          </div>
        </div>
      </div>
    ),
    size,
  );
}
