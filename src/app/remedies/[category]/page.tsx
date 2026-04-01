"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, REMEDY_CATEGORIES } from "@/data/mockData";
import BottomNav from "@/components/BottomNav";

function tagColor(tag: string) {
  if (tag.toLowerCase().includes("bestseller")) return { bg: "#FF6B00", color: "#fff" };
  if (tag.toLowerCase().includes("new")) return { bg: "#2E7D32", color: "#fff" };
  if (tag.toLowerCase().includes("emi")) return { bg: "#1565C0", color: "#fff" };
  return { bg: "#FF6B00", color: "#fff" };
}

export default function CategoryProducts() {
  const params = useParams();
  const router = useRouter();
  const slug = params.category as string;
  const category = REMEDY_CATEGORIES.find((c) => c.slug === slug);
  const [activeChip, setActiveChip] = useState("Sab");

  if (!category) {
    return <div style={{ padding: 40, textAlign: "center", color: "#aaa" }}>Category not found</div>;
  }

  const categoryProducts = PRODUCTS.filter((p) => p.category === category.label);
  const filtered = activeChip === "Sab"
    ? categoryProducts
    : categoryProducts.filter((p) =>
        p.problem.toLowerCase().includes(activeChip.toLowerCase()) ||
        p.problems_detailed.some((pd) => pd.toLowerCase().includes(activeChip.toLowerCase()))
      );
  const displayProducts = filtered.length > 0 ? filtered : categoryProducts;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        minHeight: "100vh",
        background: "#F5F5F5",
        overflowX: "hidden",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #ebebeb", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => router.back()} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0, color: "#333" }}>←</button>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>{category.label}</span>
        </div>
        <button onClick={() => router.push("/search")} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0 }}>🔍</button>
      </div>

      <div style={{ padding: "0 0 80px" }}>
        {/* Filter chips */}
        <div style={{ padding: "12px 14px", background: "#fff", borderBottom: "1px solid #ebebeb" }}>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none" }}>
            {category.chips.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveChip(chip)}
                style={{
                  background: activeChip === chip ? "#FF6B00" : "#fff",
                  color: activeChip === chip ? "#fff" : "#555",
                  border: `1px solid ${activeChip === chip ? "#FF6B00" : "#e0e0e0"}`,
                  borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                }}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Product list - 90x90 images */}
        <div style={{ padding: "12px 14px" }}>
          {displayProducts.map((product) => {
            const tc = tagColor(product.tag);
            return (
              <div
                key={product.id}
                onClick={() => router.push(`/remedies/product/${product.id}`)}
                style={{
                  background: "#fff", border: "1px solid #ebebeb", borderRadius: 12, padding: 12, marginBottom: 10,
                  display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer",
                }}
              >
                <img src={product.photo} alt={product.name} style={{ width: 90, height: 90, minWidth: 90, borderRadius: 10, objectFit: "cover", border: "1px solid #f0f0f0" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#222", lineHeight: 1.3 }}>{product.name}</div>
                    <span style={{ background: tc.bg, color: tc.color, fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 10, whiteSpace: "nowrap" }}>{product.tag}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#E65100", marginTop: 4, lineHeight: 1.4 }}>✓ {product.problem}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                    <span style={{ textDecoration: "line-through", color: "#aaa", fontSize: 12 }}>{product.price_original}</span>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "#222" }}>{product.price_offer}</span>
                    <span style={{ color: "#d32f2f", fontWeight: 700, fontSize: 12 }}>{product.discount}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {displayProducts.length === 0 && (
            <div style={{ textAlign: "center", padding: 30, color: "#aaa", fontSize: 13 }}>Koi product nahi mila</div>
          )}
        </div>
      </div>

      <BottomNav active="Remedies" />
    </div>
  );
}
