"use client";

interface IntentBannerProps {
  understood_as: string;
  category: string;
}

export default function IntentBanner({
  understood_as,
  category,
}: IntentBannerProps) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #FFF8F2, #FFF3E0)",
        border: "1px solid #FFCC80",
        borderRadius: 12,
        padding: 12,
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        marginBottom: 12,
      }}
    >
      <span style={{ fontSize: 26, lineHeight: 1 }}>🎯</span>
      <div>
        <div
          style={{
            fontSize: 10,
            color: "#999",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          AI ne samjha
        </div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 15,
            color: "#FF6B00",
            marginTop: 2,
          }}
        >
          &ldquo;{understood_as}&rdquo;
        </div>
        <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
          {category}
        </div>
      </div>
    </div>
  );
}
