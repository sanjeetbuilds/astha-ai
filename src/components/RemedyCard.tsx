"use client";

import { Remedy } from "@/types/search";

interface RemedyCardProps {
  remedy: Remedy;
}

function tagColor(tag: string) {
  if (tag.toLowerCase().includes("bestseller"))
    return { bg: "#FF6B00", color: "#fff" };
  if (tag.toLowerCase().includes("new"))
    return { bg: "#2E7D32", color: "#fff" };
  if (tag.toLowerCase().includes("emi"))
    return { bg: "#1565C0", color: "#fff" };
  return { bg: "#FF6B00", color: "#fff" };
}

export default function RemedyCard({ remedy }: RemedyCardProps) {
  const tc = tagColor(remedy.tag);

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ebebeb",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
      }}
    >
      {/* Product icon */}
      <div
        style={{
          width: 76,
          height: 76,
          minWidth: 76,
          borderRadius: 10,
          background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)",
          border: "2px solid #FF6B00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
        }}
      >
        🔮
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 8,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: "#222",
              lineHeight: 1.3,
            }}
          >
            {remedy.name}
          </div>
          <span
            style={{
              background: tc.bg,
              color: tc.color,
              fontSize: 9,
              fontWeight: 700,
              padding: "2px 8px",
              borderRadius: 10,
              whiteSpace: "nowrap",
            }}
          >
            {remedy.tag}
          </span>
        </div>

        <div
          style={{
            fontSize: 12,
            color: "#E65100",
            marginTop: 6,
            lineHeight: 1.4,
          }}
        >
          ✓ {remedy.why_matched}
        </div>

        {/* Price row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 8,
          }}
        >
          <span
            style={{
              textDecoration: "line-through",
              color: "#aaa",
              fontSize: 12,
            }}
          >
            {remedy.price_original}
          </span>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#222" }}>
            {remedy.price_offer}
          </span>
          <span style={{ color: "#d32f2f", fontWeight: 700, fontSize: 12 }}>
            {remedy.discount}
          </span>
          <button
            style={{
              marginLeft: "auto",
              background: "#FF6B00",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "5px 16px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
