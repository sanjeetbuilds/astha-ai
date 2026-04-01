"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { REMEDY_CATEGORIES } from "@/data/mockData";
import BottomNav from "@/components/BottomNav";

const HERO_SLIDES = [
  { title: "Dil ki takleef", sub: "Pyaar mein jo dard hai — uska upay hai", bg: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600" },
  { title: "Naukri ki ruk-ruk", sub: "Career mein jo band darwaza hai — khul sakta hai", bg: "https://images.unsplash.com/photo-1573408301185-9519f94815f7?w=600" },
  { title: "Ghar mein chain nahi?", sub: "Shanti aur protection ke liye tried upay", bg: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=600" },
];

export default function RemediesPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const filteredCategories = searchQuery.trim()
    ? REMEDY_CATEGORIES.filter((c) =>
        c.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.displayLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.chips.some((ch) => ch.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : REMEDY_CATEGORIES;

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto", minHeight: "100vh", background: "#F5F5F5", overflowX: "hidden", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #ebebeb", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => router.push("/")} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0, color: "#333" }}>←</button>
          <span style={{ fontWeight: 700, fontSize: 16, color: "#333" }}>Remedies</span>
        </div>
        <button onClick={() => router.push("/search")} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", padding: 0 }}>🔍</button>
      </div>

      <div style={{ padding: "0 0 80px" }}>
        {/* Hero carousel */}
        <div style={{ position: "relative", height: 160, overflow: "hidden" }}>
          {HERO_SLIDES.map((slide, i) => (
            <div key={i} style={{ position: "absolute", inset: 0, opacity: currentSlide === i ? 1 : 0, transition: "opacity 0.5s ease", backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${slide.bg})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 20px" }}>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 4 }}>{slide.title}</div>
              <div style={{ color: "#ddd", fontSize: 13 }}>{slide.sub}</div>
            </div>
          ))}
          <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
            {HERO_SLIDES.map((_, i) => (
              <div key={i} style={{ width: currentSlide === i ? 16 : 6, height: 6, borderRadius: 3, background: currentSlide === i ? "#FF6B00" : "rgba(255,255,255,0.5)", transition: "all 0.3s ease" }} />
            ))}
          </div>
        </div>

        {/* Problem search */}
        <div style={{ padding: "12px 14px" }}>
          <div style={{ background: "linear-gradient(135deg, #FFF8F2, #FFF3E0)", border: "1px solid #FFCC80", borderRadius: 12, padding: 12 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#FF6B00", marginBottom: 8 }}>🎯 Kya takleef hai? Seedha likho:</div>
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="breakup, naukri ki tension, ghar mein jhagda..." style={{ width: "100%", background: "#fff", border: "1px solid #FFE0B2", borderRadius: 8, padding: "10px 12px", fontSize: 13, outline: "none", color: "#333", boxSizing: "border-box" }} />
          </div>
        </div>

        {/* Category grid */}
        <div style={{ padding: "0 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {filteredCategories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => router.push(`/remedies/${cat.slug}`)}
              style={{
                position: "relative", height: 140, borderRadius: 12, overflow: "hidden", cursor: "pointer",
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%), url(${cat.image})`,
                backgroundSize: "cover", backgroundPosition: "center",
                display: "flex", alignItems: "flex-end", justifyContent: "center", padding: 12,
              }}
            >
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.3, textAlign: "center", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                {cat.displayLabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="Remedies" />
    </div>
  );
}
