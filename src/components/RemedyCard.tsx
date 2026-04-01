"use client";

import { Remedy } from "@/types/search";
import { ProductData } from "@/data/mockData";

interface RemedyCardProps {
  remedy?: Remedy;
  product?: ProductData;
  onClick?: () => void;
}

function tagColor(tag: string) {
  if (tag.toLowerCase().includes("bestseller")) return { bg: "#FF6B00", color: "#fff" };
  if (tag.toLowerCase().includes("new")) return { bg: "#2E7D32", color: "#fff" };
  if (tag.toLowerCase().includes("emi")) return { bg: "#1565C0", color: "#fff" };
  return { bg: "#FF6B00", color: "#fff" };
}

export default function RemedyCard({ remedy, product, onClick }: RemedyCardProps) {
  const name = product?.name || remedy?.name || "";
  const tag = product?.tag || remedy?.tag || "";
  const whyMatched = product?.problem || remedy?.why_matched || "";
  const priceOriginal = product?.price_original || remedy?.price_original || "";
  const priceOffer = product?.price_offer || remedy?.price_offer || "";
  const discount = product?.discount || remedy?.discount || "";
  const photo = product?.photo;
  const tc = tagColor(tag);

  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        border: "1px solid #ebebeb",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {photo ? (
        <img src={photo} alt={name} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80"; }} style={{ width: 76, height: 76, minWidth: 76, borderRadius: 10, border: "2px solid #FF6B00", objectFit: "cover" }} />
      ) : (
        <div style={{ width: 76, height: 76, minWidth: 76, borderRadius: 10, background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)", border: "2px solid #FF6B00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>🔮</div>
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#222", lineHeight: 1.3 }}>{name}</div>
          <span style={{ background: tc.bg, color: tc.color, fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 10, whiteSpace: "nowrap" }}>{tag}</span>
        </div>

        <div style={{ fontSize: 12, color: "#E65100", marginTop: 6, lineHeight: 1.4 }}>✓ {whyMatched}</div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
          <span style={{ textDecoration: "line-through", color: "#aaa", fontSize: 12 }}>{priceOriginal}</span>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#222" }}>{priceOffer}</span>
          <span style={{ color: "#d32f2f", fontWeight: 700, fontSize: 12 }}>{discount}</span>
          <button
            onClick={(e) => e.stopPropagation()}
            style={{ marginLeft: "auto", background: "#FF6B00", color: "#fff", border: "none", borderRadius: 6, padding: "5px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
