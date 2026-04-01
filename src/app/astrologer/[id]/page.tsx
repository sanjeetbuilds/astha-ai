"use client";

import { useParams, useRouter } from "next/navigation";
import { ASTROLOGERS } from "@/data/mockData";

export default function AstrologerProfile() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const astrologer = ASTROLOGERS.find((a) => a.id === id);

  if (!astrologer) {
    return <div style={{ padding: 40, textAlign: "center", color: "#aaa" }}>Astrologer not found</div>;
  }

  const similar = ASTROLOGERS.filter((a) => a.id !== id).slice(0, 3);

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto", minHeight: "100vh", background: "#F5F5F5", overflowX: "hidden", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header - shows astrologer name */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #ebebeb", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => router.back()} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0, color: "#333" }}>←</button>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>{astrologer.name}</span>
        </div>
        <button style={{ background: "#E8F5E9", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 12, fontWeight: 600, color: "#2E7D32", cursor: "pointer" }}>📤 Share</button>
      </div>

      <div style={{ padding: "0 0 100px" }}>
        {/* Profile card */}
        <div style={{ background: "#fff", padding: "20px 16px 16px", borderBottom: "1px solid #ebebeb" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={astrologer.photo} alt={astrologer.name} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face"; }} style={{ width: 80, height: 80, borderRadius: "50%", border: "3px solid #FF6B00", objectFit: "cover" }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#222", marginBottom: 4 }}>{astrologer.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ background: "#FF6B00", color: "#fff", fontSize: 11, fontWeight: 700, padding: "2px 8px 2px 6px", borderRadius: "10px 4px 4px 10px" }}>{astrologer.rating} ★</span>
                <span style={{ fontSize: 12, color: "#888" }}>{astrologer.experience}</span>
              </div>
              <div style={{ fontSize: 12, color: "#888" }}>{astrologer.languages}</div>
            </div>
            <button style={{ background: "#FF6B00", color: "#fff", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Follow</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 10, padding: "12px 14px" }}>
          <div style={{ flex: 1, background: "#fff", border: "1px solid #ebebeb", borderRadius: 10, padding: 12, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>Consultation fees</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#FF6B00" }}>{astrologer.price_offer}</div>
            <div style={{ fontSize: 11, color: "#aaa", textDecoration: "line-through" }}>{astrologer.price_original}</div>
          </div>
          <div style={{ flex: 1, background: "#fff", border: "1px solid #ebebeb", borderRadius: 10, padding: 12, textAlign: "center" }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>Mins of consultation</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#FF6B00" }}>{astrologer.minutes_consulted}</div>
          </div>
        </div>

        {/* Video intro */}
        <div style={{ padding: "0 14px 12px" }}>
          <div style={{ position: "relative", background: "#1a1a1a", borderRadius: 12, overflow: "hidden", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.8))", padding: "30px 14px 12px" }}>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{astrologer.name}</div>
              <div style={{ color: "#aaa", fontSize: 11 }}>{astrologer.speciality}</div>
            </div>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.95)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 2 }}>
              <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #FF6B00", marginLeft: 4 }} />
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 6 }}>🎬 Intro video • 45 sec</div>
          <div style={{ fontSize: 12, color: "#FF6B00", fontWeight: 600, marginTop: 2 }}>Consult se pehle — inhe jaaniye</div>
        </div>

        {/* Why choose */}
        <div style={{ padding: "0 14px 12px" }}>
          <div style={{ background: "linear-gradient(135deg, #FFF8F2, #FFF3E0)", border: "1.5px solid #FFCC80", borderRadius: 12, padding: 14 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#FF6B00", marginBottom: 6 }}>🎯 Yeh aapke liye kyun sahi hain?</div>
            <div style={{ fontSize: 13, color: "#C45A00", lineHeight: 1.5, marginBottom: 4 }}>{astrologer.why_matched}</div>
            <div style={{ fontSize: 12, color: "#E65100", fontWeight: 600 }}>📊 {astrologer.cases}</div>
          </div>
        </div>

        {/* Skills */}
        <div style={{ background: "#fff", padding: "14px 16px", borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 10 }}>Skills</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {astrologer.skills.split(", ").map((skill) => (
              <span key={skill} style={{ background: "#FFF3E0", color: "#FF6B00", fontSize: 12, fontWeight: 600, padding: "5px 14px", borderRadius: 20, border: "1px solid #FFE0B2" }}>{skill}</span>
            ))}
          </div>
        </div>

        {/* About */}
        <div style={{ background: "#fff", padding: "14px 16px", borderBottom: "1px solid #ebebeb", marginTop: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 8 }}>Inke baare mein</div>
          <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{astrologer.bio}</div>
          <button style={{ background: "none", border: "none", color: "#FF6B00", fontSize: 12, fontWeight: 700, cursor: "pointer", padding: 0, marginTop: 6 }}>poora padhein →</button>
        </div>

        {/* Reviews */}
        <div style={{ background: "#fff", padding: "14px 16px", borderBottom: "1px solid #ebebeb", marginTop: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 12 }}>🗣️ Inke paas aaye, kuch lekar gaye</div>
          {astrologer.reviews.map((review, i) => (
            <div key={i} style={{ background: "#FAFAFA", border: "1px solid #f0f0f0", borderRadius: 10, padding: 12, marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#FFE0B2", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#FF6B00" }}>{review.name[0]}</div>
                <div style={{ flex: 1 }}><div style={{ fontWeight: 600, fontSize: 13, color: "#333" }}>{review.name}</div></div>
                <span style={{ background: "#FFF3E0", color: "#FF6B00", fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>{review.problem}</span>
              </div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 6 }}>&ldquo;{review.text}&rdquo;</div>
              <div style={{ fontSize: 11, color: "#FF6B00", fontWeight: 600 }}>⭐ {review.rating}</div>
            </div>
          ))}
        </div>

        {/* Similar */}
        <div style={{ background: "#fff", padding: "14px 16px", borderBottom: "1px solid #ebebeb", marginTop: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#333", marginBottom: 12 }}>Inka wait hai? Yeh bhi mil sakte hain</div>
          <div style={{ display: "flex", gap: 16, overflowX: "auto", scrollbarWidth: "none" }}>
            {similar.map((a) => (
              <div key={a.id} onClick={() => router.push(`/astrologer/${a.id}`)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer", minWidth: 80 }}>
                <img src={a.photo} alt={a.name} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face"; }} style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid #FF6B00", objectFit: "cover" }} />
                <div style={{ fontSize: 11, color: "#333", textAlign: "center", fontWeight: 600, maxWidth: 80, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.name.split(" ").slice(1).join(" ")}</div>
                <span style={{ fontSize: 10, color: "#FF6B00", fontWeight: 600 }}>⭐ {a.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom */}
      {!astrologer.available && (
        <div style={{ position: "fixed", bottom: 56, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 420, background: "#FFF3E0", borderTop: "1px solid #FFE0B2", padding: "8px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 49, fontSize: 12, color: "#C45A00" }}>
          <span>⏱ Abhi available nahi hain</span>
          <button style={{ background: "transparent", border: "1.5px solid #FF6B00", color: "#FF6B00", borderRadius: 6, padding: "5px 14px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>SET ALERT</button>
        </div>
      )}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 420, background: "#fff", borderTop: "1px solid #ebebeb", padding: "10px 16px", display: "flex", gap: 10, zIndex: 50 }}>
        <button style={{ flex: 1, background: astrologer.available ? "#FF6B00" : "#ccc", color: "#fff", border: "none", borderRadius: 10, padding: "12px 0", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>💬 CHAT</button>
        <button style={{ flex: 1, background: "transparent", color: "#888", border: "1.5px solid #ddd", borderRadius: 10, padding: "12px 0", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>📞 CALL</button>
      </div>
    </div>
  );
}
