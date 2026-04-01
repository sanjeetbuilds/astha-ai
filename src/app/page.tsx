"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ASTROLOGERS, INTENT_CHIPS } from "@/data/mockData";
import AstroCard from "@/components/AstroCard";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const router = useRouter();
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = activeChip
    ? ASTROLOGERS.filter((a) => a.speciality === activeChip)
    : ASTROLOGERS;

  const handleChipClick = (filter: string) => {
    const next = activeChip === filter ? null : filter;
    setActiveChip(next);
    if (next && listRef.current) {
      setTimeout(() => listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  };

  const handleSearchSubmit = () => {
    if (searchText.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: 420, margin: "0 auto", minHeight: "100vh", background: "#F5F5F5", overflowX: "hidden", position: "relative", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Sticky header */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: "1px solid #ebebeb", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", padding: 0, color: "#333" }}>☰</button>
        <div style={{ fontWeight: 800, fontSize: 20, color: "#FF6B00", display: "flex", alignItems: "center", gap: 6 }}>🔮 AsthaAI</div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "#E8F5E9", color: "#2E7D32", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>₹0</div>
          <span style={{ fontSize: 18, cursor: "pointer" }}>🔔</span>
        </div>
      </div>

      {/* Search bar */}
      <div style={{ padding: "12px 16px", background: "#fff", borderBottom: "1px solid #ebebeb" }}>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16, pointerEvents: "none" }}>🔍</span>
          <input
            type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") handleSearchSubmit(); }}
            onFocus={() => { if (!searchText.trim()) router.push("/search"); }}
            placeholder="Kya chal raha hai zindagi mein? Likho..."
            style={{ width: "100%", background: "#F5F5F5", border: "none", borderRadius: 10, padding: "12px 14px 12px 38px", fontSize: 14, color: "#333", outline: "none", boxSizing: "border-box" }}
          />
        </div>
      </div>

      <div style={{ padding: "0 0 80px" }}>
        {/* Live astrologers */}
        <div style={{ padding: "14px 14px 0", background: "#fff", borderBottom: "1px solid #ebebeb" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 10 }}>Abhi online hain 🟢</div>
          <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 14, scrollbarWidth: "none" }}>
            {ASTROLOGERS.filter((a) => a.available).slice(0, 5).map((a) => (
              <div key={a.id} onClick={() => router.push(`/astrologer/${a.id}`)} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", minWidth: 70 }}>
                <div style={{ position: "relative" }}>
                  <img src={a.photo} alt={a.name} style={{ width: 56, height: 56, borderRadius: "50%", border: "2.5px solid #FF6B00", objectFit: "cover" }} />
                  <div style={{ position: "absolute", bottom: -2, left: "50%", transform: "translateX(-50%)", background: "#FF6B00", color: "#fff", fontSize: 8, fontWeight: 700, padding: "1px 8px", borderRadius: 8, whiteSpace: "nowrap" }}>LIVE</div>
                </div>
                <div style={{ fontSize: 10, color: "#555", textAlign: "center", lineHeight: 1.2, maxWidth: 70, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.name.split(" ").slice(1).join(" ")}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo banner */}
        <div style={{ padding: "10px 14px" }}>
          <div style={{ background: "linear-gradient(135deg, #FF6B00, #FF8F3F)", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 14, lineHeight: 1.3 }}>₹500 mein shuru karein —</div>
              <div style={{ color: "#FFE0B2", fontWeight: 800, fontSize: 16 }}>₹300 extra milenge aaj</div>
            </div>
            <button style={{ background: "#fff", color: "#FF6B00", border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>CLAIM</button>
          </div>
        </div>

        {/* Intent chips */}
        <div style={{ padding: "4px 14px 10px" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#888", marginBottom: 8 }}>Aaj kya bhaari lag raha hai?</div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4, scrollbarWidth: "none" }}>
            {INTENT_CHIPS.map((chip) => (
              <button
                key={chip.label}
                onClick={() => handleChipClick(chip.filter)}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  background: activeChip === chip.filter ? "#FF6B00" : "#fff",
                  color: activeChip === chip.filter ? "#fff" : "#555",
                  border: `1px solid ${activeChip === chip.filter ? "#FF6B00" : "#e0e0e0"}`,
                  borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                  borderBottom: activeChip === chip.filter ? "3px solid #E65100" : "1px solid transparent",
                  boxShadow: activeChip === chip.filter ? "0 0 8px rgba(255,107,0,0.3)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{chip.emoji}</span> {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "#ebebeb", margin: "0 14px 10px" }} />

        {/* Astrologer list */}
        <div ref={listRef} style={{ padding: "0 14px" }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#333", marginBottom: 10 }}>Aapke liye sahi log</div>
          {filtered.map((a) => (
            <AstroCard key={a.id} astrologer={a} isTopMatch={false} showWhyMatched={activeChip !== null} onClick={() => router.push(`/astrologer/${a.id}`)} />
          ))}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: 30, color: "#aaa", fontSize: 13 }}>Is category mein koi astrologer nahi mila</div>
          )}
        </div>
      </div>

      <BottomNav active="Home" />
    </div>
  );
}
