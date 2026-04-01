"use client";

import { useParams, useRouter } from "next/navigation";
import { PRODUCTS, ASTROLOGERS } from "@/data/mockData";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return <div style={{ padding: 40, textAlign: "center", color: "#aaa" }}>Product not found</div>;
  }

  const recommender = ASTROLOGERS.find((a) => a.speciality === product.category) || ASTROLOGERS[0];
  const isFemale = ["Devi", "Priya", "Sana", "Meera", "Kavita", "Divya"].some((n) => recommender.name.includes(n));

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto", minHeight: "100vh", background: "#F5F5F5", overflowX: "hidden", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #ebebeb", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => router.back()} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0, color: "#333" }}>←</button>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>{product.name}</span>
        </div>
        <button style={{ background: "#E8F5E9", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600, color: "#2E7D32", cursor: "pointer" }}>📤 Share</button>
      </div>

      <div style={{ padding: "0 0 80px" }}>
        <img src={product.photo} alt={product.name} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&q=80"; }} style={{ width: "100%", height: 300, objectFit: "cover" }} />

        {/* Name & price */}
        <div style={{ background: "#fff", padding: 16, borderBottom: "1px solid #ebebeb" }}>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#222", marginBottom: 10, lineHeight: 1.3 }}>{product.name}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ textDecoration: "line-through", color: "#aaa", fontSize: 14 }}>{product.price_original}</span>
            <span style={{ fontWeight: 800, fontSize: 20, color: "#FF6B00" }}>{product.price_offer}</span>
            <span style={{ color: "#d32f2f", fontWeight: 700, fontSize: 13, background: "#FFEBEE", padding: "2px 8px", borderRadius: 6 }}>{product.discount}</span>
          </div>
        </div>

        {/* Yeh lena sahi rahega agar */}
        <div style={{ padding: "12px 14px" }}>
          <div style={{ background: "#FFF8F2", borderLeft: "4px solid #FF6B00", borderRadius: "0 10px 10px 0", padding: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#FF6B00", marginBottom: 10 }}>🎯 Yeh lena sahi rahega agar:</div>
            {product.problems_detailed.map((p, i) => (
              <div key={i} style={{ fontSize: 13, color: "#C45A00", lineHeight: 1.6, paddingLeft: 4 }}>• {p}</div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ padding: "0 14px 12px" }}>
          <div style={{ background: "#F1F8E9", borderLeft: "4px solid #4CAF50", borderRadius: "0 10px 10px 0", padding: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#2E7D32", marginBottom: 10 }}>📈 Kitne din mein kya feel hoga:</div>
            {product.timeline.map((t, i) => {
              const label = i === 0 ? "Pehle hafte:" : i === 1 ? "Doosre hafte:" : "Teen-chaar hafte mein:";
              return (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{ background: "#C8E6C9", color: "#2E7D32", fontSize: 10, fontWeight: 700, padding: "3px 6px", borderRadius: 6, whiteSpace: "nowrap", minWidth: 60, textAlign: "center" }}>{label}</span>
                  <span style={{ fontSize: 13, color: "#555", lineHeight: 1.4 }}>{t.benefit}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* About product */}
        <div style={{ background: "#fff", padding: "14px 16px", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 8 }}>Yeh hai kya aur kaam kaise karta hai</div>
          <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>
            Yeh product specially {product.category.toLowerCase()} se related problems ke liye designed hai. {product.outcome}. Hazaaron logon ne iska fayda uthaya hai aur positive results dekhe hain.
          </div>
        </div>

        {/* Conversion stats */}
        <div style={{ background: "#fff", padding: "14px 16px", borderBottom: "1px solid #ebebeb", marginTop: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: "#222" }}>⭐ 4.8</span>
            <span style={{ color: "#888", fontSize: 12 }}>•</span>
            <span style={{ color: "#888", fontSize: 12 }}>2,847 reviews</span>
            <span style={{ color: "#888", fontSize: 12 }}>•</span>
            <span style={{ color: "#2E7D32", fontSize: 12, fontWeight: 600 }}>94% recommend</span>
          </div>
          {[{ stars: 5, pct: 78 }, { stars: 4, pct: 14 }, { stars: 3, pct: 5 }, { stars: 2, pct: 2 }, { stars: 1, pct: 1 }].map((r) => (
            <div key={r.stars} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
              <span style={{ fontSize: 11, color: "#888", width: 16 }}>{r.stars}★</span>
              <div style={{ flex: 1, height: 6, background: "#f0f0f0", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ width: `${r.pct}%`, height: "100%", background: "#FF6B00", borderRadius: 3 }} />
              </div>
              <span style={{ fontSize: 10, color: "#aaa", width: 28 }}>{r.pct}%</span>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div style={{ background: "#fff", padding: "14px 16px", borderBottom: "1px solid #ebebeb", marginTop: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 12 }}>🗣️ Inlogo ne liya, yeh hua:</div>
          {product.reviews.map((review, i) => (
            <div key={i} style={{ background: "#FAFAFA", border: "1px solid #f0f0f0", borderRadius: 10, padding: 12, marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#FFE0B2", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#FF6B00" }}>{review.name[0]}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontWeight: 600, fontSize: 13, color: "#333" }}>{review.name}</span>
                    <span style={{ background: "#E8F5E9", color: "#2E7D32", fontSize: 9, fontWeight: 700, padding: "1px 6px", borderRadius: 6 }}>✓ Khariddar</span>
                  </div>
                </div>
                <span style={{ background: "#FFF3E0", color: "#FF6B00", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>{review.problem}</span>
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 6 }}>&ldquo;{review.text}&rdquo;</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 11, color: "#FF6B00", fontWeight: 600 }}>⭐ {review.rating}</div>
                {i === 0 && <span style={{ fontSize: 11, color: "#FF6B00", fontWeight: 600, cursor: "pointer" }}>📹 Video mein dekho kya bola</span>}
              </div>
              <div style={{ fontSize: 10, color: "#aaa", marginTop: 4 }}>🛍️ Bought: {product.name}</div>
            </div>
          ))}
        </div>

        {/* Astrologer recommends */}
        <div style={{ background: "#fff", padding: "14px 16px", borderBottom: "1px solid #ebebeb", marginTop: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 12 }}>👨‍🔬 Astrologer ji kehte hain:</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#FFF8F2", border: "1px solid #FFE4C8", borderRadius: 12, padding: 12 }}>
            <img src={recommender.photo} alt={recommender.name} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face"; }} style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #FF6B00", objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#333", marginBottom: 2 }}>{recommender.name}</div>
              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.4 }}>&ldquo;Yeh product {product.category.toLowerCase()} ke liye recommend kart{isFemale ? "i" : "a"} hoon&rdquo;</div>
            </div>
          </div>
          <button onClick={() => router.push(`/astrologer/${recommender.id}`)} style={{ width: "100%", background: "transparent", border: "1.5px solid #FF6B00", color: "#FF6B00", borderRadius: 10, padding: "10px 0", fontWeight: 700, fontSize: 13, cursor: "pointer", marginTop: 10 }}>Astrologer se poochein →</button>
        </div>

        {/* Trust */}
        <div style={{ background: "#fff", padding: 16, marginTop: 1, display: "flex", justifyContent: "space-around", borderBottom: "1px solid #ebebeb" }}>
          {[{ icon: "😊", label: "Happy\nCustomers" }, { icon: "✅", label: "Assured\nSatisfaction" }, { icon: "🎓", label: "Performed by\nExperts" }].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <span style={{ fontSize: 10, color: "#888", textAlign: "center", lineHeight: 1.3, whiteSpace: "pre-line" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed bottom */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 420, display: "flex", zIndex: 50 }}>
        <div style={{ flex: "0 0 40%", background: "#FF6B00", color: "#fff", padding: "14px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 11, opacity: 0.8 }}>Price</div>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{product.price_offer}</div>
        </div>
        <button style={{ flex: 1, background: "#E65100", color: "#fff", border: "none", fontWeight: 700, fontSize: 15, cursor: "pointer", padding: "14px 0" }}>CONTINUE →</button>
      </div>
    </div>
  );
}
